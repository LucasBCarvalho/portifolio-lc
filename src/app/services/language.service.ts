import { Injectable, computed, effect, signal } from '@angular/core';
import { CONTENT_PT } from '../data/portfolio.data';
import { CONTENT_EN } from '../data/portfolio.data.en';
import { UI } from '../i18n/ui';
import { Lang, PortfolioContent } from '../models/portfolio.models';

const STORAGE_KEY = 'portfolio-lang';

const CONTENT: Record<Lang, PortfolioContent> = { pt: CONTENT_PT, en: CONTENT_EN };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.initialLang());

  /** Conteúdo do portfólio (perfil, experiências, projetos...) no idioma atual. */
  readonly content = computed(() => CONTENT[this.lang()]);

  /** Textos fixos da interface no idioma atual. */
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const ui = this.ui();
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
      document.title = ui.meta.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', ui.meta.description);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // storage indisponível (modo privado etc.)
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'pt' ? 'en' : 'pt'));
  }

  /** Idioma salvo; senão, inglês para navegadores que não estão em português. */
  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch {
      // ignora
    }
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
