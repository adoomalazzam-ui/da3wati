# 💍 دعوة زيد ونور | da3wati

منصة دعوات أفراح إلكترونية عربية فاخرة مبنية على Next.js 15.

---

## 🚀 تشغيل المشروع محلياً

### 1. ثبّت المتطلبات

```bash
node --version   # يجب أن يكون v18 أو أعلى
npm --version
```

### 2. ثبّت الحزم

```bash
npm install
```

### 3. أضف ملف البيئة

```bash
cp .env.example .env.local
# عدّل القيم في .env.local
```

### 4. شغّل المشروع

```bash
npm run dev
```

افتح المتصفح على: **http://localhost:3000**

---

## ☁️ رفع المشروع على Vercel (مجاني)

### الخطوة 1 — GitHub

1. افتح [github.com](https://github.com) وسجّل دخول
2. اضغط **New Repository**
3. اسمه: `da3wati`
4. ارفع الملفات:

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/YOUR_USERNAME/da3wati.git
git push -u origin main
```

### الخطوة 2 — Vercel

1. افتح [vercel.com](https://vercel.com)
2. سجّل دخول بحساب GitHub
3. اضغط **Add New → Project**
4. اختار `da3wati` من قائمة المشاريع
5. اضغط **Deploy** ✅

بعد دقيقتين يعطيك رابط مثل:
```
https://da3wati.vercel.app
```

---

## 🌐 إضافة دومين خاص (اختياري)

### شراء الدومين
- [Namecheap.com](https://namecheap.com) ← أرخص (~8$ / سنة)
- مثال: `da3wati.jo` أو `zaid-nour.com`

### ربطه بـ Vercel
1. افتح مشروعك على Vercel
2. اذهب إلى **Settings → Domains**
3. اكتب دومينك واضغط **Add**
4. انسخ الـ DNS Records اللي يعطيك إياها Vercel
5. الصقها في لوحة تحكم Namecheap تحت **Advanced DNS**
6. انتظر 10-30 دقيقة ✅

---

## 📁 هيكل المشروع

```
da3wati/
├── app/
│   ├── layout.tsx      ← metadata + fonts
│   ├── page.tsx        ← الصفحة الرئيسية
│   └── globals.css     ← الأنيميشن والألوان
├── components/
│   └── WeddingInvitation.tsx  ← الدعوة الكاملة
├── public/             ← صور وملفات ثابتة
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

---

## ✏️ كيف تغيّر بيانات الدعوة

افتح `components/WeddingInvitation.tsx`

```typescript
// غيّر التاريخ هنا
const WEDDING_DATE = new Date("2026-05-28T20:00:00");

// غيّر رابط الموقع هنا
const MAPS_URL = "https://maps.app.goo.gl/...";
```

---

## 🛠️ Commands

```bash
npm run dev      # تشغيل محلي
npm run build    # بناء للإنتاج
npm run start    # تشغيل نسخة الإنتاج
npm run lint     # فحص الكود
```

---

**بالرفاه والبنين** 💛
