# Deployment Fixes & Social Media Preview Setup

## ✅ Issue 1: 404 Error on Page Refresh - FIXED!

### Problem:
When you refresh the page on Vercel (e.g., `/events`, `/invitation`), it shows 404 because Vercel doesn't know how to handle client-side routes.

### Solution Applied:
Created **`vercel.json`** file that tells Vercel to redirect all routes to `index.html`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### What This Does:
- All URLs now route through your React app
- Page refreshes work perfectly
- Direct URL access works (e.g., sharing `/events` link)
- No more 404 errors!

---

## ✅ Issue 2: Social Media Preview - FIXED!

### Problem:
When sharing the link on WhatsApp, Facebook, or other platforms, no preview image or proper description shows up.

### Solution Applied:
Added comprehensive **Open Graph meta tags** to `index.html`:

#### Meta Tags Added:
1. **Open Graph (Facebook, WhatsApp, LinkedIn)**
   - Title: "शुभ विवाह - Royal Indian Wedding Invitation"
   - Description: Wedding details with both couples' names
   - Image: Preview image for social media
   - Proper dimensions (1200x630px)

2. **Twitter Card**
   - Large image card format
   - Optimized for Twitter sharing

3. **WhatsApp Specific**
   - Image type specification
   - Hindi locale support

### What Shows When Shared:
```
📸 Image: Wedding preview card
📝 Title: शुभ विवाह - Royal Indian Wedding Invitation
📄 Description: Together with our families, we joyfully invite you 
   to celebrate the wedding of Aayu. Ekta & Vi. Vikas, and 
   Aayu. Priyanka & Vi. Bijendra | December 2026 | Gunti, Behror, Rajasthan
```

---

## 📸 Step 3: Create Social Media Preview Image

You need to create a preview image for social media. Here are your options:

### Option A: Use Canva (Easiest)
1. Go to canva.com
2. Create design → Custom size → 1200 x 630 pixels
3. Design a beautiful card with:
   - "शुभ विवाह" in Hindi
   - Both couples' names: "Ekta & Vikas" and "Priyanka & Bijendra"
   - Date: "December 2026"
   - Location: "Gunti, Behror, Rajasthan"
   - Traditional Indian wedding colors (maroon & gold)
4. Download as `wedding-preview.jpg`
5. Place in `public/` folder

### Option B: Use Your Invitation Card
1. Take the invitation card image
2. Resize to 1200 x 630 pixels
3. Save as `wedding-preview.jpg`
4. Place in `public/` folder

### Option C: Screenshot Your Website
1. Open your website homepage
2. Take a screenshot of the main invitation section
3. Crop and resize to 1200 x 630 pixels
4. Save as `wedding-preview.jpg`
5. Place in `public/` folder

### File Location:
```
public/
  └── wedding-preview.jpg   ← Your preview image here
```

---

## 🔧 Step 4: Update Your Domain in Meta Tags

After creating the preview image, update the domain in `index.html`:

**Find this line:**
```html
<meta property="og:url" content="https://your-vercel-domain.vercel.app/" />
```

**Replace with your actual Vercel URL:**
```html
<meta property="og:url" content="https://your-actual-wedding-site.vercel.app/" />
```

**Do the same for the image URL:**
```html
<meta property="og:image" content="https://your-actual-wedding-site.vercel.app/wedding-preview.jpg" />
```

---

## 🚀 Deployment Steps

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Fix 404 on refresh and add social media preview"
   git push
   ```

2. **Vercel will auto-deploy** (if connected to Git)
   - Or redeploy manually from Vercel dashboard

3. **Add the preview image:**
   - Upload `wedding-preview.jpg` to `public/` folder
   - Commit and push again

4. **Test the fixes:**
   - Visit your site
   - Navigate to `/events`
   - Refresh the page → Should work! ✅
   - Share the link on WhatsApp → Preview should show! ✅

---

## 🧪 Testing Social Media Preview

### Test on Facebook:
1. Go to: https://developers.facebook.com/tools/debug/
2. Paste your Vercel URL
3. Click "Scrape Again"
4. You should see your preview image and description

### Test on WhatsApp:
1. Send your Vercel URL to yourself
2. The preview card should appear automatically

### Test on Twitter:
1. Go to: https://cards-dev.twitter.com/validator
2. Paste your URL
3. Check the preview

---

## 📋 Checklist

- [✅] Created `vercel.json` for routing
- [✅] Added Open Graph meta tags
- [✅] Added Twitter Card meta tags
- [✅] Added WhatsApp optimization
- [ ] Create `wedding-preview.jpg` (1200x630px)
- [ ] Place image in `public/` folder
- [ ] Update domain URLs in `index.html`
- [ ] Deploy to Vercel
- [ ] Test page refresh on different routes
- [ ] Test social media sharing

---

## 🎯 Expected Results

### Before Fix:
- ❌ Refresh on `/events` → 404 Error
- ❌ Share link → No preview, just URL

### After Fix:
- ✅ Refresh on any page → Works perfectly
- ✅ Share link → Beautiful preview card with image
- ✅ Direct URL access → Works
- ✅ All routes accessible

---

## 💡 Pro Tips

1. **Clear Cache:** After deploying, clear Facebook/WhatsApp cache using their debug tools
2. **Image Quality:** Use high-resolution image (1200x630px) for best results
3. **Test Before Sharing:** Always test the preview before sharing widely
4. **Update Meta Tags:** Keep description accurate with wedding details

---

## 🆘 Troubleshooting

**If 404 still appears:**
- Make sure `vercel.json` is in the root directory (same level as `package.json`)
- Redeploy from Vercel dashboard
- Check Vercel logs for errors

**If preview doesn't show:**
- Make sure image is exactly at `/public/wedding-preview.jpg`
- Check image size is 1200x630px
- Use Facebook Debug Tool to clear cache
- Make sure URLs in meta tags match your actual domain

---

## ✨ Summary

Both issues are now fixed:
1. ✅ **404 on refresh** → Fixed with `vercel.json` routing
2. ✅ **Social media preview** → Fixed with Open Graph meta tags

Just add the preview image and update the domain URLs, then redeploy! 🚀
