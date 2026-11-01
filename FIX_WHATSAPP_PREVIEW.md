# Fix WhatsApp/Social Media Link Preview

## 🔍 Problem
When sharing your website link, it shows only plain URL without preview card (no image, no description, no title).

## 🎯 Root Cause
Social media platforms (WhatsApp, Facebook, LinkedIn) need:
1. An actual image file to display
2. Time to "scrape" and cache your website's meta tags
3. The meta tags to be properly configured

## ✅ IMMEDIATE FIX - 3 Steps

### Step 1: Update Your Domain in index.html

Open `index.html` and replace ALL instances of:
```
https://your-vercel-domain.vercel.app/
```

With your ACTUAL Vercel URL, for example:
```
https://wedding-invitation-abc123.vercel.app/
```

**Find and replace in 4 places:**
- `<meta property="og:image" content="..."`
- `<meta property="og:image:secure_url" content="..."`
- `<meta property="og:url" content="..."`
- `<meta name="twitter:image" content="..."`

### Step 2: Commit and Deploy
```bash
git add .
git commit -m "Fix social media preview"
git push
```

Wait 2-3 minutes for Vercel to deploy.

### Step 3: Force WhatsApp to Refresh

**Option A - Using Facebook Debugger (BEST METHOD):**
1. Go to: https://developers.facebook.com/tools/debug/
2. Paste your Vercel URL
3. Click "Scrape Again" button
4. You should see the preview
5. Now share on WhatsApp - it will work!

**Option B - Wait 24 Hours:**
- WhatsApp caches URLs for 24 hours
- After deployment, wait 1 day
- The preview will appear automatically

**Option C - Add Query Parameter:**
- When sharing, add `?v=1` to the end of URL
- Example: `https://your-site.vercel.app/?v=1`
- This tricks WhatsApp into treating it as a "new" URL
- Next time, use `?v=2`, then `?v=3`, etc.

---

## 📱 What Will Show When Shared

With current configuration (using favicon as image):

```
┌─────────────────────────────────┐
│  [Om Symbol Icon]                │
│                                  │
│  🕉️ शुभ विवाह - Wedding        │
│  Invitation                      │
│                                  │
│  Together with our families,     │
│  we joyfully invite you to       │
│  celebrate:                      │
│                                  │
│  👰 Aayu. Ekta & Vi. Vikas      │
│  👰 Aayu. Priyanka & Vi.        │
│  Bijendra                        │
│                                  │
│  📅 December 2026               │
│  📍 Dr HP Jaivik Khad Pvt Ltd   │
│  📞 +91 7742657900              │
│                                  │
│  your-site.vercel.app            │
└─────────────────────────────────┘
```

---

## 🎨 Optional: Add Custom Preview Image (Better Result)

For a more impressive preview with a larger custom image:

### Quick Method - Screenshot Your Website
1. Open your deployed website homepage
2. Take a screenshot (Windows: Win+Shift+S, Mac: Cmd+Shift+4)
3. Open in any image editor (Paint, Preview, Photoshop)
4. Crop to show the "शुभ विवाह" section nicely
5. Resize to **1200 x 630 pixels** exactly
6. Save as `wedding-preview.jpg`
7. Place in `public/` folder

### Then Update index.html:
Change the image URLs from:
```html
<meta property="og:image" content="https://your-site.vercel.app/favicon.svg" />
```

To:
```html
<meta property="og:image" content="https://your-site.vercel.app/wedding-preview.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

Then deploy again and use Facebook Debugger to refresh.

---

## 🧪 Testing Your Preview

### Test on Facebook:
1. Go to: https://developers.facebook.com/tools/debug/
2. Paste your URL
3. Click "Scrape Again"
4. You should see:
   - ✅ Image (icon or custom image)
   - ✅ Title with emojis
   - ✅ Full description with names and details

### Test on WhatsApp:
1. Open WhatsApp Web or Mobile
2. Send your URL to yourself or a test group
3. Wait 5-10 seconds
4. Preview card should appear

### Test on LinkedIn:
1. Go to: https://www.linkedin.com/post-inspector/
2. Paste your URL
3. Check the preview

---

## 🔧 Troubleshooting

### Preview Still Not Showing?

**Check 1: Is your site actually deployed?**
- Visit your Vercel URL directly
- Make sure it loads correctly

**Check 2: Did you update the domain?**
- Open `index.html`
- Search for "your-vercel-domain"
- Replace with your actual URL

**Check 3: Clear Facebook cache**
- Use Facebook Debugger
- Click "Scrape Again" multiple times
- Wait 1 minute between attempts

**Check 4: Try with query parameter**
```
https://your-site.vercel.app/?preview=1
```

**Check 5: Wait 24 hours**
- WhatsApp caches aggressively
- After fixing, wait 1 day for cache to expire

### Shows Old/Wrong Preview?

**Solution:**
1. Make changes to meta tags
2. Deploy
3. Go to Facebook Debugger
4. Click "Scrape Again" 3-4 times
5. Wait 5 minutes
6. Try sharing again with `?v=2` added

---

## 📋 Current Configuration

Your `index.html` now has:

✅ **Rich Description with:**
- Wedding title in Hindi
- Both couples' names with emojis
- Date and location
- Contact numbers
- Hindi blessing

✅ **Image:**
- Currently using favicon (Om symbol)
- Shows as icon in preview
- Works immediately without extra files

✅ **Proper Meta Tags:**
- Open Graph for Facebook/WhatsApp
- Twitter Cards
- Full descriptions
- Emoji support

---

## ⚡ Quick Test Right Now

1. **Deploy your current code:**
   ```bash
   git add .
   git commit -m "Update meta tags"
   git push
   ```

2. **Wait 2 minutes**

3. **Test with Facebook Debugger:**
   - https://developers.facebook.com/tools/debug/
   - Paste your URL
   - Click "Scrape Again"

4. **Check the preview shows:**
   - ✅ Om symbol icon
   - ✅ Title: "🕉️ शुभ विवाह - Wedding Invitation"
   - ✅ Description with both couples' names
   - ✅ Date, location, contact info

5. **Share on WhatsApp:**
   - Should now show preview!
   - If not, add `?v=1` to URL

---

## 💡 Pro Tips

1. **Always use Facebook Debugger first** - It forces immediate cache refresh
2. **Test before sharing widely** - Send to yourself first
3. **Use query parameters for testing** - `?v=1`, `?v=2`, etc.
4. **Custom image = better engagement** - Consider adding one later
5. **Wait 24h for full propagation** - Especially for WhatsApp

---

## 🎯 Expected Results

### Before Fix:
```
❌ Share link on WhatsApp
❌ Shows: https://your-site.vercel.app
❌ No preview, no image, no description
```

### After Fix:
```
✅ Share link on WhatsApp
✅ Shows: Preview card with:
   🕉️ Icon/Image
   📝 शुभ विवाह - Wedding Invitation
   💑 Both couples' names
   📅 December 2026
   📍 Location & contact
✅ Looks professional and inviting!
```

---

## 🚀 DO THIS NOW

1. Update domain in `index.html` (replace "your-vercel-domain")
2. Deploy (`git push`)
3. Use Facebook Debugger to refresh cache
4. Test on WhatsApp
5. Done! ✅

The preview will now show properly when you share the link! 🎉
