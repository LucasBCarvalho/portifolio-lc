import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectCategory } from '../../models/portfolio.models';
import { GithubService } from '../../services/github.service';
import { LanguageService } from '../../services/language.service';

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

  private readonly i18n = inject(LanguageService);
  protected readonly ui = computed(() => this.i18n.ui().projects);
  private readonly projects = computed(() => this.i18n.content().projects);

  protected readonly filters: Filter[] = [
    'todos',
    'profissional',
    'angular',
    'php',
    'ia',
    'outros',
  ];

  protected readonly filter = signal<Filter>('todos');
  protected readonly showAll = signal(false);

  private readonly filtered = computed(() => {
    const f = this.filter();
    const all = this.projects();
    return f === 'todos' ? all : all.filter((p) => p.categories.includes(f));
  });

  protected readonly visible = computed(() =>
    this.showAll() ? this.filtered() : this.filtered().slice(0, INITIAL_VISIBLE),
  );

  protected readonly hiddenCount = computed(() => this.filtered().length - this.visible().length);

  protected count(id: Filter): number {
    const all = this.projects();
    return id === 'todos' ? all.length : all.filter((p) => p.categories.includes(id)).length;
  }

  protected select(id: Filter): void {
    this.filter.set(id);
    this.showAll.set(false);
  }
}
