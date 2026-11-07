import {
  Course,
  Education,
  Experience,
  PortfolioContent,
  Profile,
  Project,
  SkillGroup,
} from '../models/portfolio.models';

const GH = 'https://github.com/LucasBCarvalho';

export const PROFILE: Profile = {
  name: 'Lucas Borges de Carvalho',
  shortName: 'Lucas Carvalho',
  role: 'Desenvolvedor Fullstack',
  headline: 'Angular · PHP · MySQL · Arquitetura de Software · Automação com IA',
  location: 'Lauro de Freitas - BA',
  email: 'lucas.carvalho30111@gmail.com',
  phone: '+55 (71) 99318-3070',
  github: GH,
  githubUser: 'LucasBCarvalho',
  linkedin: 'https://www.linkedin.com/in/lucas-carvalho-95207732b',
  avatar: 'https://avatars.githubusercontent.com/u/105558309?v=4',
  about: [
    'Sou desenvolvedor full stack, formado em Ciência da Computação e pós-graduado em Arquitetura de Software. Atualmente, curso pós-graduação em Inteligência Artificial e Data Science.',
    'No back-end, trabalho com PHP 8 e MySQL no desenvolvimento e na manutenção de sistemas web. Conduzi a migração de um WMS para o PHP 8 e sua conteinerização com Docker, além de desenvolver APIs de integração e a emissão de NF-e junto à SEFAZ. No front-end, construo interfaces com Angular, TypeScript e PrimeNG, e atualmente conduzo a migração de uma aplicação do Angular 13 para o 22.',
    'Tenho foco em IA aplicada a sistemas reais: desenvolvi e coloquei em produção um chatbot para o WMS baseado em RAG e MCP, integrado ao Gemini, à OpenAI e ao Ollama. Gosto de resolver problemas com código limpo, boa arquitetura e automação.',
  ],
  highlights: [
    { value: '2+', label: 'anos de experiência' },
    { value: '3+', label: 'sistemas em produção' },
    { value: '5+', label: 'APIs integradas e criadas' },
    { value: 'TOP 300', label: 'de 80 mil no Santander Coders' },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'FIEMT',
    role: 'Bolsista de Pesquisa e Desenvolvimento',
    location: 'Cuiabá - MT',
    period: '04/2026 — Atual',
    current: true,
    bullets: [
      'Migração de sistema legado em Angular para Angular 20, modernizando arquitetura, componentes e práticas de front-end.',
      'Implementação de novo template de interface com PrimeNG, padronizando experiência visual e usabilidade.',
      'Pesquisa sobre mapas mentais com Obsidian para estruturação de conhecimento e documentação técnica.',
    ],
    stack: ['Angular 20', 'TypeScript', 'PrimeNG', 'Obsidian'],
  },
  {
    company: 'Giusoft Tecnologia',
    role: 'Desenvolvedor Júnior',
    location: 'Lauro de Freitas - BA',
    period: '01/2025 — Atual',
    current: true,
    bullets: [
      'Desenvolvimento e manutenção de sistemas web em PHP e MySQL, com otimização de queries e correção de bugs.',
      'Migração do sistema WMS para PHP 8, com conteinerização dos ambientes utilizando Docker.',
      'Desenvolvimento e implantação em produção de chatbot com RAG e MCP para o WMS, integrando Gemini, OpenAI e Ollama.',
      'Integração de 3+ APIs externas e criação de 2 APIs próprias, incluindo emissão de nota fiscal eletrônica via SEFAZ.',
      'Migração de bancos de dados, automações internas, versionamento com Git e deploys em Linux em 3+ sistemas.',
    ],
    stack: ['PHP 8', 'MySQL', 'Docker', 'Linux', 'Python', 'RAG', 'MCP', 'Git'],
  },
  {
    company: 'Giusoft Tecnologia',
    role: 'Estagiário',
    location: 'Lauro de Freitas - BA',
    period: '05/2024 — 01/2025',
    bullets: [
      'Participou de testes e implementação de sistemas.',
      'Auxiliou na criação e implantação de novas soluções.',
      'Pesquisas para melhoria de processos e adoção de novas tecnologias.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    company: 'Centro Universitário Jorge Amado',
    role: 'Projeto Extracurricular - Dangerous Bite',
    location: 'Salvador - BA',
    period: '01/2024 - 12/2024',
    bullets: [
      'Desenvolveu um jogo educativo para conscientizar sobre o mosquito Aedes aegypti, sua reprodução e as doenças que transmite.',
      'Criado com GameMaker e arte própria no Aseprite, aplicando técnicas de design e programação de jogos.',
    ],
    stack: ['GameMaker', 'Aseprite', 'Game Design', 'Figma'],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Unime — Campus Lauro de Freitas',
    course: 'Pós-graduação em Inteligência Artificial e Data Science',
    period: 'Previsão: 11/2026',
    status: 'em-andamento',
  },
  {
    institution: 'Unime — Campus Lauro de Freitas',
    course: 'Pós-graduação em Arquitetura de Software',
    period: 'Concluído em 01/2026',
    status: 'concluido',
  },
  {
    institution: 'Centro Universitário Jorge Amado (UNIJORGE)',
    course: 'Bacharelado em Ciência da Computação',
    period: 'Concluído em 12/2024',
    status: 'concluido',
  },
];

export const COURSES: Course[] = [
  { name: 'Santander Coders 2024 — Front-End / Angular (finalista TOP 300)', provider: 'ADA Tech' },
  { name: 'Python', provider: 'Data Science Academy' },
  { name: 'Embaixador DIO Campus Expert', provider: 'DIO' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Front-end',
    icon: '◧',
    skills: [
      'Angular',
      'Angular 20',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS / SCSS',
      'PrimeNG',
      'Bootstrap',
      'React',
    ],
  },
  {
    title: 'Back-end',
    icon: '⚙',
    skills: ['PHP 8', 'Java', 'Spring Boot', 'Python', 'Flask', 'APIs REST', 'Integração de APIs'],
  },
  {
    title: 'Banco de dados',
    icon: '⛁',
    skills: ['MySQL', 'SQL', 'Otimização de queries', 'Migração de dados', 'Modelagem'],
  },
  {
    title: 'IA & Dados',
    icon: '✦',
    skills: [
      'LLMs',
      'RAG',
      'MCP / FastMCP',
      'LangChain',
      'FAISS',
      'Gemini',
      'OpenAI',
      'Ollama',
      'Tool Calling',
    ],
  },
  {
    title: 'DevOps & Infra',
    icon: '▣',
    skills: ['Docker', 'Linux', 'Git / GitHub', 'Deploy em servidor', 'Cronjobs', 'Gunicorn'],
  },
  {
    title: 'Ferramentas',
    icon: '✎',
    skills: ['Figma', 'Obsidian', 'Aseprite', 'GameMaker', 'VS Code', 'Canva'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Chatbot WMS com RAG + MCP',
    description:
      'Assistente inteligente em produção para o WMS da Giusoft. Usa RAG para responder sobre a documentação e MCP (FastMCP) para executar consultas reais no sistema, com suporte a múltiplos provedores de LLM.',
    stack: ['Python', 'Flask', 'FastMCP', 'LangChain', 'FAISS', 'Gemini', 'OpenAI', 'Ollama'],
    categories: ['profissional', 'ia'],
    featured: true,
    private: true,
  },
  {
    title: 'API de Emissão de NF-e (SEFAZ)',
    description:
      'API própria para emissão de nota fiscal eletrônica integrada à SEFAZ, conectada aos sistemas internos da empresa.',
    stack: ['PHP 8', 'MySQL', 'REST', 'SEFAZ'],
    categories: ['profissional', 'php'],
    featured: true,
    private: true,
  },
  {
    title: 'Migração do WMS para PHP 8 + Docker',
    description:
      'Modernização de um sistema de gerenciamento de armazém: atualização para PHP 8, correções de compatibilidade, otimização de queries e ambientes conteinerizados com Docker.',
    stack: ['PHP 8', 'MySQL', 'Docker', 'Linux'],
    categories: ['profissional', 'php'],
    featured: true,
    private: true,
  },
  {
    title: 'MedCon Angular',
    description:
      'Sistema de gerenciamento de consultas médicas desenvolvido como projeto final do módulo Angular II do Santander Coders.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    categories: ['angular'],
    repo: `${GH}/medcon-angular`,
    demo: 'https://medcon-angular.vercel.app',
    featured: true,
  },
  {
    title: 'Guia Dourado',
    description:
      'Plataforma web em PHP para cadastro, busca e avaliação de clínicas, com autenticação de usuários, perfis e arquitetura em camadas (Models + DAO).',
    stack: ['PHP', 'MySQL', 'DAO', 'HTML', 'CSS'],
    categories: ['php'],
    repo: `${GH}/guia-dourado`,
    featured: true,
  },
  {
    title: 'RAG com Python + Ollama',
    description:
      'Chatbot especialista que responde perguntas a partir de PDFs usando LangChain, embeddings do Ollama e base vetorial local com Chroma.',
    stack: ['Python', 'LangChain', 'Ollama', 'Chroma'],
    categories: ['ia'],
    repo: `${GH}/rag-python-ollama`,
    featured: true,
  },
  {
    title: 'Armazém API',
    description:
      'API RESTful em Spring Boot para gestão de produtos, matérias-primas e suas relações, com controle de estoque e produção.',
    stack: ['Java', 'Spring Boot', 'REST'],
    categories: ['outros'],
    repo: `${GH}/product-stock-api`,
  },
  {
    title: 'To-Do List Angular',
    description:
      'Lista de tarefas com Angular e Bootstrap consumindo uma API customizada para operações de CRUD.',
    stack: ['Angular', 'Bootstrap', 'REST'],
    categories: ['angular'],
    repo: `${GH}/to-do-list-angular`,
  },
  {
    title: 'Villa da Maturidade',
    description: 'Aplicação web em Next.js e TypeScript publicada na Vercel.',
    stack: ['Next.js', 'React', 'TypeScript'],
    categories: ['outros'],
    repo: `${GH}/villa-da-maturidade`,
    demo: 'https://villa-da-maturidade.vercel.app',
  },
  {
    title: 'CRUD PHP',
    description:
      'Aplicação CRUD completa com PHP e MySQL demonstrando manipulação de dados e lógica de negócio no servidor.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    categories: ['php'],
    repo: `${GH}/CRUD-PHP`,
  },
  {
    title: 'Agenda PHP',
    description: 'Agenda de contatos em PHP com persistência em MySQL.',
    stack: ['PHP', 'MySQL'],
    categories: ['php'],
    repo: `${GH}/agenda-php`,
  },
  {
    title: 'Acervo ADA',
    description:
      'Acervo com CRUD usando Orientação a Objetos em TypeScript — entrega do módulo 3 do Santander Coders.',
    stack: ['TypeScript', 'POO'],
    categories: ['outros'],
    repo: `${GH}/acervo-ada`,
  },
  {
    title: 'EpiResolve',
    description:
      'Projeto de conscientização em saúde: "Escolhas Informadas para uma Saúde Melhor", com landing page dedicada.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    categories: ['outros'],
    repo: `${GH}/EpiResolve-Escolhas-Informadas-para-uma-Saude-Melhor`,
    demo: 'https://projeto-landing-page-epi-resolve.vercel.app',
  },
  {
    title: 'Analisador de Sintomas',
    description: 'Aplicação web que auxilia o usuário a analisar sintomas de forma interativa.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    categories: ['outros'],
    repo: `${GH}/analisador-de-sintomas`,
    demo: 'https://analisador-de-sintomas.vercel.app',
  },
  {
    title: 'Projeto Costs',
    description: 'Gerenciador de projetos e custos construído em React.',
    stack: ['React', 'JavaScript'],
    categories: ['outros'],
    repo: `${GH}/projeto-costs`,
    demo: 'https://projeto-costs-beta.vercel.app',
  },
];

export const CONTENT_PT: PortfolioContent = {
  profile: PROFILE,
  experiences: EXPERIENCES,
  education: EDUCATION,
  courses: COURSES,
  skillGroups: SKILL_GROUPS,
  projects: PROJECTS,
  cv: 'cv-lucas-carvalho-pt.pdf',
};
