# 🚀 Multi-Language Setup - خطوات سريعة

## ✅ ما تم إنجازه

تم إضافة دعم كامل للعربية والإنجليزية! الآن فقط اتبع 3 خطوات بسيطة:

---

## 📝 الخطوة 1: تحديث `index.tsx` أو `main.tsx`

افتح ملف `src/index.tsx` (أو `src/main.tsx` في Vite) وعدّله كالتالي:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ⭐ أضف هذين السطرين
import './styles/rtl.css';
import './i18n/config';

// ⭐ استورد LanguageProvider
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ⭐ لف App بـ LanguageProvider */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
```

---

## 📝 الخطوة 2: أضف Language Switcher في Navbar

في ملف الـ Navbar (مثلاً `src/components/Navbar.tsx`):

```tsx
import React from 'react';
import LanguageSwitcher from './ui/LanguageSwitcher';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ahmed Asaad</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* ⭐ أضف مبدل اللغة */}
      <LanguageSwitcher variant="compact" />
    </nav>
  );
}

export default Navbar;
```

---

## 📝 الخطوة 3: استخدم الترجمات في المكونات

في أي مكون تريد ترجمته (مثلاً `Hero.tsx`):

### **قبل:**
```tsx
function Hero() {
  return (
    <section>
      <h1>Hi, I'm Ahmed Asaad</h1>
      <p>Flutter Developer</p>
      <p>Building beautiful mobile applications</p>
      <button>View My Work</button>
    </section>
  );
}
```

### **بعد:**
```tsx
import { useTranslation } from '../hooks/useTranslation';

function Hero() {
  const { t } = useTranslation(); // ⭐ أضف hook الترجمة

  return (
    <section>
      <h1>{t('hero.greeting')} Ahmed Asaad</h1>
      <p>{t('hero.title')}</p>
      <p>{t('hero.subtitle')}</p>
      <button>{t('hero.cta.viewProjects')}</button>
    </section>
  );
}
```

---

## 🎉 انتهى!

الآن الموقع يدعم العربية والإنجليزية!

### **للاختبار:**
1. شغّل المشروع: `npm start`
2. اضغط على مبدل اللغة في Navbar
3. شاهد الموقع يتحول للعربية مع RTL تلقائي!

---

## 📚 مراجع إضافية

### **للمزيد من التفاصيل:**
- 📖 [MULTI_LANGUAGE_GUIDE.md](./MULTI_LANGUAGE_GUIDE.md) - دليل شامل

### **الترجمات المتاحة:**
- 📄 [src/i18n/locales/en.json](./src/i18n/locales/en.json)
- 📄 [src/i18n/locales/ar.json](./src/i18n/locales/ar.json)

### **المكونات الجاهزة:**
- 🎨 [LanguageSwitcher](./src/components/ui/LanguageSwitcher.tsx)
- 🔧 [useTranslation Hook](./src/hooks/useTranslation.ts)
- 🌍 [LanguageContext](./src/contexts/LanguageContext.tsx)

---

## 🔥 ميزات إضافية

### **البيانات من Database تأتي بالعربية/الإنجليزية تلقائياً:**

```tsx
import { useProjects } from '../hooks/usePortfolioData';

function Projects() {
  const { projects } = useProjects();

  // البيانات تأتي بالعربية أو الإنجليزية حسب اللغة المختارة!
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3> {/* عربي أو إنجليزي */}
        </div>
      ))}
    </div>
  );
}
```

### **RTL يطبق تلقائياً للعربية:**
لا تحتاج لأي إعدادات! كل شيء تلقائي.

---

**جاهز للانطلاق! 🚀**
