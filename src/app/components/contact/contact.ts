import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly whatsapp = `https://wa.me/${PROFILE.phone.replace(/\D/g, '')}`;
  protected readonly copied = signal(false);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected invalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  /** Sem back-end: abre o cliente de e-mail do visitante com a mensagem preenchida. */
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    this.form.reset();
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
