# Portfólio - Lucas Carvalho

Portfólio pessoal em **Angular 21** (standalone components, signals, zoneless, SCSS).

## Rodar localmente

```bash
npm install
npm start          # http://localhost:4200
npm run build      # gera dist/portfolio/browser
```

## Onde editar o conteúdo

Todo o conteúdo (perfil, experiências, formação, skills e projetos) fica em
[`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts). Para adicionar um projeto,
basta incluir um objeto no array `PROJECTS` (marque `featured: true` para destacá-lo).

Os CVs para download ficam em `public/` (`cv-lucas-carvalho-pt.pdf` e `cv-lucas-carvalho-en.pdf`).

## Estrutura

```
src/app/
├── components/   # navbar, hero, about, skills, experience, projects, education, contact, footer
├── data/         # conteúdo do portfólio
├── directives/   # appReveal (animação ao rolar)
├── models/       # interfaces TypeScript
└── services/     # ThemeService (claro/escuro) e GithubService (API pública do GitHub)
```

## Deploy (Vercel)

Importe o repositório na Vercel, o preset Angular é detectado automaticamente.
Output directory: `dist/portfolio/browser`.
