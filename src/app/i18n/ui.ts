import { Lang } from '../models/portfolio.models';

/** Textos fixos da interface. O inglês precisa ter exatamente as mesmas chaves do português. */
const PT = {
  meta: {
    title: 'Lucas Carvalho | Desenvolvedor Fullstack Angular & PHP',
    description:
      'Portfólio de Lucas Borges de Carvalho — Desenvolvedor Fullstack (Angular, PHP, MySQL) com foco em Arquitetura de Software e Automação com IA.',
  },
  nav: {
    links: {
      sobre: 'Sobre',
      skills: 'Skills',
      experiencia: 'Trajetória',
      projetos: 'Projetos',
      formacao: 'Formação',
      contato: 'Contato',
    },
    main: 'Navegação principal',
    home: 'Voltar ao início',
    themeLight: 'Ativar tema claro',
    themeDark: 'Ativar tema escuro',
    menu: 'Abrir menu',
    switchLang: 'Switch to English',
  },
  hero: {
    status: 'Aberto a novas oportunidades',
    greeting: 'Olá, eu sou',
    lead: 'Construo sistemas web completos, do banco de dados à interfaces, com Angular, PHP e MySQL, e levo IA para dentro de aplicações reais.',
    roles: [
      'Angular',
      'PHP 8 & MySQL',
      'APIs REST',
      'IA aplicada (RAG + MCP)',
      'Arquitetura de Software',
    ],
    seeProjects: 'Ver projetos',
    downloadCv: 'Baixar CV',
    codeBuild: 'soluções que resolvem',
    scroll: 'Rolar para a seção Sobre',
  },
  about: {
    eyebrow: '// sobre mim',
    title: 'Do banco de dados à interface,',
    titleHighlight: 'com IA no meio',
  },
  skills: {
    eyebrow: '// stack',
    title: 'Tecnologias que uso no dia a dia',
    subtitle:
      'Fullstack com base sólida em Angular e PHP, complementada por IA, dados e infraestrutura.',
  },
  experience: {
    eyebrow: '// trajetória',
    title: 'Experiência profissional',
    subtitle:
      'De estagiário a desenvolvedor colocando IA em produção e modernizando front-ends Angular.',
  },
  projects: {
    eyebrow: '// projetos',
    title: 'O que eu já construí',
    subtitle: 'Projetos profissionais e pessoais/acadêmicos disponíveis no GitHub.',
    filterLabel: 'Filtrar projetos',
    filters: {
      todos: 'Todos',
      profissional: 'Profissional',
      angular: 'Angular',
      php: 'PHP',
      ia: 'IA',
      outros: 'Outros',
    },
    code: 'Código',
    codeOf: 'Código de',
    demo: 'Ver online',
    demoOf: 'Demo de',
    private: 'Privado',
    privateTitle: 'Código proprietário',
    showMore: (n: number) => `Ver mais ${n} projetos`,
    githubTitle: 'Atividade recente no GitHub',
    publicRepos: (n: number) => `${n} repositórios públicos`,
    githubError: 'Não foi possível carregar os repositórios agora. Veja direto no GitHub.',
    noDescription: 'Sem descrição',
    updated: 'atualizado',
  },
  education: {
    eyebrow: '// formação',
    title: 'Educação contínua',
    subtitle:
      'Graduação em Computação, especialização em Arquitetura de Software e pós em IA em andamento.',
    ongoing: 'Em andamento',
    done: 'Concluído',
    courses: 'Cursos e comunidade',
  },
  contact: {
    eyebrow: '// contato',
    title: 'Vamos',
    titleHighlight: 'conversar?',
    subtitle:
      'Estou aberto a oportunidades como desenvolvedor fullstack Angular/PHP, freelas e projetos com IA.',
    copied: '· copiado!',
    clickToCopy: '· clique para copiar',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    nameError: 'Informe seu nome.',
    email: 'E-mail',
    emailPlaceholder: 'voce@empresa.com',
    emailError: 'Informe um e-mail válido.',
    message: 'Mensagem',
    messagePlaceholder: 'Conte um pouco sobre a oportunidade ou projeto...',
    messageError: 'A mensagem precisa ter pelo menos 10 caracteres.',
    send: 'Enviar mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada! Vou responder o mais rápido possível.',
    error: 'Não foi possível enviar agora. Tente de novo ou me escreva em',
  },
  footer: {
    backToTop: 'Voltar ao topo ↑',
  },
};

