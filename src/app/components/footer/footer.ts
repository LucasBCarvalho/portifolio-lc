import { Component, inject } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container inner">
        <p>© {{ year }} {{ profile.name }}</p>
        <a href="#inicio" class="top">{{ i18n.ui().footer.backToTop }}</a>
      </div>
    </footer>
  `,
  styles: `
    footer {
      border-top: 1px solid var(--border);
      padding-block: 28px;
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .built span {
      font-weight: 600;
    }

    .top:hover {
      color: var(--text);
    }
  `,
})
export class Footer {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
