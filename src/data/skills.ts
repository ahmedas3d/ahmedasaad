export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: 'mobile' | 'frontend' | 'backend' | 'tools' | 'design' | 'architecture';
  icon: string;
  color: string;
  description: string;
  yearsOfExperience: number;
  projects: string[]; // Project IDs where this skill was used
  certifications?: string[];
  priority: number; // For ordering
}

export const skillsData: Skill[] = [
  // Mobile Development - Primary Skills
  {
    id: 'flutter',
    name: 'Flutter',
    level: 90,
    category: 'mobile',
    icon: 'SiFlutter',
    color: '#02569B',
    description: 'Cross-platform mobile app development framework - Primary expertise',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'home-food', 'news-hub', 'scholar-chat', 'flowery'],
    priority: 1
  },
  {
    id: 'dart',
    name: 'Dart',
    level: 88,
    category: 'mobile',
    icon: 'SiDart',
    color: '#0175C2',
    description: 'Primary programming language for Flutter development',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'home-food', 'news-hub', 'scholar-chat', 'flowery'],
    priority: 2
  },
  {
    id: 'firebase',
    name: 'Firebase',
    level: 85,
    category: 'backend',
    icon: 'SiFirebase',
    color: '#FFCA28',
    description: 'Google\'s platform for mobile and web app development',
    yearsOfExperience: 1.5,
    projects: ['home-food', 'scholar-chat', 'flowery', 'sportify'],
    priority: 3
  },

  // State Management & Architecture
  {
    id: 'bloc',
    name: 'Bloc & Cubit',
    level: 80,
    category: 'architecture',
    icon: 'SiFlutter',
    color: '#FF6B6B',
    description: 'State management pattern for predictable app states',
    yearsOfExperience: 1,
    projects: ['news-hub', 'flowery', 'home-food'],
    priority: 4
  },
  {
    id: 'provider',
    name: 'Provider',
    level: 82,
    category: 'architecture',
    icon: 'SiFlutter',
    color: '#4ECDC4',
    description: 'Simple state management solution for Flutter',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'scholar-chat', 'flowery'],
    priority: 5
  },
  {
    id: 'clean-architecture',
    name: 'Clean Architecture',
    level: 78,
    category: 'architecture',
    icon: 'FaProjectDiagram',
    color: '#6C5CE7',
    description: 'Architectural pattern for maintainable and testable code',
    yearsOfExperience: 1,
    projects: ['news-hub', 'home-food'],
    priority: 6
  },

  // Backend & APIs
  {
    id: 'rest-api',
    name: 'REST APIs',
    level: 85,
    category: 'backend',
    icon: 'FaCloud',
    color: '#00CEC9',
    description: 'RESTful API design, integration, and consumption',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'news-hub', 'home-food'],
    priority: 7
  },
  {
    id: 'json',
    name: 'JSON',
    level: 90,
    category: 'backend',
    icon: 'SiJson',
    color: '#000000',
    description: 'Data interchange format and parsing',
    yearsOfExperience: 2,
    projects: ['sportify', 'news-hub', 'home-food', 'scholar-chat', 'flowery'],
    priority: 8
  },
  {
    id: 'http',
    name: 'HTTP Client',
    level: 85,
    category: 'backend',
    icon: 'FaNetworkWired',
    color: '#FF7675',
    description: 'HTTP client implementation and network handling',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'news-hub', 'home-food'],
    priority: 9
  },

  // Database & Storage
  {
    id: 'firestore',
    name: 'Cloud Firestore',
    level: 82,
    category: 'backend',
    icon: 'SiFirebase',
    color: '#FFCA28',
    description: 'NoSQL document database for real-time applications',
    yearsOfExperience: 1,
    projects: ['home-food', 'scholar-chat', 'flowery'],
    priority: 10
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    level: 75,
    category: 'backend',
    icon: 'SiSqlite',
    color: '#003B57',
    description: 'Lightweight relational database for mobile apps',
    yearsOfExperience: 1,
    projects: ['news-hub', 'sportify'],
    priority: 11
  },

  // Frontend & UI
  {
    id: 'material-design',
    name: 'Material Design',
    level: 88,
    category: 'design',
    icon: 'SiMaterialdesign',
    color: '#757575',
    description: 'Google\'s design system for consistent UI',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'news-hub', 'scholar-chat', 'home-food', 'flowery'],
    priority: 12
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    level: 85,
    category: 'design',
    icon: 'FaMobile',
    color: '#A8E6CF',
    description: 'Creating layouts that work across all devices',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'news-hub', 'scholar-chat', 'home-food', 'flowery'],
    priority: 13
  },
  {
    id: 'figma',
    name: 'Figma',
    level: 70,
    category: 'design',
    icon: 'SiFigma',
    color: '#F24E1E',
    description: 'UI/UX design and prototyping tool',
    yearsOfExperience: 1,
    projects: ['home-food', 'flowery'],
    priority: 14
  },

  // Development Tools
  {
    id: 'git',
    name: 'Git & GitHub',
    level: 85,
    category: 'tools',
    icon: 'FaGitAlt',
    color: '#F05032',
    description: 'Version control system for tracking code changes',
    yearsOfExperience: 2,
    projects: ['sportify', 'news-hub', 'scholar-chat', 'home-food', 'flowery'],
    priority: 15
  },
  {
    id: 'vscode',
    name: 'VS Code',
    level: 90,
    category: 'tools',
    icon: 'SiVisualstudiocode',
    color: '#007ACC',
    description: 'Primary code editor for development',
    yearsOfExperience: 2,
    projects: ['sportify', 'news-hub', 'scholar-chat', 'home-food', 'flowery'],
    priority: 16
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    level: 80,
    category: 'tools',
    icon: 'SiAndroidstudio',
    color: '#3DDC84',
    description: 'IDE for Android app development',
    yearsOfExperience: 1.5,
    projects: ['sportify', 'news-hub', 'scholar-chat', 'home-food', 'flowery'],
    priority: 17
  },

  // Additional Technologies
  {
    id: 'google-maps',
    name: 'Google Maps API',
    level: 75,
    category: 'backend',
    icon: 'SiGooglemaps',
    color: '#4285F4',
    description: 'Location services and mapping integration',
    yearsOfExperience: 1,
    projects: ['home-food', 'flowery'],
    priority: 18
  },
  {
    id: 'stripe',
    name: 'Stripe API',
    level: 70,
    category: 'backend',
    icon: 'SiStripe',
    color: '#635BFF',
    description: 'Payment processing and e-commerce integration',
    yearsOfExperience: 0.5,
    projects: ['home-food', 'flowery'],
    priority: 19
  },

  // Web Technologies (Additional Skills)
  {
    id: 'react',
    name: 'React.js',
    level: 75,
    category: 'frontend',
    icon: 'FaReact',
    color: '#61DAFB',
    description: 'Modern JavaScript library for building user interfaces',
    yearsOfExperience: 1,
    projects: [],
    priority: 20
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 70,
    category: 'frontend',
    icon: 'SiTypescript',
    color: '#3178C6',
    description: 'Typed superset of JavaScript for better development experience',
    yearsOfExperience: 0.8,
    projects: [],
    priority: 21
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 78,
    category: 'frontend',
    icon: 'FaJs',
    color: '#F7DF1E',
    description: 'Core programming language for web development',
    yearsOfExperience: 1.5,
    projects: [],
    priority: 22
  }
];

