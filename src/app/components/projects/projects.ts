import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PROFILE, PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectCategory } from '../../models/portfolio.models';
import { GithubService } from '../../services/github.service';

type Filter = 'todos' | ProjectCategory;

const INITIAL_VISIBLE = 9;

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, DatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly github = inject(GithubService);
  protected readonly profile = PROFILE;

  protected readonly filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'profissional', label: 'Profissional' },
    { id: 'angular', label: 'Angular' },
    { id: 'php', label: 'PHP' },
    { id: 'ia', label: 'IA' },
    { id: 'outros', label: 'Outros' },
  ];

  protected readonly filter = signal<Filter>('todos');
  protected readonly showAll = signal(false);

  private readonly filtered = computed(() => {
    const f = this.filter();
    return f === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(f));
  });

  protected readonly visible = computed(() =>
    this.showAll() ? this.filtered() : this.filtered().slice(0, INITIAL_VISIBLE),
  );

  protected readonly hiddenCount = computed(() => this.filtered().length - this.visible().length);

  protected count(id: Filter): number {
    return id === 'todos'
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.categories.includes(id)).length;
  }

  protected select(id: Filter): void {
    this.filter.set(id);
    this.showAll.set(false);
  }
}
