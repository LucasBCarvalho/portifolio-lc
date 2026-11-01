import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">// stack</span>
          <h2>Tecnologias que uso no dia a dia</h2>
          <p>
            Fullstack com base sólida em Angular e PHP, complementada por IA, dados e
            infraestrutura.
          </p>
        </header>

        <div class="grid">
          @for (group of groups; track group.title; let i = $index) {
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
  protected readonly groups = SKILL_GROUPS;
}
