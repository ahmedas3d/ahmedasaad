import { supabase, DbProject, DbSkill, DbPersonalInfo, DbSocialLink, DbAchievement } from '../lib/supabase';
import { Project } from '../data/projects';
import { Skill } from '../data/skills';
import { PersonalInfo, SocialLink, Achievement } from '../data/personal';

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: any; timestamp: number }>();

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }
  return null;
}

function setCachedData(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// ===========================
// PROJECTS API
// ===========================

/**
 * Fetch all active projects from Supabase
 */
export async function fetchProjects(): Promise<Project[]> {
  const cacheKey = 'projects';
  const cached = getCachedData<Project[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) throw error;

    const projects = (data || []).map((dbProject) => transformDbProjectToProject(dbProject));
    setCachedData(cacheKey, projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Fetch a single project by ID
 */
export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error) throw error;
    if (!data) return null;

    return transformDbProjectToProject(data);
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

/**
 * Fetch featured projects
 */
export async function fetchFeaturedProjects(): Promise<Project[]> {
  const cacheKey = 'featured-projects';
  const cached = getCachedData<Project[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('is_active', true)
      .eq('featured', true)
      .order('priority', { ascending: true });

    if (error) throw error;

    const projects = (data || []).map((dbProject) => transformDbProjectToProject(dbProject));
    setCachedData(cacheKey, projects);
    return projects;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

/**
 * Get current language from localStorage or default to 'en'
 */
function getCurrentLanguage(): 'en' | 'ar' {
  if (typeof window === 'undefined') return 'en';
  return (localStorage.getItem('i18nextLng') || 'en') as 'en' | 'ar';
}

/**
 * Transform database project to app project format
 * Automatically uses the current language
 */
function transformDbProjectToProject(dbProject: DbProject, lang?: 'en' | 'ar'): Project {
  const currentLang = lang || getCurrentLanguage();
  const isArabic = currentLang === 'ar';

  return {
    id: dbProject.id,
    title: isArabic && dbProject.title_ar ? dbProject.title_ar : dbProject.title_en,
    subtitle: isArabic && dbProject.subcategory_ar ? dbProject.subcategory_ar : (dbProject.subcategory_en || ''),
    description: isArabic && dbProject.description_ar ? dbProject.description_ar : (dbProject.description_en || ''),
    longDescription: isArabic && dbProject.long_description_ar ? dbProject.long_description_ar : (dbProject.long_description_en || dbProject.description_en || ''),
    category: isArabic && dbProject.category_ar ? dbProject.category_ar : (dbProject.category_en || ''),
    subcategory: isArabic && dbProject.subcategory_ar ? dbProject.subcategory_ar : (dbProject.subcategory_en || ''),
    technologies: dbProject.technologies || [],
    primaryTech: dbProject.primary_tech || [],
    features: dbProject.features || [],
    challenges: dbProject.challenges || [],
    solutions: dbProject.solutions || [],
    learnings: dbProject.learnings || [],
    images: {
      thumbnail: dbProject.thumbnail_image || dbProject.images?.[0] || '',
      hero: dbProject.hero_image || dbProject.images?.[0] || '',
      gallery: dbProject.images || [],
      screenshots: dbProject.images || [],
    },
    links: {
      github: dbProject.github_url || undefined,
      demo: dbProject.demo_url || dbProject.live_url || undefined,
      playstore: dbProject.playstore_url || undefined,
      appstore: dbProject.appstore_url || undefined,
    },
    duration: dbProject.duration || '',
    teamSize: dbProject.team_size || 1,
    myRole: dbProject.my_role || '',
    responsibilities: dbProject.responsibilities || [],
    status: dbProject.status || 'completed',
    featured: dbProject.featured,
    priority: dbProject.priority || dbProject.display_order,
    tags: dbProject.tags || [],
    year: dbProject.year || new Date().getFullYear(),
  };
}

// ===========================
// SKILLS API
// ===========================

/**
 * Fetch all active skills from Supabase
 */
export async function fetchSkills(): Promise<Skill[]> {
  const cacheKey = 'skills';
  const cached = getCachedData<Skill[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) throw error;

    const skills = (data || []).map((item) => transformDbSkillToSkill(item));
    setCachedData(cacheKey, skills);
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

/**
 * Fetch skills by category
 */
export async function fetchSkillsByCategory(category: string): Promise<Skill[]> {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('is_active', true)
      .eq('category_en', category)
      .order('display_order', { ascending: true });

    if (error) throw error;

    return (data || []).map((item) => transformDbSkillToSkill(item));
  } catch (error) {
    console.error('Error fetching skills by category:', error);
    return [];
  }
}

/**
 * Transform database skill to app skill format
 * Automatically uses the current language
 */
function transformDbSkillToSkill(dbSkill: DbSkill, lang?: 'en' | 'ar'): Skill {
  const currentLang = lang || getCurrentLanguage();
  const isArabic = currentLang === 'ar';

  return {
    id: dbSkill.id,
    name: isArabic && dbSkill.name_ar ? dbSkill.name_ar : dbSkill.name_en,
    level: dbSkill.proficiency,
    category: mapSkillCategory(dbSkill.category_en || ''),
    icon: dbSkill.icon_name || dbSkill.icon_url || '',
    color: dbSkill.color || '#000000',
    description: isArabic && dbSkill.description_ar ? dbSkill.description_ar : (dbSkill.description_en || ''),
    yearsOfExperience: dbSkill.years_experience,
    projects: dbSkill.projects || [],
    certifications: dbSkill.certifications || [],
    priority: dbSkill.priority || dbSkill.display_order,
  };
}

/**
 * Map skill category from database to app format
 */
function mapSkillCategory(category: string): 'mobile' | 'backend' | 'tools' | 'design' | 'architecture' {
  const categoryMap: Record<string, 'mobile' | 'backend' | 'tools' | 'design' | 'architecture'> = {
    'Mobile Development': 'mobile',
    'Backend & APIs': 'backend',
    'Development Tools': 'tools',
    'UI/UX Design': 'design',
    'Architecture & State Management': 'architecture',
  };

  return categoryMap[category] || 'tools';
}

// ===========================
// PERSONAL INFO API
// ===========================

/**
 * Fetch personal information from Supabase
 */
export async function fetchPersonalInfo(): Promise<PersonalInfo | null> {
  const cacheKey = 'personal-info';
  const cached = getCachedData<PersonalInfo>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('personal_info')
      .select('*')
      .limit(1)
      .single();

    if (error) throw error;
    if (!data) return null;

    const personalInfo = transformDbPersonalInfoToPersonalInfo(data);
    setCachedData(cacheKey, personalInfo);
    return personalInfo;
  } catch (error) {
    console.error('Error fetching personal info:', error);
    return null;
  }
}

/**
 * Transform database personal info to app format
 * Automatically uses the current language
 */
function transformDbPersonalInfoToPersonalInfo(dbInfo: DbPersonalInfo, lang?: 'en' | 'ar'): PersonalInfo {
  const currentLang = lang || getCurrentLanguage();
  const isArabic = currentLang === 'ar';

  return {
    name: isArabic && dbInfo.full_name_ar ? dbInfo.full_name_ar : (dbInfo.full_name_en || 'Ahmed Asaad'),
    title: isArabic && dbInfo.title_ar ? dbInfo.title_ar : (dbInfo.title_en || 'Flutter Developer'),
    shortTitle: isArabic && dbInfo.short_title_en ? dbInfo.short_title_en : (dbInfo.short_title_en || 'Flutter Dev'),
    location: isArabic && dbInfo.location_ar ? dbInfo.location_ar : (dbInfo.location_en || ''),
    email: dbInfo.email || '',
    phone: dbInfo.phone || '',
    experience: dbInfo.experience_years || '1+ years',
    education: {
      degree: dbInfo.education_degree || '',
      field: dbInfo.education_field || '',
      duration: dbInfo.education_duration || '',
      grade: dbInfo.education_grade || '',
    },
    languages: dbInfo.languages || [],
    bio: {
      short: isArabic && dbInfo.bio_short_en ? dbInfo.bio_short_en : (dbInfo.bio_short_en || dbInfo.bio_en || ''),
      long: isArabic && dbInfo.bio_long_en ? dbInfo.bio_long_en : (dbInfo.bio_long_en || dbInfo.bio_en || ''),
      professional: isArabic && dbInfo.bio_professional_en ? dbInfo.bio_professional_en : (dbInfo.bio_professional_en || dbInfo.bio_en || ''),
    },
    taglines: dbInfo.taglines || [],
    specialties: dbInfo.specialties || [],
    interests: dbInfo.interests || [],
  };
}

// ===========================
// SOCIAL LINKS API
// ===========================

/**
 * Fetch social links from Supabase
 */
export async function fetchSocialLinks(): Promise<SocialLink[]> {
  const cacheKey = 'social-links';
  const cached = getCachedData<SocialLink[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('social_links')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) throw error;

    const socialLinks = (data || []).map((item) => transformDbSocialLinkToSocialLink(item));
    setCachedData(cacheKey, socialLinks);
    return socialLinks;
  } catch (error) {
    console.error('Error fetching social links:', error);
    return [];
  }
}

/**
 * Transform database social link to app format
 * Automatically uses the current language
 */
function transformDbSocialLinkToSocialLink(dbLink: DbSocialLink, lang?: 'en' | 'ar'): SocialLink {
  const currentLang = lang || getCurrentLanguage();
  const isArabic = currentLang === 'ar';

  return {
    name: isArabic && dbLink.name_ar ? dbLink.name_ar : dbLink.name_en,
    url: dbLink.url,
    icon: dbLink.icon,
    color: dbLink.color || '#000000',
    username: dbLink.username || undefined,
  };
}

// ===========================
// ACHIEVEMENTS API
// ===========================

/**
 * Fetch achievements from Supabase
 */
export async function fetchAchievements(): Promise<Achievement[]> {
  const cacheKey = 'achievements';
  const cached = getCachedData<Achievement[]>(cacheKey);
  if (cached) return cached;

  try {
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) throw error;

    const achievements = (data || []).map((item) => transformDbAchievementToAchievement(item));
    setCachedData(cacheKey, achievements);
    return achievements;
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return [];
  }
}

/**
 * Transform database achievement to app format
 * Automatically uses the current language
 */
function transformDbAchievementToAchievement(dbAchievement: DbAchievement, lang?: 'en' | 'ar'): Achievement {
  const currentLang = lang || getCurrentLanguage();
  const isArabic = currentLang === 'ar';

  return {
    title: isArabic && dbAchievement.title_ar ? dbAchievement.title_ar : dbAchievement.title_en,
    description: isArabic && dbAchievement.description_ar ? dbAchievement.description_ar : (dbAchievement.description_en || ''),
    date: dbAchievement.date,
    type: dbAchievement.type,
  };
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Clear all cached data
 */
export function clearCache(): void {
  cache.clear();
}

/**
 * Prefetch all data for better performance
 */
export async function prefetchAllData(): Promise<void> {
  try {
    await Promise.all([
      fetchProjects(),
      fetchSkills(),
      fetchPersonalInfo(),
      fetchSocialLinks(),
      fetchAchievements(),
    ]);
  } catch (error) {
    console.error('Error prefetching data:', error);
  }
}

/**
 * Check if Supabase connection is working
 */
export async function testConnection(): Promise<boolean> {
  try {
    const { error } = await supabase.from('projects').select('id').limit(1);
    return !error;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return false;
  }
}
