import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">{{ ui().eyebrow }}</span>
          <h2>{{ ui().title }}</h2>
          <p>{{ ui().subtitle }}</p>
        </header>

        <div class="grid">
          @for (group of groups(); track group.icon; let i = $index) {
            <article class="card group" appReveal [revealDelay]="(i % 3) * 90">
              <header>
                <span class="icon" aria-hidden="true">{{ group.icon }}</span>
                <h3>{{ group.title }}</h3>
              </header>
              <div class="chip-list">
                @for (skill of group.skills; track skill) {
                  <span class="chip">{{ skill }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;

      @media (max-width: 400px) {
        grid-template-columns: 1fr;
      }
    }

    .group {
      padding: 26px;

      &:hover {
        border-color: var(--accent-b);
        transform: translateY(-3px);
      }

      header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 18px;
      }

      h3 {
        font-size: 1.15rem;
      }
    }

    .icon {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      border-radius: 10px;
      background: var(--gradient);
      color: #fff;
      font-size: 1.1rem;
    }
  `,
})
export class Skills {
  private readonly i18n = inject(LanguageService);
  protected readonly groups = computed(() => this.i18n.content().skillGroups);
  protected readonly ui = computed(() => this.i18n.ui().skills);
}
