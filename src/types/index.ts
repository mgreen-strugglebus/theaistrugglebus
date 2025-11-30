export interface Contact {
  id: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
  message?: string;
  source: 'contact' | 'assessment' | 'sprint' | 'quiz';
  createdAt: Date;
}

export interface QuizResponse {
  id: string;
  contactId: string;
  answers: Record<string, string | number>;
  score: number;
  category: 'early_stage' | 'workflow_friction' | 'roi_ready';
  createdAt: Date;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SolutionCategory {
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  outputs: string[];
}
