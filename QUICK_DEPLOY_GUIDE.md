# Quick Deployment Guide

## 🚀 Ready to Deploy?

### Step 1: Build
```bash
npm run build
```

### Step 2: Deploy

#### For Vercel:
```bash
# Option 1: Vercel CLI
vercel

# Option 2: GitHub Integration
# Just push to GitHub and Vercel will auto-deploy
```

#### For cPanel:
1. Open cPanel File Manager
2. Go to `public_html`
3. Delete old files (backup first!)
4. Upload ALL files from the `build` folder
5. Make sure `.htaccess` is uploaded (enable "Show Hidden Files" if needed)

## ✅ What's Included in Build

Your `build` folder contains:
- `index.html` - Main app
- `.htaccess` - cPanel routing config
- `_redirects` - Vercel/Netlify routing config
- `404.html` - Fallback page
- `assets/` - JS & CSS files
- Images & static files

## 🧪 Test After Deployment

Test these URLs (both direct access AND refresh):
- `/services/blogs`
- `/services/ebooks`
- `/services/white-papers`
- `/services/linkedin-ghostwriting`
- `/company/about`
- `/company/writer-network`

**All should work without 404 errors!**

## 🔧 Troubleshooting

### Vercel - White Page?
1. Clear deployment cache in Vercel dashboard
2. Redeploy
3. Check browser console for errors

### cPanel - 404 Error?
1. Check if `.htaccess` file exists in `public_html`
2. Enable "Show Hidden Files" in File Manager
3. Verify `.htaccess` permissions are 644
4. Contact hosting support to enable mod_rewrite

## 📝 Important Files

- `vercel.json` - Vercel configuration
- `public/.htaccess` - cPanel configuration  
- `vite.config.ts` - Build configuration
- `DEPLOYMENT.md` - Full deployment guide
- `ROUTING_FIX_SUMMARY.md` - Technical details

## 🎯 What Was Fixed

✅ White pages on Vercel - FIXED  
✅ 404 errors on cPanel - FIXED  
✅ Service & company page routing - WORKING  
✅ All routes work on reload - WORKING  

## 💡 Quick Tips

- Always build before deploying: `npm run build`
- Test in incognito mode to avoid cache issues
- For cPanel: `.htaccess` MUST be in the root directory
- For Vercel: `vercel.json` handles everything automatically

## 📚 Need More Help?

See `DEPLOYMENT.md` for detailed instructions.
