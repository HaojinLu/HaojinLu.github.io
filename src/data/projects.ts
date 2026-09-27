export interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  role: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
  date?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'world-humanoid-robot-games-2026',
    title: '2026 World Humanoid Robot Games',
    description:
      'Unitree G1 motion development, deployment, and real-robot testing with 超能逸仙队. Selected development-machine scripts are available.',
    type: 'Competition Project',
    role: 'Team Lead / Technical Development',
    tags: ['Unitree G1', 'Humanoid robotics', 'Technical development'],
    github: 'https://github.com/HaojinLu/world-humanoid-robot-games-2026',
    featured: false,
  },
  {
    slug: 'arxiv-paper-agent',
    title: 'arxiv_paper_agent',
    description:
      'An LLM-assisted browser extension for academic paper reading and research workflows.',
    type: 'Independent Project',
    role: 'Independent development',
    tags: ['Browser extension', 'LLM workflows', 'Research tools'],
    github: 'https://github.com/HaojinLu/arxiv_paper_agent',
    featured: true,
  },
  {
    slug: 'contract-review-agent',
    title: 'contract-review-agent',
    description:
      'An agent-based document review system built with FastAPI, LangGraph, and document-processing tools.',
    type: 'Collaborative Project',
    role: 'Backend Development',
    tags: ['FastAPI', 'LangGraph', 'Document processing'],
    github: 'https://github.com/HaojinLu/contract-review-agent',
    featured: true,
  },
  {
    slug: 'rpg-travel-agent',
    title: 'rpg-travel-agent / Citywalker',
    description:
      'An AI-assisted location-based urban exploration system combining agent workflows, maps, tasks, and contextual experiences.',
    type: 'Collaborative Project',
    role: 'Backend Development',
    tags: ['Agent workflows', 'Maps', 'Backend systems'],
    github: 'https://github.com/HaojinLu/rpg-travel-agent',
    featured: true,
  },
];
