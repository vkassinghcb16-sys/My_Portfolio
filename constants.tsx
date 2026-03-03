
import React from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  FileText, 
  Figma, 
  Github, 
  Globe, 
  Layout, 
  Linkedin, 
  Mail, 
  Twitter 
} from 'lucide-react';
import { TimelineItem, WorkItem, BlogPost, SkillGroup } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: '1',
    company: 'Livekeeping',
    role: 'Product Marketing Manager',
    period: 'Nov 2025 - Present',
    logo: 'https://cdn.techjockey.com/web/assets/images/techjockey/products/27951_Livekeepinglogo.jpg',
  },
  {
    id: '2',
    company: 'Decimal Technologies',
    role: 'Asst Manager - Product Strategy',
    period: 'Apr 2025 - Nov 2025',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2rZrEw_3LKq_FzhNUvk4bBNpoRNuIJsXBw&s',
  },
  {
    id: '3',
    company: 'IIM Udaipur',
    role: 'MBA Graduate',
    period: 'June 2021 - June 2023',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/IIM_Udaipur_Logo.svg/1200px-IIM_Udaipur_Logo.svg.png',
  },
  {
    id: '4',
    company: 'Physicswallah',
    role: 'Product Associate',
    period: 'Jul 2022 - Sept 2022',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/1020px-Physics_wallah_logo.svg.png',
  },
  {
    id: '5',
    company: 'Embibe',
    role: 'Consultant',
    period: 'Sep 2020 - May 2021',
    logo: 'https://play-lh.googleusercontent.com/qfBUDrQiVNE1_63wMxnWGq2gvW7XOiCGlOMqQwflmOVwMqVTvyrnj-rel3Xm64XMZA',
  },
  {
    id: '6',
    company: 'IIT Patna',
    role: 'B.Tech (Chemical Eng.)',
    period: 'Jul 2016 - May 2020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna_Logo.svg/1200px-Indian_Institute_of_Technology%2C_Patna_Logo.svg.png',
  },
];

export const WORK_DATA: WorkItem[] = [
  {
    id: 'cs1',
    category: 'case-studies',
    title: 'Launching "QuickPay" — A New Market Entry',
    tag: 'Strategy & Vision',
    summary: 'Streamlining checkouts for emerging markets.',
    problem: 'Existing checkout process suffered from high abandonment rates in emerging markets due to slow load times and limited local payment options.',
    impact: 'Increased checkout conversion rate by 18% in the target region.',
    skills: ['Strategic Prioritization', 'Market Analysis', 'RICE'],
    color: 'indigo',
    links: [
      { type: 'document', url: '#', label: 'PRD' },
      { type: 'website', url: '#', label: 'Landing Page' },
    ]
  },
  {
    id: 'cs2',
    category: 'case-studies',
    title: 'Optimizing Onboarding Flows',
    tag: 'Execution & Metrics',
    summary: 'Slashing drop-offs in user sign-up.',
    problem: 'High drop-off (40%) on step 3 of the user sign-up process, leading to a massive loss of potential customers.',
    impact: 'Reduced step 3 drop-off by 55%, adding 5,000 monthly active users.',
    skills: ['Data Analysis', 'Mixpanel', 'SQL', 'Agile'],
    color: 'emerald',
    links: [
      { type: 'figma', url: '#', label: 'Prototypes' },
      { type: 'document', url: '#', label: 'Metrics' },
    ]
  },
  {
    id: 'cs3',
    category: 'case-studies',
    title: 'Team Collaboration Hub',
    tag: 'UX Research',
    summary: 'Enabling document collaboration for B2B.',
    problem: 'B2B users couldn\'t share and collaborate on documents within the platform.',
    impact: '75% adoption in Enterprise accounts; $50k quarterly ARR lift.',
    skills: ['User Interviews', 'UX Research', 'Stakeholder Management'],
    color: 'purple',
    links: [
      { type: 'app', url: '#', label: 'Live Feature' },
      { type: 'figma', url: '#', label: 'Figma' },
    ]
  },
  {
    id: 'p1',
    category: 'projects',
    title: 'AI Recipe Generator',
    tag: 'Innovation',
    summary: 'GPT-powered pantry assistant.',
    problem: 'People often have ingredients but don\'t know what to cook.',
    impact: '500+ signups in first month; validated personalized cooking market.',
    skills: ['AI/LLM Integration', 'Next.js', 'React'],
    color: 'rose',
    links: [
      { type: 'github', url: '#', label: 'Repo' },
      { type: 'website', url: '#', label: 'Live App' },
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The RICE Framework: Beyond Basics',
    summary: 'A detailed look at prioritizing your product roadmap effectively.',
    category: 'Strategy',
    url: '#',
    date: 'Dec 2024'
  },
  {
    id: 'b2',
    title: 'Writing Better User Stories',
    summary: 'How to move beyond generic templates to deliver clarity.',
    category: 'Execution',
    url: '#',
    date: 'Jan 2025'
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: 'Strategy',
    skills: ['Market Analysis', 'GTM Planning', 'OKRs', 'Competitor Research']
  },
  {
    category: 'Execution',
    skills: ['Agile/Scrum', 'Jira/Linear', 'User Story Mapping', 'APIs']
  },
  {
    category: 'Research',
    skills: ['User Interviews', 'Figma', 'A/B Testing', 'Usability Testing']
  },
  {
    category: 'Data',
    skills: ['SQL', 'Mixpanel', 'GA4', 'Tableau/Looker']
  }
];

export const ICONS_MAP = {
  app: <Layout className="w-5 h-5" />,
  website: <Globe className="w-5 h-5" />,
  document: <FileText className="w-5 h-5" />,
  figma: <Figma className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  external: <ExternalLink className="w-5 h-5" />
};
