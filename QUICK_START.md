# 🚀 Quick Start - ربط البورتفوليو بالداشبورد

## الخطوات السريعة للبدء

### 1️⃣ **إضافة البيانات في Supabase Dashboard**

1. اذهب إلى: https://supabase.com/dashboard/project/brpmtsaxaaqeewkdcbwm
2. اضغط على **SQL Editor**
3. أنشئ الجداول المطلوبة (انظر الأسفل)
4. أضف البيانات من ملف `DASHBOARD_DATA_PROMPT.md`

---

### 2️⃣ **SQL لإنشاء الجداول**

```sql
-- =============================
-- Table: personal_info
-- =============================
CREATE TABLE personal_info (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name_en VARCHAR(255),
  full_name_ar VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  location_en VARCHAR(255),
  location_ar VARCHAR(255),
  title_en VARCHAR(255),
  title_ar VARCHAR(255),
  short_title_en VARCHAR(100),
  bio_en TEXT,
  bio_ar TEXT,
  bio_short_en TEXT,
  bio_long_en TEXT,
  bio_professional_en TEXT,
  linkedin_url VARCHAR(500),
  github_url VARCHAR(500),
  twitter_url VARCHAR(500),
  whatsapp_url VARCHAR(500),
  profile_image_url VARCHAR(500),
  resume_en_url VARCHAR(500),
  resume_ar_url VARCHAR(500),
  availability_status_en VARCHAR(255),
  availability_status_ar VARCHAR(255),
  experience_years VARCHAR(50),
  education_degree VARCHAR(255),
  education_field VARCHAR(255),
  education_duration VARCHAR(100),
  education_grade VARCHAR(100),
  languages JSONB,
  taglines TEXT[],
  specialties TEXT[],
  interests TEXT[],
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE personal_info ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON personal_info
  FOR SELECT USING (true);

-- =============================
-- Table: projects
-- =============================
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_en VARCHAR(255) NOT NULL,
  title_ar VARCHAR(255),
  description_en TEXT,
  description_ar TEXT,
  long_description_en TEXT,
  long_description_ar TEXT,
  category_en VARCHAR(255),
  category_ar VARCHAR(255),
  subcategory_en VARCHAR(255),
  technologies TEXT[],
  primary_tech TEXT[],
  features TEXT[],
  challenges TEXT[],
  solutions TEXT[],
  learnings TEXT[],
  images TEXT[],
  thumbnail_image VARCHAR(500),
  hero_image VARCHAR(500),
  github_url VARCHAR(500),
  live_url VARCHAR(500),
  demo_url VARCHAR(500),
  playstore_url VARCHAR(500),
  appstore_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  duration VARCHAR(100),
  team_size INTEGER DEFAULT 1,
  my_role VARCHAR(255),
  responsibilities TEXT[],
  status VARCHAR(50) DEFAULT 'completed',
  priority INTEGER DEFAULT 0,
  tags TEXT[],
  year INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- =============================
-- Table: skills
-- =============================
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en VARCHAR(255) NOT NULL,
  name_ar VARCHAR(255),
  category_en VARCHAR(255),
  category_ar VARCHAR(255),
  proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
  years_experience DECIMAL(3, 1),
  icon_url VARCHAR(500),
  icon_name VARCHAR(100),
  color VARCHAR(50),
  description_en TEXT,
  description_ar TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  projects TEXT[],
  certifications TEXT[],
  priority INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON skills
  FOR SELECT USING (true);

-- =============================
-- Table: social_links
-- =============================
CREATE TABLE social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en VARCHAR(100) NOT NULL,
  name_ar VARCHAR(100),
  url VARCHAR(500) NOT NULL,
  icon VARCHAR(100),
  color VARCHAR(50),
  username VARCHAR(255),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON social_links
  FOR SELECT USING (true);

-- =============================
-- Table: achievements
-- =============================
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_en VARCHAR(255) NOT NULL,
  title_ar VARCHAR(255),
  description_en TEXT,
  description_ar TEXT,
  date VARCHAR(100),
  type VARCHAR(50) CHECK (type IN ('education', 'project', 'certification', 'award')),
  is_active BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON achievements
  FOR SELECT USING (true);
```

---

### 3️⃣ **إضافة البيانات - مثال**

