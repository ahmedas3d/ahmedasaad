# 🌍 دليل دعم اللغات المتعددة (عربي/إنجليزي)

## 🎯 ما تم إنجازه

تم إضافة دعم كامل للغتين العربية والإنجليزية في البورتفوليو! 🎉

---

## 📦 الملفات المُنشأة

### **1. i18n Configuration**
✅ `src/i18n/config.ts` - إعداد i18next والإعدادات الأساسية

### **2. Translation Files**
✅ `src/i18n/locales/en.json` - الترجمات الإنجليزية
✅ `src/i18n/locales/ar.json` - الترجمات العربية

### **3. Language Context**
✅ `src/contexts/LanguageContext.tsx` - Context لإدارة اللغة

### **4. Custom Hooks**
✅ `src/hooks/useTranslation.ts` - Hook للترجمة

### **5. UI Components**
✅ `src/components/ui/LanguageSwitcher.tsx` - مبدل اللغة

### **6. RTL Styles**
✅ `src/styles/rtl.css` - أنماط RTL للعربية

### **7. Updated Services**
✅ `src/services/api.ts` - محدّث لدعم اللغتين من Database

---

## 🚀 كيفية الاستخدام

### **الخطوة 1: إضافة i18n و LanguageProvider للتطبيق**

في ملف `src/index.tsx` أو `src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/rtl.css'; // إضافة RTL styles
import './i18n/config'; // إضافة i18n config
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
```

---

### **الخطوة 2: إضافة Language Switcher في Navbar**

```tsx
import LanguageSwitcher from './components/ui/LanguageSwitcher';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        {/* روابط التنقل */}
      </div>

      {/* إضافة مبدل اللغة */}
      <LanguageSwitcher variant="compact" />
    </nav>
  );
}
```

---

### **الخطوة 3: استخدام الترجمة في المكونات**

#### **مثال 1: Hero Section**

```tsx
import { useTranslation } from '../hooks/useTranslation';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1>{t('hero.greeting')} Ahmed Asaad</h1>
      <p className="title">{t('hero.title')}</p>
      <p className="subtitle">{t('hero.subtitle')}</p>
      <p>{t('hero.description')}</p>

      <div className="cta-buttons">
        <button>{t('hero.cta.viewProjects')}</button>
        <button>{t('hero.cta.contactMe')}</button>
      </div>
    </section>
  );
}
```

#### **مثال 2: Projects Section**

```tsx
import { useTranslation } from '../hooks/useTranslation';
import { useProjects } from '../hooks/usePortfolioData';

function Projects() {
  const { t } = useTranslation();
  const { projects, loading } = useProjects();

  if (loading) return <p>{t('common.loading')}</p>;

  return (
    <section className="projects">
      <h2>{t('projects.title')}</h2>
      <p>{t('projects.subtitle')}</p>

      {projects.map(project => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.technologies.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <button>{t('projects.viewProject')}</button>
        </div>
      ))}
    </section>
  );
}
```

#### **مثال 3: Skills Section**

```tsx
import { useTranslation } from '../hooks/useTranslation';
import { useSkills } from '../hooks/usePortfolioData';

function Skills() {
  const { t } = useTranslation();
  const { skills } = useSkills();

  return (
    <section className="skills">
      <h2>{t('skills.title')}</h2>
      <p>{t('skills.subtitle')}</p>

      {skills.map(skill => (
        <div key={skill.id} className="skill-item">
          <h4>{skill.name}</h4>
          <p>{skill.description}</p>
          <span>
            {t('skills.yearsOfExperience', { years: skill.yearsOfExperience })}
          </span>
        </div>
      ))}
    </section>
  );
}
```

---

## 🎨 استخدام RTL (للعربية)

### **الطريقة التلقائية:**
عند تغيير اللغة للعربية، يتم تطبيق RTL تلقائياً على الصفحة كاملة.

