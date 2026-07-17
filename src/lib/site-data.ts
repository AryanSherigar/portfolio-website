export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'C++', 'TypeScript/JavaScript'],
  },
  {
    group: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'Multithreading', 'OS Basics'],
  },
  {
    group: 'Backend & Web',
    items: ['Node.js', 'Express.js', 'Next.js', 'FastAPI', 'SQL', 'REST APIs'],
  },
  {
    group: 'GenAI',
    items: ['Prompt Engineering', 'RAG', 'LLM APIs (Gemini/OpenAI-compatible)', 'Embeddings', 'Semantic Search', 'HuggingFace'],
  },
  {
    group: 'Tools',
    items: ['LangChain', 'LangGraph', 'ChromaDB', 'Git', 'Linux', 'Postman'],
  },
] as const;

export const achievements = [
  'Solved 200+ DSA problems',
  'Summer Internship Offer, Technology Analyst, Barclays UK (Northampton)',
  '2nd Runner-up, BlockBash Hackathon (CrewSphere / ICP Hub India)',
  "Finalist, HackFest '22 (IIT ISM Dhanbad)",
  'Web3Dapps Hackathon participant (Major Hacking League)',
  'Mentored 20+ students in blockchain development (Cyberlabs Winter of Code, 95% completion rate)',
] as const;

export const projects = [
  {
    title: 'News Story Arc Tracker',
    description:
      'A narrative intelligence platform that extracts timelines, entities, and sentiment from real-world events using AWS Bedrock LLMs. Features a scalable RAG pipeline built with LangChain, Titan Embeddings, and Pinecone/OpenSearch for semantic retrieval, an interactive React frontend with dynamic relationship graphs and data visualizations, real-time voice chat over WebSockets with streaming transcription and text-to-speech, and a FastAPI backend with streaming endpoints, model fallbacks, and reliability-focused safeguards.',
    tags: ['React', 'FastAPI', 'AWS Bedrock', 'LangChain', 'Pinecone', 'WebSockets'],
    github: '[GITHUB_REPO_URL_1]',
    live: '[LIVE_DEMO_URL_1]',
  },
  {
    title: 'Chronos: AI Story Engine',
    description:
      'An AI-powered interactive story engine with a dual-phase streaming pipeline using Gemini 3 Flash that emits narrative text and structured JSON state in a single request. Includes a deterministic state machine that transforms unstructured LLM output into tracked game variables and story state, a lightweight RAG-style Story Card system for injecting relevant lore and memory with minimal context overhead, and a Director Mode for real-time human-in-the-loop control over tension parameters and plot flow.',
    tags: ['React', 'TypeScript', 'Google Gemini 3 Flash', 'Vite', 'Tailwind CSS'],
    github: '[GITHUB_REPO_URL_2]',
    live: '[LIVE_DEMO_URL_2]',
  },
  {
    title: 'C-Shell',
    description:
      'A modular, Unix-inspired command-line shell built from scratch in C++ using POSIX system calls. Implements core shell functionality including command parsing, process creation via fork/exec, I/O redirection, piping between commands, signal handling, and a built-in command system — all without relying on any shell libraries.',
    tags: ['C++', 'POSIX System Calls', 'Process Management (fork/exec)', 'I/O Redirection & Piping', 'Signal Handling', 'Linux'],
    github: 'https://github.com/AryanSherigar/c-shell',
    live: 'https://github.com/AryanSherigar/c-shell',
  },
] as const;

export const contactLinks = {
  email: 'sherigararyan90@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aryan-sherigar-866144255',
  github: 'https://github.com/AryanSherigar/',
  resume: '/resume.pdf',
} as const;
