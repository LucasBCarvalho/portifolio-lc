import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

const SECTION_IDS = ['sobre', 'skills', 'experiencia', 'projetos', 'formacao', 'contato'] as const;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar {
  protected readonly theme = inject(ThemeService);

  protected readonly i18n = inject(LanguageService);
  protected readonly sections = SECTION_IDS;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('');

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);

    const offset = window.innerHeight * 0.35;
    let current = '';
    for (const id of SECTION_IDS) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= offset) current = id;
    }
    this.active.set(current);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
