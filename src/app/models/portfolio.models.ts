export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUser: string;
  linkedin: string;
  avatar: string;
  about: string[];
  highlights: Highlight[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

export interface Education {
  institution: string;
  course: string;
  period: string;
  status: 'concluido' | 'em-andamento';
}

export interface Course {
  name: string;
  provider: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export type ProjectCategory = 'profissional' | 'angular' | 'php' | 'ia' | 'outros';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  categories: ProjectCategory[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  private?: boolean;
}

export interface GithubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  homepage: string | null;
}

export interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

export type Lang = 'pt' | 'en';

/** Todo o conteúdo do portfólio em um idioma. */
export interface PortfolioContent {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  courses: Course[];
  skillGroups: SkillGroup[];
  projects: Project[];
  /** Arquivo do CV em public/ */
  cv: string;
}
