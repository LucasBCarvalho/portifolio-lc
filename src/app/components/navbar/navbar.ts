import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

interface NavLink {
  id: string;
  label: string;
}

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

  protected readonly links: NavLink[] = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiencia', label: 'Trajetória' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'formacao', label: 'Formação' },
    { id: 'contato', label: 'Contato' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('');

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 20);

    const offset = window.innerHeight * 0.35;
    let current = '';
    for (const link of this.links) {
      const section = document.getElementById(link.id);
      if (section && section.getBoundingClientRect().top <= offset) current = link.id;
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
