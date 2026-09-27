export interface Experience {
  title: string;
  context: string;
  role: string;
  description: string;
  period?: string;
  url?: string;
}

// Keep public descriptions at the level cleared for disclosure. Do not add
// unpublished titles, figures, code, experimental materials, or numerical results.
export const researchExperience: Experience = {
  title: 'Human–Robot Interaction with Humanoid Robots',
  context: 'Research project',
  role: 'Research Contributor · Robotics Systems Integration',
  url: 'https://github.com/HaojinLu/human-robot-interaction',
  description:
    'Research on natural-language-driven whole-body humanoid interaction using Unitree G1, including motion deployment, system integration, real-robot testing, and HRI user evaluation. Manuscript under review.',
};

export const roboticsExperience: Experience = {
  title: '2026 World Humanoid Robot Games',
  context: '超能逸仙队',
  role: 'Team Lead · Technical Integration',
  period: 'Jul–Aug 2026',
  description:
    'Led team coordination and technical integration for Unitree G1 participation. The team reached the Top 16 in Street Dance and placed 11th in Tai Chi.',
};

export const experiences: Experience[] = [researchExperience, roboticsExperience];