export type UiStrings = typeof PT;

const EN: UiStrings = {
  meta: {
    title: 'Lucas Carvalho | Fullstack Developer Angular & PHP',
    description:
      'Portfolio of Lucas Borges de Carvalho — Fullstack Developer (Angular, PHP, MySQL) focused on Software Architecture and AI Automation.',
  },
  nav: {
    links: {
      sobre: 'About',
      skills: 'Skills',
      experiencia: 'Experience',
      projetos: 'Projects',
      formacao: 'Education',
      contato: 'Contact',
    },
    main: 'Main navigation',
    home: 'Back to top',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
    menu: 'Open menu',
    switchLang: 'Mudar para português',
  },
  hero: {
    status: 'Open to new opportunities',
    greeting: "Hi, I'm",
    lead: 'I build complete web systems, from the database to the interface, with Angular, PHP and MySQL, and bring AI into real-world applications.',
    roles: [
      'Angular',
      'PHP 8 & MySQL',
      'REST APIs',
      'Applied AI (RAG + MCP)',
      'Software Architecture',
    ],
    seeProjects: 'View projects',
    downloadCv: 'Download CV',
    codeBuild: 'solutions that work',
    scroll: 'Scroll to the About section',
  },
  about: {
    eyebrow: '// about me',
    title: 'From database to interface,',
    titleHighlight: 'with AI in between',
  },
  skills: {
    eyebrow: '// stack',
    title: 'Technologies I use every day',
    subtitle:
      'Fullstack with a solid Angular and PHP foundation, complemented by AI, data and infrastructure.',
  },
  experience: {
    eyebrow: '// experience',
    title: 'Work experience',
    subtitle:
      'From intern to developer shipping AI to production and modernizing Angular front ends.',
  },
  projects: {
    eyebrow: '// projects',
    title: "What I've built",
    subtitle: 'Professional and personal/academic projects available on GitHub.',
    filterLabel: 'Filter projects',
    filters: {
      todos: 'All',
      profissional: 'Professional',
      angular: 'Angular',
      php: 'PHP',
      ia: 'AI',
      outros: 'Other',
    },
    code: 'Code',
    codeOf: 'Source code of',
    demo: 'Live demo',
    demoOf: 'Live demo of',
    private: 'Private',
    privateTitle: 'Proprietary code',
    showMore: (n: number) => `Show ${n} more projects`,
    githubTitle: 'Recent GitHub activity',
    publicRepos: (n: number) => `${n} public repositories`,
    githubError: "Couldn't load the repositories right now. Check them out on GitHub.",
    noDescription: 'No description',
    updated: 'updated',
  },
  education: {
    eyebrow: '// education',
    title: 'Continuous learning',
    subtitle:
      "Bachelor's in Computer Science, a postgraduate degree in Software Architecture and an AI postgraduate degree in progress.",
    ongoing: 'In progress',
    done: 'Completed',
    courses: 'Courses & community',
  },
  contact: {
    eyebrow: '// contact',
    title: "Let's",
    titleHighlight: 'talk?',
    subtitle:
      "I'm open to opportunities as a fullstack Angular/PHP developer, freelance work and AI projects.",
    copied: '· copied!',
    clickToCopy: '· click to copy',
    name: 'Name',
    namePlaceholder: 'Your name',
    nameError: 'Please enter your name.',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    emailError: 'Please enter a valid email.',
    message: 'Message',
    messagePlaceholder: 'Tell me a bit about the opportunity or project...',
    messageError: 'The message must be at least 10 characters long.',
    send: 'Send message',
    sending: 'Sending...',
    success: "Message sent! I'll get back to you as soon as possible.",
    error: "Couldn't send your message right now. Please try again or email me at",
  },
  footer: {
    backToTop: 'Back to top ↑',
  },
};

export const UI: Record<Lang, UiStrings> = { pt: PT, en: EN };
