# موقع Firebase Static

هذا مشروع موقع ثابت تم نشره باستخدام Firebase Hosting.

## الروابط
- Firebase Hosting: https://mysite-860da.web.app
- نسخة GitHub Pages (إن وُجدت): https://ahmadnhan.github.io/demo-site/

## أوامر Git (أول مرة)
```
git remote add origin https://github.com/ahmadnhan/demo-site.git
git branch -M main
git push -u origin main
```
لاحقًا للدفع فقط:
```
git add .
git commit -m "Update"
git push
```

## الأوامر الأساسية Firebase
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
