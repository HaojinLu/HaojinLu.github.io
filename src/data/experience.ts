export interface Experience {
  title: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
  url?: string;
}

// Add an entry only after title, organization, role, and dates are confirmed
// and the experience is cleared for public display.
export const experiences: Experience[] = [];
