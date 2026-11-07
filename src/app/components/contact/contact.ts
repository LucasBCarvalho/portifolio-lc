import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContactService } from '../../services/contact.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  private readonly i18n = inject(LanguageService);
  protected readonly ui = computed(() => this.i18n.ui().contact);
  protected readonly whatsapp = `https://wa.me/${PROFILE.phone.replace(/\D/g, '')}`;
  protected readonly copied = signal(false);
  protected readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  private readonly contact = inject(ContactService);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    botcheck: [false],
  });

  protected invalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, message, botcheck } = this.form.getRawValue();

    // honeypot: campo invisível que só robôs preenchem
    if (botcheck) {
      this.status.set('success');
      this.form.reset();
      return;
    }

    // sem chave configurada: abre o cliente de e-mail do visitante como alternativa
    if (!this.contact.configured) {
      const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      return;
    }

    this.status.set('sending');
    this.contact.send({ name, email, message }).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
      },
      error: () => this.status.set('error'),
    });
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }
}
