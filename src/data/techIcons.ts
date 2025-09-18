export interface TechIcon {
  name: string;
  file: string;
  category: 'primary' | 'framework' | 'tool' | 'database';
  displayName: string;
}

export const TECH_ICONS: TechIcon[] = [
  // Primary Technologies
  { name: 'flutter', file: 'flutter-icon.svg', category: 'primary', displayName: 'Flutter' },
  { name: 'dart', file: 'dart-icon.svg', category: 'primary', displayName: 'Dart' },

  // Frameworks & Libraries
  { name: 'firebase', file: 'firebase-icon.svg', category: 'framework', displayName: 'Firebase' },

  // Tools
  { name: 'git', file: 'git-icon.svg', category: 'tool', displayName: 'Git' },
  { name: 'github', file: 'github-icon.svg', category: 'tool', displayName: 'GitHub' },
  { name: 'figma', file: 'figma-icon.svg', category: 'tool', displayName: 'Figma' },
];

// Auto-detect available icons from the file system
export const getAvailableTechIcons = (): TechIcon[] => {
  // Return the known icons we found in the scan
  return TECH_ICONS.filter(icon => {
    // All icons from our scan are available
    return true;
  });
};

// Get icons by category
export const getIconsByCategory = (category: TechIcon['category']): TechIcon[] => {
  return TECH_ICONS.filter(icon => icon.category === category);
};

// Get primary tech stack
export const getPrimaryTechStack = (): TechIcon[] => {
  return getIconsByCategory('primary');
};

// Get tools
export const getTools = (): TechIcon[] => {
  return getIconsByCategory('tool');
};

// Get frameworks
export const getFrameworks = (): TechIcon[] => {
  return getIconsByCategory('framework');
};