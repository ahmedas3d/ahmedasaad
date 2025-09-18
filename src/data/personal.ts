export interface PersonalInfo {
  name: string;
  title: string;
  shortTitle: string;
  location: string;
  email: string;
  phone: string;
  experience: string;
  education: {
    degree: string;
    field: string;
    duration: string;
    grade: string;
  };
  languages: {
    name: string;
    level: string;
  }[];
  bio: {
    short: string;
    long: string;
    professional: string;
  };
  taglines: string[];
  specialties: string[];
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Ahmed Asaad",
  title: "Flutter Developer",
  shortTitle: "Flutter Dev",
  location: "Ismailia, Egypt",
  email: "ahmedxasaad@gmail.com",
  phone: "+201014781603",
  experience: "1+ years",
  education: {
    degree: "Bachelor's Degree",
    field: "Management Information Systems",
    duration: "2020-2024",
    grade: "Very Good",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Proficient" },
  ],
  bio: {
    short:
      "Passionate Flutter developer creating high-performance, cross-platform mobile applications with clean architecture and seamless user experiences.",
    long: "Professional Flutter Developer with 1+ years of experience specializing in cross-platform mobile app development. Expert in Dart, Firebase, and clean architecture patterns. Dedicated to writing maintainable code and creating exceptional user experiences.",
    professional:
      "Results-driven Flutter Developer with a strong foundation in mobile app development, clean architecture, and modern development practices. Experienced in building scalable applications using Dart, Firebase, and REST APIs. Committed to continuous learning and delivering high-quality solutions.",
  },
  taglines: [
    "Passionate about clean, maintainable code",
    "Cross-platform mobile solutions expert",
    "Firebase & REST API specialist",
    "Clean Architecture advocate",
    "Building the future, one app at a time",
  ],
  specialties: [
    "Flutter Framework Mastery",
    "Cross-platform Development",
    "Firebase Backend Integration",
    "Clean Architecture Implementation",
    "State Management (Bloc & Cubit)",
    "REST API Integration",
    "Performance Optimization",
    "UI/UX Implementation",
  ],
  interests: [
    "Mobile Technology Trends",
    "Clean Code Practices",
    "Open Source Contribution",
    "Tech Community Engagement",
    "Continuous Learning",
    "Problem Solving",
  ],
};

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  username?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ahmedas3d",
    icon: "FaGithub",
    color: "#333333",
    username: "ahmedas3d",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-asaad-1960812a0/",
    icon: "FaLinkedin",
    color: "#0077B5",
    username: "ahmed-asaad",
  },
  {
    name: "Twitter",
    url: "https://x.com/AhmedAsaad2002",
    icon: "FaTwitter",
    color: "#1DA1F2",
    username: "AhmedAsaad2002",
  },
  {
    name: "Email",
    url: "mailto:ahmedxasaad@gmail.com",
    icon: "FaEnvelope",
    color: "#FF1744",
  },
  {
    name: "Phone",
    url: "tel:+201014781603",
    icon: "FaPhone",
    color: "#4CAF50",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/201014781603",
    icon: "FaWhatsapp",
    color: "#25D366",
  },
];

export interface Achievement {
  title: string;
  description: string;
  date: string;
  type: "education" | "project" | "certification" | "award";
}

export const achievements: Achievement[] = [
  {
    title: "Bachelor's Degree - Very Good Grade",
    description:
      "Graduated with Very Good grade in Management Information Systems",
    date: "2024",
    type: "education",
  },
  {
    title: "5 Successful Mobile Applications",
    description:
      "Developed and deployed 5 mobile applications using Flutter framework",
    date: "2023-2024",
    type: "project",
  },
  {
    title: "Clean Architecture Implementation",
    description:
      "Successfully implemented clean architecture patterns across multiple projects",
    date: "2023",
    type: "project",
  },
  {
    title: "Firebase Integration Expert",
    description:
      "Mastered Firebase services for backend development and real-time features",
    date: "2023",
    type: "certification",
  },
];

export const quickStats = {
  projectsCompleted: "5+",
  yearsExperience: "1+",
  technologiesMastered: "10+",
  clientSatisfaction: "100%",
};
