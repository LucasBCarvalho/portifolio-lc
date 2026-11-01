import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { PROFILE } from '../data/portfolio.data';
import { GithubRepo, GithubUser } from '../models/portfolio.models';

const API = `https://api.github.com/users/${PROFILE.githubUser}`;

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);

  /** Repositórios atualizados mais recentemente (sem forks). `undefined` enquanto carrega, `null` em caso de erro. */
  readonly recentRepos = toSignal(
    this.http.get<GithubRepo[]>(`${API}/repos?per_page=100&sort=updated`).pipe(
      map((repos) => repos.filter((r) => !r.fork && r.name !== PROFILE.githubUser).slice(0, 6)),
      catchError(() => of(null)),
    ),
  );

  readonly user = toSignal(this.http.get<GithubUser>(API).pipe(catchError(() => of(null))));
}
