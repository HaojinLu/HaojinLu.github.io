export interface Experience {
  title: string;
  context: string;
  role: string;
  description: string;
  period?: string;
  url?: string;
}

// Keep descriptions at the level cleared for public display. Do not add
// unpublished research details, internal code, figures, or study materials.
export const experiences: Experience[] = [
  {
    title: 'Human–Robot Interaction Research',
    context: 'Collaborative research project',
    role: 'Research Contributor · Robotics Systems Integration',
    description:
      'Contributed to humanoid robot system integration and testing in a collaborative HRI research project.',
  },
  {
    title: '2026 World Humanoid Robot Games',
    context: '超能逸仙队',
    role: 'Team Lead · Technical Integration',
    period: 'Jul–Aug 2026',
    description:
      'Led team coordination and contributed to humanoid robot technical integration and testing for competition. The team reached the top 16 in street dance and placed 11th in Tai Chi.',
  },
];