### **استخدام Hooks:**

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { isRTL, direction } = useLanguage();

  return (
    <div className={isRTL ? 'rtl-specific-class' : 'ltr-specific-class'}>
      <p>Direction: {direction}</p>
    </div>
  );
}
```

---

## 🔧 إضافة ترجمات جديدة

### **1. في ملف `en.json`:**

```json
{
  "mySection": {
    "title": "My Section Title",
    "description": "This is a description",
    "button": "Click Here"
  }
}
```

### **2. في ملف `ar.json`:**

```json
{
  "mySection": {
    "title": "عنوان القسم",
    "description": "هذا وصف",
    "button": "اضغط هنا"
  }
}
```

### **3. استخدمها في المكون:**

```tsx
const { t } = useTranslation();

<h2>{t('mySection.title')}</h2>
<p>{t('mySection.description')}</p>
<button>{t('mySection.button')}</button>
```

---

## 📊 البيانات من Database (Supabase)

### **تلقائي:**
جميع البيانات من Supabase يتم جلبها حسب اللغة الحالية تلقائياً!

```tsx
import { useProjects } from '../hooks/usePortfolioData';
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
  const { projects } = useProjects(); // تجلب البيانات حسب اللغة الحالية
  const { currentLanguage } = useLanguage();

  // projects تحتوي على البيانات بالعربية أو الإنجليزية حسب اللغة المختارة

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3> {/* عربي أو إنجليزي */}
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎁 الميزات

### ✅ **تبديل اللغة السلس**
- تغيير فوري بدون إعادة تحميل الصفحة
- حفظ اللغة المختارة في localStorage

### ✅ **RTL Support كامل**
- تطبيق RTL تلقائي للعربية
- LTR للإنجليزية
- Styles مخصصة لكل اتجاه

### ✅ **Data من Database**
- جلب البيانات بالعربية أو الإنجليزية تلقائياً
- دعم كامل للـ Projects, Skills, Personal Info, etc.

### ✅ **Type Safety**
- TypeScript types كاملة
- Autocomplete للترجمات

### ✅ **SEO Friendly**
- تحديث `lang` و `dir` في HTML
- دعم محركات البحث

---

## 🎨 Language Switcher Variants

### **Compact Variant (القائمة المنسدلة):**

```tsx
<LanguageSwitcher variant="compact" />
```

### **Full Variant (الأزرار):**

```tsx
<LanguageSwitcher variant="full" />
```

---

## 📝 ترجمات متاحة

### **Common (مشترك)**
- `common.loading` - "Loading..." / "جاري التحميل..."
- `common.error` - "Error" / "خطأ"
- `common.retry` - "Try Again" / "حاول مرة أخرى"
- `common.download` - "Download" / "تحميل"

### **Navigation (التنقل)**
- `nav.home` - "Home" / "الرئيسية"
- `nav.about` - "About" / "نبذة عني"
- `nav.projects` - "Projects" / "المشاريع"
- `nav.skills` - "Skills" / "المهارات"
- `nav.contact` - "Contact" / "تواصل معي"

### **Hero Section**
- `hero.greeting` - "Hi, I'm" / "مرحباً، أنا"
- `hero.title` - "Flutter Developer" / "مطور فلاتر"
- `hero.subtitle` - "Building beautiful..." / "أبني تطبيقات..."
- `hero.cta.viewProjects` - "View My Work" / "شاهد أعمالي"

### **Projects Section**
- `projects.title` - "My Projects" / "مشاريعي"
- `projects.subtitle` - "Featured Work" / "أعمالي المميزة"
- `projects.technologies` - "Technologies" / "التقنيات"
- `projects.viewProject` - "View Project Details" / "عرض تفاصيل المشروع"

### **Skills Section**
- `skills.title` - "Technical Skills" / "المهارات التقنية"
- `skills.subtitle` - "Technologies I Work With" / "التقنيات التي أعمل بها"
- `skills.level` - "Proficiency" / "مستوى الإتقان"

### **Contact Section**
- `contact.title` - "Get In Touch" / "تواصل معي"
- `contact.form.name` - "Your Name" / "اسمك"
- `contact.form.email` - "Your Email" / "بريدك الإلكتروني"
- `contact.form.send` - "Send Message" / "إرسال الرسالة"

**انظر الملفات الكاملة:**
- [en.json](./src/i18n/locales/en.json)
- [ar.json](./src/i18n/locales/ar.json)

---

## 🔧 وظائف مساعدة

