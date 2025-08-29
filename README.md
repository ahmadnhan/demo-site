# موقع Firebase Static

هذا مشروع موقع ثابت تم نشره باستخدام Firebase Hosting.

## الأوامر الأساسية

1. تثبيت أدوات Firebase (مرة واحدة):
```
npm install -g firebase-tools
```
2. تسجيل الدخول:
```
firebase login
```
3. تشغيل محلي:
```
firebase emulators:start --only hosting
```
4. نشر:
```
firebase deploy --only hosting
```

## هيكل المجلد
- public/ يحتوي ملفات الموقع (index.html وغيرها).
- firebase.json إعدادات الاستضافة.

## المساهمة
ارفع فروع جديدة ثم افتح Pull Request.
