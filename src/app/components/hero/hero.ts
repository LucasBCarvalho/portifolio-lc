import { Component, DestroyRef, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

const ROLES = [
  'Angular',
  'PHP 8 & MySQL',
  'APIs REST',
  'IA aplicada (RAG + MCP)',
  'Arquitetura de Software',
];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly typed = signal('');

  constructor() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typed.set(ROLES[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const role = ROLES[roleIndex];
      charIndex += deleting ? -1 : 1;
      this.typed.set(role.slice(0, charIndex));

      let delay = deleting ? 40 : 85;
      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 600);
    inject(DestroyRef).onDestroy(() => clearTimeout(timer));
  }
}