### **تغيير اللغة يدوياً:**

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { changeLanguage } = useLanguage();

  const switchToArabic = () => {
    changeLanguage('ar');
  };

  const switchToEnglish = () => {
    changeLanguage('en');
  };

  return (
    <div>
      <button onClick={switchToArabic}>العربية</button>
      <button onClick={switchToEnglish}>English</button>
    </div>
  );
}
```

### **الحصول على اللغة الحالية:**

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { currentLanguage, isRTL } = useLanguage();

  return (
    <div>
      <p>Current Language: {currentLanguage}</p>
      <p>Is RTL: {isRTL ? 'Yes' : 'No'}</p>
    </div>
  );
}
```

---

## 📊 Database Schema للترجمات

تأكد من وجود الحقول التالية في جداول Supabase:

### **projects table:**
- `title_en` - العنوان بالإنجليزية
- `title_ar` - العنوان بالعربية
- `description_en` - الوصف بالإنجليزية
- `description_ar` - الوصف بالعربية
- `category_en` - التصنيف بالإنجليزية
- `category_ar` - التصنيف بالعربية

### **skills table:**
- `name_en` - الاسم بالإنجليزية
- `name_ar` - الاسم بالعربية
- `description_en` - الوصف بالإنجليزية
- `description_ar` - الوصف بالعربية
- `category_en` - التصنيف بالإنجليزية
- `category_ar` - التصنيف بالعربية

### **personal_info table:**
- `full_name_en` - الاسم بالإنجليزية
- `full_name_ar` - الاسم بالعربية
- `title_en` - المسمى الوظيفي بالإنجليزية
- `title_ar` - المسمى الوظيفي بالعربية
- `bio_en` - السيرة بالإنجليزية
- `bio_ar` - السيرة بالعربية
- `location_en` - الموقع بالإنجليزية
- `location_ar` - الموقع بالعربية

---

## 🎯 Best Practices

### **1. استخدم مفاتيح ترجمة واضحة:**
```tsx
// ✅ Good
t('projects.title')
t('contact.form.email')

// ❌ Bad
t('title')
t('email')
```

### **2. استخدم Interpolation للقيم الديناميكية:**
```tsx
// ✅ Good
t('skills.yearsOfExperience', { years: 5 })

// ❌ Bad
`${skill.yearsOfExperience} years experience`
```

### **3. احفظ البيانات التي لا تتغير:**
```tsx
// الأسماء الشخصية، الإيميلات، الأرقام - لا تترجمها
<h1>Ahmed Asaad</h1>
<a href="mailto:ahmedxasaad@gmail.com">ahmedxasaad@gmail.com</a>
```

### **4. استخدم RTL-aware Components:**
```tsx
// ✅ Good
<div className={isRTL ? 'flex-row-reverse' : 'flex-row'}>

// أو استخدم CSS classes التلقائية من rtl.css
```

---

## 🚀 الخطوات التالية

1. ✅ أضف `LanguageProvider` في `index.tsx`
2. ✅ استورد `rtl.css` في `index.tsx`
3. ✅ أضف `LanguageSwitcher` في Navbar
4. ✅ استخدم `useTranslation` في كل المكونات
5. ✅ أضف البيانات بالعربية في Supabase
6. ✅ اختبر التبديل بين اللغات

---

## 📞 مثال كامل

```tsx
// src/App.tsx
import React from 'react';
import { useTranslation } from './hooks/useTranslation';
import { useLanguage } from './contexts/LanguageContext';
import LanguageSwitcher from './components/ui/LanguageSwitcher';
import { useProjects } from './hooks/usePortfolioData';

function App() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { projects } = useProjects();

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <header>
        <nav>
          <a href="#home">{t('nav.home')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#contact">{t('nav.contact')}</a>
          <LanguageSwitcher variant="compact" />
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>{t('hero.greeting')} Ahmed Asaad</h1>
          <p>{t('hero.title')}</p>
          <button>{t('hero.cta.viewProjects')}</button>
        </section>

        <section className="projects">
          <h2>{t('projects.title')}</h2>
          {projects.map(project => (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
```

---

**كل شيء جاهز! الآن الموقع يدعم العربية والإنجليزية بشكل كامل! 🎉**
