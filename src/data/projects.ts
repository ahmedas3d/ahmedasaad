import { ASSETS, getProjectPlaceholder } from "./assets";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  subcategory: string;
  technologies: string[];
  primaryTech: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
    description: string;
  }[];
  images: {
    thumbnail: string;
    hero: string;
    gallery: string[];
    mockups?: string[];
    screenshots?: string[];
  };
  links: {
    demo?: string;
    github?: string;
    playstore?: string;
    appstore?: string;
    figma?: string;
    documentation?: string;
  };
  metrics?: {
    users?: string;
    downloads?: string;
    rating?: number;
    performance?: string;
  };
  duration: string;
  teamSize: number;
  myRole: string;
  responsibilities: string[];
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  priority: number;
  tags: string[];
  year: number;
}

export const projectsData: Project[] = [
  {
    id: "sportify",
    title: "Sportify",
    subtitle: "Football Application",
    description:
      "Comprehensive football app with daily matches, favorite teams, European league tables, and sports news.",
    longDescription:
      "Sportify is a feature-rich football application that provides users with comprehensive coverage of European football. The app includes daily match schedules, live scores, team statistics, league tables, and the latest sports news. Built with Flutter and powered by REST APIs, it delivers real-time data to football enthusiasts worldwide.",
    category: "Sports & Entertainment",
    subcategory: "Sports App",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase",
      "Provider",
      "HTTP",
      "JSON",
    ],
    primaryTech: ["Flutter", "Dart", "Firebase"],
    features: [
      "Real-time match scores and schedules",
      "European league tables and standings",
      "Favorite teams management",
      "Sports news aggregation",
      "Match notifications and alerts",
      "Team and player statistics",
      "Live commentary updates",
      "Multi-language support",
    ],
    challenges: [
      "Implementing real-time data synchronization",
      "Managing multiple API endpoints efficiently",
      "Creating responsive UI for various screen sizes",
      "Optimizing app performance with large datasets",
      "Handling network connectivity issues",
    ],
    solutions: [
      "Implemented efficient state management with Provider",
      "Created robust API service layer with error handling",
      "Used responsive design principles and adaptive layouts",
      "Implemented data caching and pagination strategies",
      "Added offline mode with local data storage",
    ],
    learnings: [
      "Advanced state management patterns",
      "REST API integration best practices",
      "Performance optimization techniques",
      "User experience design principles",
      "Real-time data handling strategies",
    ],
    codeSnippets: [
      {
        title: "API Service Implementation",
        language: "dart",
        code: `class FootballApiService {
  static const String baseUrl = 'https://api.football-data.org/v4';

  Future<List<Match>> getTodaysMatches() async {
    try {
      final response = await http.get(
        Uri.parse('$baseUrl/matches'),
        headers: {'X-Auth-Token': _apiKey},
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return (data['matches'] as List)
            .map((match) => Match.fromJson(match))
            .toList();
      }
      throw ApiException('Failed to fetch matches');
    } catch (e) {
      throw ApiException('Network error: $e');
    }
  }
}`,
        description: "Clean API service implementation with error handling",
      },
    ],
    images: {
      thumbnail: "/assets/images/projects/sportify/thumbnail.jpg",
      hero: "/assets/images/projects/sportify/hero.jpg",
      gallery: [
        "/assets/images/projects/sportify/home-screen.jpg",
        "/assets/images/projects/sportify/matches.jpg",
        "/assets/images/projects/sportify/leagues.jpg",
        "/assets/images/projects/sportify/news.jpg",
      ],
      screenshots: [
        "/assets/images/projects/sportify/screenshot1.jpg",
        "/assets/images/projects/sportify/screenshot2.jpg",
      ],
    },
    links: {
      github: "https://github.com/ahmedas3d/Spotify-v1",
      demo: "",
    },
    metrics: {
      users: "1000+",
      downloads: "5000+",
      rating: 4.5,
      performance: "95% user satisfaction",
    },
    duration: "3 months",
    teamSize: 1,
    myRole: "Lead Flutter Developer",
    responsibilities: [
      "Full-stack mobile app development",
      "API integration and data management",
      "UI/UX implementation",
      "Performance optimization",
      "Testing and deployment",
    ],
    status: "completed",
    featured: true,
    priority: 1,
    tags: ["Flutter", "Sports", "Real-time", "API Integration"],
    year: 2024,
  },
  {
    id: "home-food",
    title: "Home Food",
    subtitle: "Home Cooking Platform",
    description:
      "Platform connecting customers with home-cooked meals and local chefs.",
    longDescription:
      "Home Food is an innovative platform that bridges the gap between home chefs and food lovers. The application allows users to discover, order, and enjoy authentic home-cooked meals from local chefs in their area. Built with Firebase for real-time functionality and secure payment processing.",
    category: "Food & Delivery",
    subcategory: "Food Platform",
    technologies: [
      "Flutter",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth",
      "Google Maps",
      "Stripe API",
      "Provider",
    ],
    primaryTech: ["Flutter", "Firebase", "Google Maps"],
    features: [
      "Chef profile creation and management",
      "Real-time order tracking",
      "Secure payment processing",
      "Location-based chef discovery",
      "Rating and review system",
      "Push notifications",
      "Order history and favorites",
      "Multi-language support",
    ],
    challenges: [
      "Implementing real-time order tracking",
      "Integrating multiple payment gateways",
      "Creating complex user role management",
      "Building efficient location services",
      "Managing large image uploads",
    ],
    solutions: [
      "Used Firebase Firestore for real-time updates",
      "Integrated Stripe for secure payments",
      "Implemented role-based authentication system",
      "Used Google Maps API for location services",
      "Optimized image compression and storage",
    ],
    learnings: [
      "Firebase ecosystem mastery",
      "Real-time database operations",
      "Payment gateway integration",
      "Location-based services",
      "Complex state management",
    ],
    images: {
      thumbnail: "/assets/images/projects/home-food/thumbnail.jpg",
      hero: "/assets/images/projects/home-food/hero.jpg",
      gallery: [
        "/assets/images/projects/home-food/dashboard.jpg",
        "/assets/images/projects/home-food/chef-profile.jpg",
        "/assets/images/projects/home-food/orders.jpg",
        "/assets/images/projects/home-food/tracking.jpg",
      ],
    },
    links: {
      github: "",
      demo: "",
    },
    duration: "4 months",
    teamSize: 2,
    myRole: "Flutter Developer & Firebase Specialist",
    responsibilities: [
      "Firebase backend setup and configuration",
      "Real-time features implementation",
      "Payment integration",
      "Location services integration",
      "User authentication system",
    ],
    status: "completed",
    featured: true,
    priority: 2,
    tags: ["Flutter", "Firebase", "Food", "Real-time", "Payment"],
    year: 2024,
  },
  {
    id: "news-hub",
    title: "News Hub",
    subtitle: "News Aggregation App",
    description:
      "Real-time news app with multiple sources, categorized by technology, sports, business, and entertainment.",
    longDescription:
      "News Hub is a comprehensive news aggregation application that delivers real-time news from multiple trusted sources. The app categorizes news into technology, sports, business, and entertainment sections, providing users with a personalized news reading experience.",
    category: "News & Media",
    subcategory: "News App",
    technologies: [
      "Flutter",
      "REST API",
      "Clean Architecture",
      "Bloc",
      "HTTP",
      "Cached Network Image",
      "SQLite",
    ],
    primaryTech: ["Flutter", "Clean Architecture", "Bloc"],
    features: [
      "Real-time news updates",
      "Category-based news filtering",
      "Bookmark and save articles",
      "Offline reading capability",
      "Search functionality",
      "Share articles to social media",
      "Dark/Light theme support",
      "Personalized news feed",
    ],
    challenges: [
      "Implementing clean architecture patterns",
      "Managing complex state with Bloc",
      "Optimizing image loading and caching",
      "Creating smooth infinite scrolling",
      "Handling different news API formats",
    ],
    solutions: [
      "Structured app with clean architecture layers",
      "Used Bloc pattern for predictable state management",
      "Implemented efficient image caching strategy",
      "Created custom pagination system",
      "Built unified data models for different APIs",
    ],
    learnings: [
      "Clean architecture implementation",
      "Advanced Bloc state management",
      "Performance optimization",
      "API standardization techniques",
      "Offline-first architecture",
    ],
    codeSnippets: [
      {
        title: "Clean Architecture Repository",
        language: "dart",
        code: `abstract class NewsRepository {
  Future<Either<Failure, List<Article>>> getTopHeadlines();
  Future<Either<Failure, List<Article>>> searchArticles(String query);
}

class NewsRepositoryImpl implements NewsRepository {
  final NewsRemoteDataSource remoteDataSource;
  final NewsLocalDataSource localDataSource;
  final NetworkInfo networkInfo;

  NewsRepositoryImpl({
    required this.remoteDataSource,
    required this.localDataSource,
    required this.networkInfo,
  });

  @override
  Future<Either<Failure, List<Article>>> getTopHeadlines() async {
    if (await networkInfo.isConnected) {
      try {
        final articles = await remoteDataSource.getTopHeadlines();
        localDataSource.cacheArticles(articles);
        return Right(articles);
      } on ServerException {
        return Left(ServerFailure());
      }
    } else {
      try {
        final articles = await localDataSource.getLastArticles();
        return Right(articles);
      } on CacheException {
        return Left(CacheFailure());
      }
    }
  }
}`,
        description:
          "Clean architecture repository implementation with offline support",
      },
    ],
    images: {
      thumbnail: "/assets/images/projects/news-hub/thumbnail.jpg",
      hero: "/assets/images/projects/news-hub/hero.jpg",
      gallery: [
        "/assets/images/projects/news-hub/categories.jpg",
        "/assets/images/projects/news-hub/article.jpg",
        "/assets/images/projects/news-hub/search.jpg",
        "/assets/images/projects/news-hub/bookmarks.jpg",
      ],
    },
    links: {
      github: "https://github.com/ahmedas3d/News_App_Ui",
    },
    duration: "2 months",
    teamSize: 1,
    myRole: "Flutter Developer",
    responsibilities: [
      "Clean architecture implementation",
      "Bloc state management setup",
      "API integration and data layer",
      "UI/UX development",
      "Performance optimization",
    ],
    status: "completed",
    featured: true,
    priority: 3,
    tags: ["Flutter", "Clean Architecture", "Bloc", "News", "Offline"],
    year: 2023,
  },
  {
    id: "scholar-chat",
    title: "Scholar Chat",
    subtitle: "Real-time Messaging",
    description:
      "Real-time messaging platform for seamless communication with friends and family.",
    longDescription:
      "Scholar Chat is a modern real-time messaging application that provides seamless communication between users. Built with Firebase for real-time messaging capabilities, it offers features like group chats, media sharing, and end-to-end encryption for secure conversations.",
    category: "Communication & Social",
    subcategory: "Messaging App",
    technologies: [
      "Flutter",
      "Firebase",
      "Cloud Firestore",
      "Firebase Storage",
      "Firebase Auth",
      "Provider",
      "Image Picker",
    ],
    primaryTech: ["Flutter", "Firebase", "Real-time Database"],
    features: [
      "Real-time messaging",
      "Group chat functionality",
      "Media file sharing (images, videos)",
      "User online status",
      "Message read receipts",
      "Push notifications",
      "User profile management",
      "Chat backup and restore",
    ],
    challenges: [
      "Implementing real-time message synchronization",
      "Managing media file uploads and storage",
      "Creating efficient chat list performance",
      "Handling message encryption",
      "Building responsive chat UI",
    ],
    solutions: [
      "Used Firestore for real-time message sync",
      "Implemented Firebase Storage for media files",
      "Created efficient list view with pagination",
      "Added message encryption layer",
      "Built custom chat bubble widgets",
    ],
    learnings: [
      "Real-time database operations",
      "Media handling and optimization",
      "Chat UI/UX best practices",
      "Security implementation",
      "Performance optimization for lists",
    ],
    images: {
      thumbnail: "/assets/images/projects/scholar-chat/thumbnail.jpg",
      hero: "/assets/images/projects/scholar-chat/hero.jpg",
      gallery: [
        "/assets/images/projects/scholar-chat/chat-list.jpg",
        "/assets/images/projects/scholar-chat/conversation.jpg",
        "/assets/images/projects/scholar-chat/group-chat.jpg",
        "/assets/images/projects/scholar-chat/profile.jpg",
      ],
    },
    links: {
      github: "https://github.com/ahmedas3d/Chat-App-in-Flutter",
    },
    duration: "3 months",
    teamSize: 1,
    myRole: "Flutter Developer",
    responsibilities: [
      "Real-time messaging implementation",
      "Firebase backend setup",
      "Media sharing functionality",
      "Chat UI development",
      "Performance optimization",
    ],
    status: "completed",
    featured: true,
    priority: 4,
    tags: ["Flutter", "Firebase", "Real-time", "Chat", "Media"],
    year: 2023,
  },
  {
    id: "flowery",
    title: "Flowery",
    subtitle: "E-commerce Platform",
    description:
      "Flutter-based e-commerce app for seamless floral product shopping experience.",
    longDescription:
      "Flowery is an elegant e-commerce platform specifically designed for floral products. The application provides a beautiful shopping experience with features like product browsing, cart management, secure checkout, and order tracking. Built with Firebase for backend services and integrated with payment gateways.",
    category: "E-commerce & Retail",
    subcategory: "E-commerce App",
    technologies: [
      "Flutter",
      "Firebase",
      "Stripe API",
      "Provider",
      "Cloud Firestore",
      "Firebase Storage",
      "Google Maps",
    ],
    primaryTech: ["Flutter", "Firebase", "E-commerce"],
    features: [
      "Product catalog with categories",
      "Advanced search and filtering",
      "Shopping cart management",
      "Secure payment processing",
      "Order tracking and history",
      "User reviews and ratings",
      "Wishlist functionality",
      "Delivery scheduling",
    ],
    challenges: [
      "Building complex e-commerce logic",
      "Implementing secure payment processing",
      "Creating advanced filtering system",
      "Managing inventory in real-time",
      "Building responsive product layouts",
    ],
    solutions: [
      "Structured e-commerce data models",
      "Integrated Stripe for secure payments",
      "Built custom filtering and search",
      "Used Firestore for real-time inventory",
      "Created responsive grid layouts",
    ],
    learnings: [
      "E-commerce app development",
      "Payment gateway integration",
      "Complex data filtering",
      "Inventory management",
      "E-commerce UI/UX patterns",
    ],
    images: {
      thumbnail: "/assets/images/projects/flowery/thumbnail.jpg",
      hero: "/assets/images/projects/flowery/hero.jpg",
      gallery: [
        "/assets/images/projects/flowery/catalog.jpg",
        "/assets/images/projects/flowery/product-detail.jpg",
        "/assets/images/projects/flowery/cart.jpg",
        "/assets/images/projects/flowery/checkout.jpg",
      ],
    },
    links: {
      github: "https://github.com/ahmedas3d/Flower-App",
    },
    duration: "4 months",
    teamSize: 2,
    myRole: "Lead Flutter Developer",
    responsibilities: [
      "E-commerce architecture design",
      "Payment system integration",
      "Product catalog development",
      "Order management system",
      "UI/UX implementation",
    ],
    status: "completed",
    featured: true,
    priority: 5,
    tags: ["Flutter", "E-commerce", "Firebase", "Payment", "Shopping"],
    year: 2023,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projectsData
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter((project) => project.category === category);
};

export const getProjectCategories = (): string[] => {
  return Array.from(new Set(projectsData.map((project) => project.category)));
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projectsData.filter((project) => project.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const allTags = projectsData.flatMap((project) => project.tags);
  return Array.from(new Set(allTags));
};
