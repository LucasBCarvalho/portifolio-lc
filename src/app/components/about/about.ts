import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="sobre" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">// sobre mim</span>
          <h2>Do banco de dados à interface, <span class="gradient-text">com IA no meio</span></h2>
        </header>

        <div class="grid">
          <div class="text" appReveal>
            @for (paragraph of profile.about; track $index) {
              <p>{{ paragraph }}</p>
            }
          </div>

          <ul class="stats">
            @for (item of profile.highlights; track item.label; let i = $index) {
              <li class="card" appReveal [revealDelay]="i * 90">
                <strong class="gradient-text">{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 48px;
      align-items: start;

      @media (max-width: 860px) {
        grid-template-columns: 1fr;
      }
    }

    .text {
      display: grid;
      gap: 18px;
      color: var(--text-muted);
      font-size: 1.05rem;
    }

    .stats {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;

      li {
        padding: 24px 20px;
        display: grid;
        gap: 4px;

        &:hover {
          border-color: var(--accent-b);
          transform: translateY(-3px);
        }
      }

      strong {
        font-family: var(--font-display);
        font-size: 2rem;
        line-height: 1.1;
      }

      span {
        font-size: 0.9rem;
        color: var(--text-muted);
      }
    }
  `,
})
export class About {
  protected readonly profile = PROFILE;
}