```sql
-- =============================
-- إضافة المعلومات الشخصية
-- =============================
INSERT INTO personal_info (
  full_name_en,
  full_name_ar,
  email,
  phone,
  location_en,
  location_ar,
  title_en,
  title_ar,
  short_title_en,
  bio_en,
  bio_short_en,
  bio_long_en,
  bio_professional_en,
  linkedin_url,
  github_url,
  twitter_url,
  whatsapp_url,
  experience_years,
  education_degree,
  education_field,
  education_duration,
  education_grade,
  languages,
  taglines,
  specialties,
  interests
) VALUES (
  'Ahmed Asaad',
  'أحمد أسعد',
  'ahmedxasaad@gmail.com',
  '+201014781603',
  'Ismailia, Egypt',
  'الإسماعيلية، مصر',
  'Flutter Developer',
  'مطور فلاتر',
  'Flutter Dev',
  'Passionate Flutter developer creating high-performance, cross-platform mobile applications with clean architecture and seamless user experiences.',
  'Passionate Flutter developer creating high-performance, cross-platform mobile applications with clean architecture and seamless user experiences.',
  'Professional Flutter Developer with 1+ years of experience specializing in cross-platform mobile app development. Expert in Dart, Firebase, and clean architecture patterns. Dedicated to writing maintainable code and creating exceptional user experiences.',
  'Results-driven Flutter Developer with a strong foundation in mobile app development, clean architecture, and modern development practices. Experienced in building scalable applications using Dart, Firebase, and REST APIs. Committed to continuous learning and delivering high-quality solutions.',
  'https://www.linkedin.com/in/ahmed-asaad-1960812a0/',
  'https://github.com/ahmedas3d',
  'https://x.com/AhmedAsaad2002',
  'https://wa.me/201014781603',
  '1+ years',
  'Bachelor''s Degree',
  'Management Information Systems',
  '2020-2024',
  'Very Good',
  '[{"name": "Arabic", "level": "Native"}, {"name": "English", "level": "Proficient"}]'::jsonb,
  ARRAY['Passionate about clean, maintainable code', 'Cross-platform mobile solutions expert', 'Firebase & REST API specialist', 'Clean Architecture advocate', 'Building the future, one app at a time'],
  ARRAY['Flutter Framework Mastery', 'Cross-platform Development', 'Firebase Backend Integration', 'Clean Architecture Implementation', 'State Management (Bloc & Cubit)', 'REST API Integration', 'Performance Optimization', 'UI/UX Implementation'],
  ARRAY['Mobile Technology Trends', 'Clean Code Practices', 'Open Source Contribution', 'Tech Community Engagement', 'Continuous Learning', 'Problem Solving']
);

-- =============================
-- إضافة مشروع Sportify
-- =============================
INSERT INTO projects (
  title_en,
  title_ar,
  description_en,
  description_ar,
  long_description_en,
  category_en,
  category_ar,
  subcategory_en,
  technologies,
  primary_tech,
  features,
  challenges,
  solutions,
  learnings,
  github_url,
  featured,
  display_order,
  is_active,
  duration,
  team_size,
  my_role,
  responsibilities,
  status,
  priority,
  tags,
  year
) VALUES (
  'Sportify',
  'سبورتيفاي',
  'Comprehensive football app with daily matches, favorite teams, European league tables, and sports news.',
  'تطبيق شامل لكرة القدم يعرض المباريات اليومية والفرق المفضلة وجداول الدوريات الأوروبية والأخبار الرياضية.',
  'Sportify is a feature-rich football application that provides users with comprehensive coverage of European football. The app includes daily match schedules, live scores, team statistics, league tables, and the latest sports news. Built with Flutter and powered by REST APIs, it delivers real-time data to football enthusiasts worldwide.',
  'Sports & Entertainment',
  'رياضة وترفيه',
  'Sports App',
  ARRAY['Flutter', 'Dart', 'REST API', 'Firebase', 'Provider', 'HTTP', 'JSON'],
  ARRAY['Flutter', 'Dart', 'Firebase'],
  ARRAY['Real-time match scores and schedules', 'European league tables and standings', 'Favorite teams management', 'Sports news aggregation', 'Match notifications and alerts', 'Team and player statistics', 'Live commentary updates', 'Multi-language support'],
  ARRAY['Implementing real-time data synchronization', 'Managing multiple API endpoints efficiently', 'Creating responsive UI for various screen sizes', 'Optimizing app performance with large datasets', 'Handling network connectivity issues'],
  ARRAY['Implemented efficient state management with Provider', 'Created robust API service layer with error handling', 'Used responsive design principles and adaptive layouts', 'Implemented data caching and pagination strategies', 'Added offline mode with local data storage'],
  ARRAY['Advanced state management patterns', 'REST API integration best practices', 'Performance optimization techniques', 'User experience design principles', 'Real-time data handling strategies'],
  'https://github.com/ahmedas3d/Spotify-v1',
  true,
  1,
  true,
  '3 months',
  1,
  'Lead Flutter Developer',
  ARRAY['Full-stack mobile app development', 'API integration and data management', 'UI/UX implementation', 'Performance optimization', 'Testing and deployment'],
  'completed',
  1,
  ARRAY['Flutter', 'Sports', 'Real-time', 'API Integration'],
  2024
);

-- =============================
-- إضافة مهارة Flutter
-- =============================
INSERT INTO skills (
  name_en,
  name_ar,
  category_en,
  category_ar,
  proficiency,
  years_experience,
  icon_name,
  color,
  description_en,
  description_ar,
  display_order,
  is_active,
  projects,
  priority
) VALUES (
  'Flutter',
  'فلاتر',
  'Mobile Development',
  'تطوير الهاتف المحمول',
  90,
  1.5,
  'SiFlutter',
  '#02569B',
  'Cross-platform mobile app development framework - Primary expertise',
  'إطار عمل لتطوير تطبيقات الهاتف متعددة المنصات - الخبرة الأساسية',
  1,
  true,
  ARRAY['sportify', 'home-food', 'news-hub', 'scholar-chat', 'flowery'],
  1
);

-- =============================
-- إضافة روابط التواصل
-- =============================
INSERT INTO social_links (name_en, name_ar, url, icon, color, username, display_order, is_active)
VALUES
  ('GitHub', 'جيت هاب', 'https://github.com/ahmedas3d', 'FaGithub', '#333333', 'ahmedas3d', 1, true),
  ('LinkedIn', 'لينكد إن', 'https://www.linkedin.com/in/ahmed-asaad-1960812a0/', 'FaLinkedin', '#0077B5', 'ahmed-asaad', 2, true),
  ('Twitter', 'تويتر', 'https://x.com/AhmedAsaad2002', 'FaTwitter', '#1DA1F2', 'AhmedAsaad2002', 3, true),
  ('Email', 'البريد الإلكتروني', 'mailto:ahmedxasaad@gmail.com', 'FaEnvelope', '#FF1744', null, 4, true),
  ('Phone', 'الهاتف', 'tel:+201014781603', 'FaPhone', '#4CAF50', null, 5, true),
  ('WhatsApp', 'واتساب', 'https://wa.me/201014781603', 'FaWhatsapp', '#25D366', null, 6, true);

-- =============================
-- إضافة الإنجازات
-- =============================
INSERT INTO achievements (title_en, title_ar, description_en, description_ar, date, type, is_active, display_order)
VALUES
  ('Bachelor''s Degree - Very Good Grade', 'درجة البكالوريوس - تقدير جيد جداً', 'Graduated with Very Good grade in Management Information Systems', 'تخرجت بتقدير جيد جداً في نظم المعلومات الإدارية', '2024', 'education', true, 1),
  ('5 Successful Mobile Applications', '5 تطبيقات جوال ناجحة', 'Developed and deployed 5 mobile applications using Flutter framework', 'قمت بتطوير ونشر 5 تطبيقات جوال باستخدام Flutter', '2023-2024', 'project', true, 2),
  ('Clean Architecture Implementation', 'تطبيق البنية النظيفة', 'Successfully implemented clean architecture patterns across multiple projects', 'نجحت في تطبيق أنماط البنية النظيفة في عدة مشاريع', '2023', 'project', true, 3),
  ('Firebase Integration Expert', 'خبير في دمج Firebase', 'Mastered Firebase services for backend development and real-time features', 'أتقنت خدمات Firebase للتطوير الخلفي والميزات الفورية', '2023', 'certification', true, 4);
```

---

### 4️⃣ **اختبار الاتصال**

افتح المتصفح وجرب:

```javascript
// في console المتصفح
import { testConnection } from './services/api';

testConnection().then(result => {
  console.log('Connected:', result);
});
```

---

### 5️⃣ **استخدام في المكونات**

```tsx
// Example: Projects page
import { useProjects } from '../hooks/usePortfolioData';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function ProjectsPage() {
  const { projects, loading, error } = useProjects();

  if (loading) return <LoadingSpinner message="Loading projects..." />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## ✅ Checklist

- [ ] أنشأت الجداول في Supabase
- [ ] أضفت البيانات (على الأقل personal_info)
- [ ] اختبرت الاتصال في console
- [ ] حدّثت مكون واحد للاختبار
- [ ] تأكدت من ظهور البيانات بشكل صحيح

---

## 🎉 أنت جاهز!

الآن يمكنك:
1. إدارة المحتوى من الداشبورد
2. تحديث البيانات في الوقت الفعلي
3. إضافة مشاريع جديدة بسهولة
4. تعديل المهارات والمعلومات الشخصية

**كل التغييرات ستظهر تلقائياً في البورتفوليو! 🚀**
