import {
  Course,
  Education,
  Experience,
  PortfolioContent,
  Profile,
  Project,
  SkillGroup,
} from '../models/portfolio.models';
import { PROFILE, PROJECTS } from './portfolio.data';

/*
 * Versão em inglês do conteúdo.
 * Links, stacks e flags dos projetos vêm de portfolio.data.ts; aqui ficam só os textos.
 */

const PROFILE_EN: Profile = {
  ...PROFILE,
  role: 'Fullstack Developer',
  headline: 'Angular · PHP · MySQL · Software Architecture · AI Automation',
  location: 'Lauro de Freitas - BA, Brazil',
  about: [
    "I'm a full-stack developer with a Bachelor's degree in Computer Science and a postgraduate degree in Software Architecture. I'm currently pursuing a postgraduate degree in Artificial Intelligence and Data Science.",
    "On the back end, I work with PHP 8 and MySQL, developing and maintaining web systems. I led the migration of a WMS to PHP 8 and its containerization with Docker, and built integration APIs and electronic invoice (NF-e) issuance with SEFAZ, Brazil's tax authority. On the front end, I build interfaces with Angular, TypeScript and PrimeNG, and I'm currently leading the migration of an application from Angular 13 to 22.",
    'I focus on AI applied to real systems: I built and shipped to production a RAG- and MCP-based chatbot for the WMS, integrated with Gemini, OpenAI and Ollama. I enjoy solving problems with clean code, solid architecture and automation.',
  ],
  highlights: [
    { value: '2+', label: 'years of experience' },
    { value: '3+', label: 'systems in production' },
    { value: '5+', label: 'APIs integrated and built' },
    { value: 'TOP 300', label: 'out of 80k at Santander Coders' },
  ],
};

const EXPERIENCES_EN: Experience[] = [
  {
    company: 'FIEMT',
    role: 'Research & Development Fellow',
    location: 'Cuiabá - MT',
    period: '04/2026 — Present',
    current: true,
    bullets: [
      'Migrating a legacy Angular system to Angular 20, modernizing architecture, components and front-end practices.',
      'Implemented a new UI template with PrimeNG, standardizing visual experience and usability.',
      'Research on mind mapping with Obsidian for knowledge structuring and technical documentation.',
    ],
    stack: ['Angular 20', 'TypeScript', 'PrimeNG', 'Obsidian'],
  },
  {
    company: 'Giusoft Tecnologia',
    role: 'Junior Developer',
    location: 'Lauro de Freitas - BA',
    period: '01/2025 — Present',
    current: true,
    bullets: [
      'Development and maintenance of web systems in PHP and MySQL, including query optimization and bug fixing.',
      'Migrated the WMS to PHP 8, with containerized environments using Docker.',
      'Built and deployed to production a RAG + MCP chatbot for the WMS, integrating Gemini, OpenAI and Ollama.',
      'Integrated 3+ external APIs and built 2 in-house APIs, including electronic invoice (NF-e) issuance via SEFAZ.',
      'Database migrations, internal automations, Git version control and Linux deployments across 3+ systems.',
    ],
    stack: ['PHP 8', 'MySQL', 'Docker', 'Linux', 'Python', 'RAG', 'MCP', 'Git'],
  },
  {
    company: 'Giusoft Tecnologia',
    role: 'Intern',
    location: 'Lauro de Freitas - BA',
    period: '05/2024 — 01/2025',
    bullets: [
      'Took part in system testing and implementation.',
      'Assisted in creating and deploying new solutions.',
      'Researched process improvements and adoption of new technologies.',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    company: 'Jorge Amado University Center',
    role: 'Extracurricular Project - Dangerous Bite',
    location: 'Salvador - BA',
    period: '01/2024 - 12/2024',
    bullets: [
      'Developed an educational game to raise awareness about the Aedes aegypti mosquito, its reproduction and the diseases it transmits.',
      'Built with GameMaker and original art made in Aseprite, applying game design and programming techniques.',
    ],
    stack: ['GameMaker', 'Aseprite', 'Game Design', 'Figma'],
  },
];

const EDUCATION_EN: Education[] = [
  {
    institution: 'Unime — Lauro de Freitas Campus',
    course: 'Postgraduate Degree in Artificial Intelligence and Data Science',
    period: 'Expected: 11/2026',
    status: 'em-andamento',
  },
  {
    institution: 'Unime — Lauro de Freitas Campus',
    course: 'Postgraduate Degree in Software Architecture',
    period: 'Completed 01/2026',
    status: 'concluido',
  },
  {
    institution: 'Jorge Amado University Center (UNIJORGE)',
    course: "Bachelor's Degree in Computer Science",
    period: 'Completed 12/2024',
    status: 'concluido',
  },
];

const COURSES_EN: Course[] = [
  { name: 'Santander Coders 2024 — Front-End / Angular (TOP 300 finalist)', provider: 'ADA Tech' },
  { name: 'Python', provider: 'Data Science Academy' },
  { name: 'DIO Campus Expert Ambassador', provider: 'DIO' },
];

const SKILL_GROUPS_EN: SkillGroup[] = [
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
    skills: ['PHP 8', 'Java', 'Spring Boot', 'Python', 'Flask', 'REST APIs', 'API integration'],
  },
  {
    title: 'Databases',
    icon: '⛁',
    skills: ['MySQL', 'SQL', 'Query optimization', 'Data migration', 'Data modeling'],
  },
  {
    title: 'AI & Data',
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
    skills: ['Docker', 'Linux', 'Git / GitHub', 'Server deployment', 'Cron jobs', 'Gunicorn'],
  },
  {
    title: 'Tools',
    icon: '✎',
    skills: ['Figma', 'Obsidian', 'Aseprite', 'GameMaker', 'VS Code', 'Canva'],
  },
];

