# Deployment Guide - Vercel & cPanel

This guide provides instructions for deploying your React SPA to Vercel and cPanel without 404 errors on page reload.

## Build the Project

```bash
npm run build
```

This creates a `build` folder with:
- `index.html` - Main HTML file
- `.htaccess` - Apache configuration for cPanel
- `_redirects` - Netlify/Vercel redirects
- `404.html` - Fallback page
- `assets/` - JavaScript and CSS files
- Images and other static assets

## Deployment Instructions

### 1. Vercel Deployment

**Option A: Deploy via Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B: Deploy via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `build`
5. Deploy

**Configuration:**
- ✅ `vercel.json` is already configured with correct output directory
- ✅ Output directory set to `build` (not `dist`)
- ✅ Handles SPA routing automatically
- ✅ Rewrites all routes to `/index.html`

### 2. cPanel Deployment

**Steps:**
1. Build the project locally: `npm run build`
2. Open cPanel File Manager
3. Navigate to `public_html` (or your domain's root directory)
4. Delete all existing files (backup first!)
5. Upload all files from the `build` folder
6. Ensure `.htaccess` file is uploaded and visible
7. If `.htaccess` is not visible, enable "Show Hidden Files" in File Manager settings

**Important for cPanel:**
- ✅ `.htaccess` file MUST be in the root directory
- ✅ Apache `mod_rewrite` must be enabled (usually enabled by default)
- ✅ The `.htaccess` file handles SPA routing

**Troubleshooting cPanel:**
- If you still get 404 errors, check if `.htaccess` file exists
- Ensure `mod_rewrite` is enabled (contact hosting support if needed)
- Check file permissions: `.htaccess` should be 644
- Clear browser cache after deployment

## Testing Routes

After deployment, test these URLs by:
1. **Direct access:** Type the URL in browser address bar
2. **Page refresh:** Press F5 or Ctrl+R on the page

Test URLs:
- `/` (home page)
- `/services/blogs`
- `/services/ebooks`
- `/services/white-papers`
- `/services/linkedin-ghostwriting`
- `/company/about`
- `/company/writer-network`
- `/methodology`
- `/blog`

All routes should work on both direct access and page refresh.

## How It Works

### Vercel:
- Uses `vercel.json` to rewrite all routes to `/index.html`
- React Router handles the client-side routing
- No additional configuration needed

### cPanel (Apache):
- Uses `.htaccess` file with mod_rewrite rules
- Redirects all requests to `/index.html` if file doesn't exist
- React Router handles the client-side routing

## Common Issues

### White page on Vercel:
- Clear deployment cache and redeploy
- Check browser console for JavaScript errors
- Ensure `vercel.json` is in the project root

### 404 on cPanel:
- Ensure `.htaccess` file is uploaded
- Check if mod_rewrite is enabled
- Verify file permissions (644 for .htaccess)
- Check Apache error logs in cPanel

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Test in incognito/private browsing mode
4. Contact your hosting provider for server configuration support