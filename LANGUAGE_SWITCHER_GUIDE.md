# 🌍 دليل استخدام Language Switcher

## 🎨 3 أنواع من مبدّل اللغة

الآن عندك **3 أنواع** من مبدل اللغة، اختر اللي يناسبك!

---

## 1️⃣ **Icon Variant** (الأيقونة - موصى به! 🌟)

### **الشكل:**
أيقونة Globe 🌐 + EN/AR

### **الاستخدام:**
```tsx
import LanguageSwitcher from './components/ui/LanguageSwitcher';

<LanguageSwitcher variant="icon" />
```

### **أين تستخدمه:**
✅ في الـ Navbar (جنب الروابط)
✅ في الـ Header
✅ في أي مكان تريد مظهر بسيط وأنيق

### **مثال كامل:**
```tsx
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ahmed Asaad</div>
      
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* ⭐ أيقونة تغيير اللغة */}
      <LanguageSwitcher variant="icon" />
    </nav>
  );
}
```

---

## 2️⃣ **Compact Variant** (مدمج)

### **الشكل:**
🇺🇸 EN ▼ (قائمة منسدلة بالأعلام)

### **الاستخدام:**
```tsx
<LanguageSwitcher variant="compact" />
```

### **أين تستخدمه:**
✅ في الـ Navbar
✅ في الـ Footer
✅ عندما تريد عرض العلم + الكود

---

## 3️⃣ **Full Variant** (أزرار كاملة)

### **الشكل:**
[🇺🇸 English] [🇪🇬 العربية] (زرين جنب بعض)

### **الاستخدام:**
```tsx
<LanguageSwitcher variant="full" />
```

### **أين تستخدمه:**
✅ في صفحة الإعدادات
✅ في صفحة منفصلة لاختيار اللغة
✅ عندما تريد أزرار واضحة وكبيرة

---

## 🎨 التخصيص

### **إضافة Custom Styling:**

```tsx
<LanguageSwitcher 
  variant="icon" 
  className="ml-4" 
/>
```

---

## 📸 صور توضيحية

### **Icon Variant:**
```
+------------------+
| 🌐 EN ▼         |
+------------------+
عند الضغط:
+------------------+
| 🇺🇸 English   ✓ |
| 🇪🇬 العربية     |
+------------------+
```

### **Compact Variant:**
```
+------------------+
| 🇺🇸 EN ▼        |
+------------------+
عند الضغط:
+----------------------+
| 🇺🇸 English        ✓ |
|    English           |
+----------------------+
| 🇪🇬 العربية          |
|    Arabic            |
+----------------------+
```

### **Full Variant:**
```
+-------------+  +-------------+
| 🇺🇸 English |  | 🇪🇬 العربية |
+-------------+  +-------------+
   (نشط)            (غير نشط)
```

---

## 🚀 أمثلة عملية

### **مثال 1: Navbar بسيط**

```tsx
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-xl font-bold">Ahmed Asaad</div>
      
      <div className="flex items-center gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        
        {/* أيقونة اللغة */}
        <LanguageSwitcher variant="icon" />
      </div>
    </nav>
  );
}
```

### **مثال 2: Navbar مع Dark Mode**

```tsx
function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <LanguageSwitcher variant="icon" />
      </div>
    </nav>
  );
}
```

### **مثال 3: Footer**

```tsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center">
        <p>© 2024 Ahmed Asaad</p>
        
        {/* مبدل اللغة في Footer */}
        <LanguageSwitcher variant="compact" />
      </div>
    </footer>
  );
}
```

---

## 🎯 الاختيار الأمثل

| المكان | النوع الموصى به |
|--------|-----------------|
| Navbar (Header) | `icon` ⭐ |
| Footer | `compact` |
| Settings Page | `full` |
| Sidebar | `compact` أو `icon` |
| Mobile Menu | `full` |

---

## 💡 نصائح

### **✅ Best Practices:**

1. **استخدم `icon` في Navbar** - أنظف وأبسط
2. **استخدم `full` في صفحة منفصلة** - أوضح للمستخدم
3. **استخدم `compact` في Footer** - يوفر مساحة

### **❌ تجنب:**

- استخدام أكثر من مبدل لغة في نفس الصفحة
- وضع المبدل في مكان غير واضح
- تغيير النوع في صفحات مختلفة (consistency مهم)

---

## 🔧 الميزات

### **كل الأنواع تدعم:**

✅ RTL تلقائي عند اختيار العربية
✅ حفظ اللغة في localStorage
✅ تحديث فوري للواجهة
✅ Keyboard accessible
✅ Dark mode support
✅ Responsive design

---

## 📦 الكود الكامل

```tsx
// في Navbar أو أي مكون
import LanguageSwitcher from './components/ui/LanguageSwitcher';

export default function MyComponent() {
  return (
    <div>
      {/* اختر النوع اللي تحبه */}
      
      {/* النوع 1: أيقونة (موصى به) */}
      <LanguageSwitcher variant="icon" />
      
      {/* النوع 2: مدمج */}
      <LanguageSwitcher variant="compact" />
      
      {/* النوع 3: أزرار كاملة */}
      <LanguageSwitcher variant="full" />
    </div>
  );
}
```

---

## 🎉 جاهز!

الآن عندك 3 خيارات احترافية لمبدل اللغة!

**الاختيار الموصى به للـ Navbar:**
```tsx
<LanguageSwitcher variant="icon" />
```

**🌐 EN** ← سيظهر بهذا الشكل مع أيقونة Globe جميلة!
