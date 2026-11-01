import { Component } from '@angular/core';
import { COURSES, EDUCATION } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  template: `
    <section id="formacao" class="section">
      <div class="container">
        <header class="section-head" appReveal>
          <span class="eyebrow">// formação</span>
          <h2>Educação contínua</h2>
          <p>
            Graduação em Computação, especialização em Arquitetura de Software e pós em IA em
            andamento.
          </p>
        </header>

        <div class="grid">
          @for (edu of education; track edu.course; let i = $index) {
            <article class="card edu" appReveal [revealDelay]="i * 90">
              <span class="status" [class.ongoing]="edu.status === 'em-andamento'">
                {{ edu.status === 'em-andamento' ? 'Em andamento' : 'Concluído' }}
              </span>
              <h3>{{ edu.course }}</h3>
              <p class="inst">{{ edu.institution }}</p>
              <p class="period">{{ edu.period }}</p>
            </article>
          }
        </div>

        <div class="courses card" appReveal>
          <h3>Cursos e comunidade</h3>
          <ul>
            @for (course of courses; track course.name) {
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
  protected readonly education = EDUCATION;
  protected readonly courses = COURSES;
}
