# 🚨 QUICK FIX - WhatsApp Link Preview

## The Problem:
Sharing your wedding website link shows **only plain URL** with no preview.

## The Solution (5 minutes):

### ✅ Step 1: Update Your Domain (2 mins)

Open `index.html` and find this line (appears 4 times):
```html
https://your-vercel-domain.vercel.app/
```

Replace with YOUR actual Vercel URL. For example:
```html
https://wedding-invitation-123abc.vercel.app/
```

**Where to find your Vercel URL:**
- Go to vercel.com
- Open your project
- Copy the URL from "Domains" section

### ✅ Step 2: Deploy (1 min)

```bash
git add .
git commit -m "Fix preview"
git push
```

Wait 2 minutes for deployment.

### ✅ Step 3: Force Refresh (2 mins)

**Method 1 - Facebook Debugger (FASTEST):**
1. Open: https://developers.facebook.com/tools/debug/
2. Paste your Vercel URL
3. Click "Scrape Again" button
4. You should see the preview appear!
5. Now share on WhatsApp - it will work!

**Method 2 - Add Query String:**
When sharing, add `?v=1` to the end:
```
https://your-site.vercel.app/?v=1
```

This tricks WhatsApp into seeing it as a "new" URL.

---

## ✨ What Will Show:

When you share the link, people will see:

```
┌────────────────────────────┐
│  🕉️                         │
│  शुभ विवाह                 │
│  Wedding Invitation        │
│                            │
│  👰 Aayu. Ekta & Vi. Vikas│
│  👰 Priyanka & Bijendra   │
│                            │
│  📅 December 2026         │
│  📍 Gunti, Bahroi         │
│  📞 +91 7742657900        │
│                            │
│  your-site.vercel.app      │
└────────────────────────────┘
```

---

## 🔥 DO THIS RIGHT NOW:

1. ✅ Open `index.html`
2. ✅ Replace `your-vercel-domain` with your actual URL (4 places)
3. ✅ Save file
4. ✅ Run: `git add . && git commit -m "fix preview" && git push`
5. ✅ Wait 2 minutes
6. ✅ Go to Facebook Debugger: https://developers.facebook.com/tools/debug/
7. ✅ Paste your URL and click "Scrape Again"
8. ✅ Test on WhatsApp

**That's it! Your preview will now show! 🎉**

---

## Still Not Working?

Try sharing with query parameter:
```
https://your-site.vercel.app/?v=1
```

Or wait 24 hours for WhatsApp cache to clear automatically.

---

## Need Custom Image?

Current setup uses your site icon (Om symbol). This works fine!

Want a bigger custom image? Just:
1. Screenshot your homepage
2. Resize to 1200 x 630 px
3. Save as `wedding-preview.jpg` in `public/` folder
4. Update meta tags to use it
5. Deploy again

But the current setup should work perfectly for WhatsApp sharing!