export const getSkillsByCategory = (category: string): Skill[] => {
  return skillsData
    .filter(skill => skill.category === category)
    .sort((a, b) => a.priority - b.priority);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return skillsData
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export const getPrimarySkills = (): Skill[] => {
  return skillsData
    .filter(skill => skill.priority <= 10)
    .sort((a, b) => a.priority - b.priority);
};

export const getSkillCategories = (): string[] => {
  return Array.from(new Set(skillsData.map(skill => skill.category)));
};

export const getSkillsUsedInProject = (projectId: string): Skill[] => {
  return skillsData.filter(skill => skill.projects.includes(projectId));
};

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile Development',
    icon: 'FaMobile',
    color: '#02569B',
    description: 'Cross-platform mobile app development expertise',
    skills: getSkillsByCategory('mobile')
  },
  {
    name: 'Architecture & State Management',
    icon: 'FaProjectDiagram',
    color: '#6C5CE7',
    description: 'Clean architecture and state management patterns',
    skills: getSkillsByCategory('architecture')
  },
  {
    name: 'Backend & APIs',
    icon: 'FaServer',
    color: '#00CEC9',
    description: 'Backend services and API integration',
    skills: getSkillsByCategory('backend')
  },
  {
    name: 'UI/UX Design',
    icon: 'FaPalette',
    color: '#F24E1E',
    description: 'User interface and experience design',
    skills: getSkillsByCategory('design')
  },
  {
    name: 'Development Tools',
    icon: 'FaTools',
    color: '#F05032',
    description: 'Development tools and environment setup',
    skills: getSkillsByCategory('tools')
  }
];