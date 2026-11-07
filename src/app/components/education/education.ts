import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  template: `
    <section id="formacao" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">{{ ui().eyebrow }}</span>
          <h2>{{ ui().title }}</h2>
          <p>{{ ui().subtitle }}</p>
        </header>

        <div class="grid">
          @for (edu of content().education; track $index; let i = $index) {
            <article class="card edu" appReveal [revealDelay]="i * 90">
              <span class="status" [class.ongoing]="edu.status === 'em-andamento'">
                {{ edu.status === 'em-andamento' ? ui().ongoing : ui().done }}
              </span>
              <h3>{{ edu.course }}</h3>
              <p class="inst">{{ edu.institution }}</p>
              <p class="period">{{ edu.period }}</p>
            </article>
          }
        </div>

        <div class="courses card" appReveal>
          <h3>{{ ui().courses }}</h3>
          <ul>
            @for (course of content().courses; track $index) {
              <li>
                <span>{{ course.name }}</span>
                <span class="chip">{{ course.provider }}</span>
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
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
      gap: 20px;
    }

    .edu {
      padding: 26px;
      display: grid;
      gap: 8px;
      align-content: start;

      &:hover {
        border-color: var(--accent-b);
        transform: translateY(-3px);
      }

      h3 {
        font-size: 1.12rem;
        margin-top: 6px;
      }
    }

    .status {
      justify-self: start;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      padding: 3px 10px;
      border-radius: 999px;
      color: var(--accent-b);
      border: 1px solid color-mix(in srgb, var(--accent-b) 40%, transparent);

      &.ongoing {
        color: var(--success);
        border-color: color-mix(in srgb, var(--success) 40%, transparent);
      }
    }

    .inst {
      color: var(--accent);
      font-weight: 600;
      font-size: 0.95rem;
    }

    .period {
      color: var(--text-muted);
      font-size: 0.88rem;
    }

    .courses {
      margin-top: 20px;
      padding: 26px;

      h3 {
        font-size: 1.12rem;
        margin-bottom: 12px;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        padding: 12px 0;
        border-top: 1px solid var(--border);
        color: var(--text-muted);
      }
    }
  `,
})
export class EducationSection {
  private readonly i18n = inject(LanguageService);
  protected readonly content = this.i18n.content;
  protected readonly ui = computed(() => this.i18n.ui().education);
}
