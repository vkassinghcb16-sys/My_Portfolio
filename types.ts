
export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  description?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  tag: string;
  summary: string;
  problem: string;
  impact: string;
  skills: string[];
  links: { type: 'app' | 'website' | 'document' | 'figma' | 'github'; url: string; label: string }[];
  color: 'indigo' | 'purple' | 'emerald' | 'rose';
  category: 'case-studies' | 'projects';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  url: string;
  date: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
