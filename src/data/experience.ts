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
  role: 'Robotics Systems · HRI Evaluation',
  url: 'https://github.com/HaojinLu/human-robot-interaction',
  description:
    'Integrated SONIC and BONES-SEED with Unitree G1, tested motions on the physical robot, provided experimental data, designed the HRI evaluation questionnaire, conducted statistical analysis, and created manuscript figures. Manuscript under review.',
};

export const roboticsExperience: Experience = {
  title: '2026 World Humanoid Robot Games',
  context: '超能逸仙队',
  role: 'Team Lead · Technical Development',
  url: 'https://github.com/HaojinLu/world-humanoid-robot-games-2026',
  period: 'Aug 2026',
  description:
    'Led the team and contributed to Unitree G1 technical development and testing. Top 16 in Street Dance and 11th in Tai Chi.',
};

export const experiences: Experience[] = [researchExperience, roboticsExperience];
