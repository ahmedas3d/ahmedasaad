// Asset constants for Ahmed Asaad's Portfolio

// Helper to get the correct base path for assets
const BASE_URL = process.env.PUBLIC_URL || '';

export const ASSETS = {
  // Profile Images
  profile: {
    main: `${BASE_URL}/assets/images/profile/ahmed-profile-main.jpg`,
    casual: `${BASE_URL}/assets/images/profile/ahmed-profile-casual.jpg`,
    avatar: `${BASE_URL}/assets/images/profile/ahmed-avatar.png`,
  },

  // Resume
  resume: `${BASE_URL}/assets/resume/Ahmed_Asaad_CV.pdf`,

  // Tech Icons
  techIcons: {
    flutter: `${BASE_URL}/assets/images/tech-icons/flutter-icon.svg`,
    dart: `${BASE_URL}/assets/images/tech-icons/dart-icon.svg`,
    firebase: `${BASE_URL}/assets/images/tech-icons/firebase-icon.svg`,
    git: `${BASE_URL}/assets/images/tech-icons/git-icon.svg`,
    github: `${BASE_URL}/assets/images/tech-icons/github-icon.svg`,
    figma: `${BASE_URL}/assets/images/tech-icons/figma-icon.svg`,
  },

  // Project Images (using placeholder gradients for now since no project images found)
  projects: {
    sportify: {
      logo: null,
      screenshots: [],
      placeholder: 'linear-gradient(135deg, #FF1744 0%, #FF6B35 100%)'
    },

    homeFood: {
      logo: null,
      screenshots: [],
      placeholder: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)'
    },

    newsHub: {
      logo: null,
      screenshots: [],
      placeholder: 'linear-gradient(135deg, #2196F3 0%, #03A9F4 100%)'
    },

    scholarChat: {
      logo: null,
      screenshots: [],
      placeholder: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)'
    },

    flowery: {
      logo: null,
      screenshots: [],
      placeholder: 'linear-gradient(135deg, #FF9800 0%, #FF5722 100%)'
    }
  },

  // Placeholder images for missing assets
  placeholders: {
    profile: `${BASE_URL}/assets/images/profile/ahmed-avatar.png`, // Fallback to avatar
    project: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwSDE2MEwxODAgMTMwVjE3MEwyMDAgMTUwWiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K'
  }
};

// Helper function to check if asset exists
export const assetExists = (path: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = path;
  });
};

// Helper function to get project placeholder
export const getProjectPlaceholder = (projectKey: keyof typeof ASSETS.projects) => {
  return ASSETS.projects[projectKey].placeholder;
};

// Helper function to get tech icon with fallback
export const getTechIcon = (iconName: string) => {
  const iconPath = ASSETS.techIcons[iconName as keyof typeof ASSETS.techIcons];
  return iconPath || null;
};