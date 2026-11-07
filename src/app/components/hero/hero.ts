import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = computed(() => this.i18n.content().profile);
  protected readonly typed = signal('');

  constructor() {
    const roles = () => this.i18n.ui().hero.roles;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typed.set(roles()[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      // lê a lista a cada passo para acompanhar a troca de idioma
      const role = roles()[roleIndex % roles().length];
      charIndex = Math.min(charIndex + (deleting ? -1 : 1), role.length);
      this.typed.set(role.slice(0, charIndex));

      let delay = deleting ? 40 : 85;
      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles().length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 600);
    inject(DestroyRef).onDestroy(() => clearTimeout(timer));
  }
}
