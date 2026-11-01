import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experiencia" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">// trajetória</span>
          <h2>Experiência profissional</h2>
          <p>
            De estagiário a desenvolvedor colocando IA em produção e modernizando front-ends Angular.
          </p>
        </header>

        <ol class="timeline">
          @for (exp of experiences; track exp.role + exp.company) {
            <li appReveal>
              <span class="marker" [class.current]="exp.current" aria-hidden="true"></span>
              <article class="card item">
                <header>
                  <div>
                    <h3>{{ exp.role }}</h3>
                    <p class="company">
                      {{ exp.company }} · <span>{{ exp.location }}</span>
                    </p>
                  </div>
                  <span class="period" [class.current]="exp.current">{{ exp.period }}</span>
                </header>
                <ul class="bullets">
                  @for (bullet of exp.bullets; track bullet) {
                    <li>{{ bullet }}</li>
                  }
                </ul>
                <div class="chip-list">
                  @for (tech of exp.stack; track tech) {
                    <span class="chip">{{ tech }}</span>
                  }
                </div>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      list-style: none;
      margin: 0;
      padding: 0 0 0 32px;
      position: relative;
      display: grid;
      gap: 28px;

      &::before {
        content: '';
        position: absolute;
        left: 7px;
        top: 8px;
        bottom: 8px;
        width: 2px;
        background: linear-gradient(var(--accent-a), var(--accent-b), transparent);
      }

      > li {
        position: relative;
      }
    }

    .marker {
      position: absolute;
      left: -32px;
      top: 28px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--bg);
      border: 3px solid var(--accent-b);

      &.current {
        border-color: var(--accent-a);
        box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent-a) 20%, transparent);
      }
    }

    .item {
      padding: 26px;

      &:hover {
        border-color: var(--accent-b);
      }

      > header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 12px;
      }

      h3 {
        font-size: 1.2rem;
      }
    }

    .company {
      margin-top: 4px;
      font-weight: 600;
      color: var(--accent);

      span {
        font-weight: 400;
        color: var(--text-muted);
      }
    }

    .period {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      padding: 4px 12px;
      border-radius: 999px;
      border: 1px solid var(--border);
      color: var(--text-muted);
      white-space: nowrap;

      &.current {
        color: var(--success);
        border-color: color-mix(in srgb, var(--success) 40%, transparent);
      }
    }

    .bullets {
      margin: 18px 0 20px;
      padding-left: 18px;
      display: grid;
      gap: 8px;
      color: var(--text-muted);

      li::marker {
        color: var(--accent);
      }
    }
  `,
})
export class ExperienceSection {
  protected readonly experiences = EXPERIENCES;
}
