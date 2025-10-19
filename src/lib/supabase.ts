import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://brpmtsaxaaqeewkdcbwm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycG10c2F4YWFxZWV3a2RjYndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNzk5ODIsImV4cCI6MjA3Mzg1NTk4Mn0.ggCDysbkw801e_gDaiNsgsDKuqkfhK-IkRB8rILq9XI';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface DbProject {
  id: string;
  title_en: string;
  title_ar: string | null;
  description_en: string | null;
  description_ar: string | null;
  long_description_en?: string | null;
  long_description_ar?: string | null;
  category_en: string | null;
  category_ar: string | null;
  subcategory_en?: string | null;
  subcategory_ar?: string | null;
  technologies: string[];
  primary_tech?: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  images: string[];
  thumbnail_image?: string | null;
  hero_image?: string | null;
  github_url: string | null;
  live_url: string | null;
  demo_url?: string | null;
  playstore_url?: string | null;
  appstore_url?: string | null;
  featured: boolean;
  display_order: number;
  is_active: boolean;
  duration?: string | null;
  team_size?: number;
  my_role?: string | null;
  responsibilities?: string[];
  status?: 'completed' | 'in-progress' | 'planned';
  priority?: number;
  tags?: string[];
  year?: number;
  created_at: string;
  updated_at: string;
}

export interface DbSkill {
  id: string;
  name_en: string;
  name_ar: string | null;
  category_en: string | null;
  category_ar: string | null;
  proficiency: number;
  years_experience: number;
  icon_url: string | null;
  icon_name?: string | null;
  color?: string | null;
  description_en: string | null;
  description_ar: string | null;
  display_order: number;
  is_active: boolean;
  projects?: string[];
  certifications?: string[];
  priority?: number;
  created_at: string;
}

export interface DbPersonalInfo {
  id: string;
  full_name_en: string | null;
  full_name_ar: string | null;
  email: string | null;
  phone: string | null;
  location_en: string | null;
  location_ar: string | null;
  title_en: string | null;
  title_ar: string | null;
  short_title_en?: string | null;
  bio_en: string | null;
  bio_ar: string | null;
  bio_short_en?: string | null;
  bio_long_en?: string | null;
  bio_professional_en?: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  twitter_url?: string | null;
  whatsapp_url?: string | null;
  profile_image_url: string | null;
  resume_en_url: string | null;
  resume_ar_url: string | null;
  availability_status_en: string | null;
  availability_status_ar: string | null;
  experience_years?: string | null;
  education_degree?: string | null;
  education_field?: string | null;
  education_duration?: string | null;
  education_grade?: string | null;
  languages?: Array<{ name: string; level: string }>;
  taglines?: string[];
  specialties?: string[];
  interests?: string[];
  updated_at: string;
}

export interface DbSocialLink {
  id: string;
  name_en: string;
  name_ar?: string | null;
  url: string;
  icon: string;
  color?: string | null;
  username?: string | null;
  display_order?: number;
  is_active?: boolean;
  created_at?: string;
}

export interface DbAchievement {
  id: string;
  title_en: string;
  title_ar?: string | null;
  description_en: string | null;
  description_ar?: string | null;
  date: string;
  type: 'education' | 'project' | 'certification' | 'award';
  is_active?: boolean;
  display_order?: number;
  created_at?: string;
}