/**
 * Traduções dos projetos, indexadas pelo título em português.
 * Projeto sem tradução aqui aparece em português mesmo na versão em inglês.
 */
const PROJECT_TRANSLATIONS: Record<string, Partial<Project>> = {
  'Chatbot WMS com RAG + MCP': {
    title: 'WMS Chatbot with RAG + MCP',
    description:
      "AI assistant in production for Giusoft's WMS. Uses RAG to answer questions about the documentation and MCP (FastMCP) to run real queries against the system, supporting multiple LLM providers.",
  },
  'API de Emissão de NF-e (SEFAZ)': {
    title: 'Electronic Invoice API (NF-e / SEFAZ)',
    description:
      "In-house API for issuing Brazilian electronic invoices integrated with SEFAZ (the state tax authority), connected to the company's internal systems.",
  },
  'Migração do WMS para PHP 8 + Docker': {
    title: 'WMS Migration to PHP 8 + Docker',
    description:
      'Modernization of a warehouse management system: upgrade to PHP 8, compatibility fixes, query optimization and containerized environments with Docker.',
  },
  'MedCon Angular': {
    description:
      'Medical appointment management system built as the final project of the Angular II module at Santander Coders.',
  },
  'Guia Dourado': {
    description:
      'PHP web platform for registering, searching and reviewing clinics, with user authentication, profiles and a layered architecture (Models + DAO).',
  },
  'RAG com Python + Ollama': {
    title: 'RAG with Python + Ollama',
    description:
      'Expert chatbot that answers questions from PDFs using LangChain, Ollama embeddings and a local Chroma vector store.',
  },
  'Armazém API': {
    title: 'Warehouse API',
    description:
      'Spring Boot RESTful API for managing products, raw materials and their relationships, with stock and production control.',
  },
  'To-Do List Angular': {
    description:
      'To-do list app built with Angular and Bootstrap, consuming a custom API for CRUD operations.',
  },
  'Villa da Maturidade': {
    description: 'Web application built with Next.js and TypeScript, deployed on Vercel.',
  },
  'CRUD PHP': {
    description:
      'Full CRUD application with PHP and MySQL showcasing server-side data handling and business logic.',
  },
  'Agenda PHP': {
    title: 'PHP Contact Book',
    description: 'Contact book built in PHP with MySQL persistence.',
  },
  'Acervo ADA': {
    title: 'ADA Collection',
    description:
      'Collection manager with CRUD using Object-Oriented Programming in TypeScript — Santander Coders module 3 project.',
    stack: ['TypeScript', 'OOP'],
  },
  EpiResolve: {
    description:
      'Health awareness project: "Informed Choices for Better Health", with a dedicated landing page.',
  },
  'Analisador de Sintomas': {
    title: 'Symptom Analyzer',
    description: 'Web app that helps users analyze their symptoms interactively.',
  },
  'Projeto Costs': {
    title: 'Costs Project',
    description: 'Project and cost manager built with React.',
  },
};

export const CONTENT_EN: PortfolioContent = {
  profile: PROFILE_EN,
  experiences: EXPERIENCES_EN,
  education: EDUCATION_EN,
  courses: COURSES_EN,
  skillGroups: SKILL_GROUPS_EN,
  projects: PROJECTS.map((p) => ({ ...p, ...PROJECT_TRANSLATIONS[p.title] })),
  cv: 'cv-lucas-carvalho-en.pdf',
};
