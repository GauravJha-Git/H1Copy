# Deployment Guide - Universal SPA Routing Configuration

This guide ensures your React SPA works correctly across different hosting platforms without 404 errors on page reload.

## Platform-Specific Configuration

### 1. Vercel
- Uses `vercel.json` (already configured)
- Automatically handles SPA routing with the rewrites configuration

### 2. Netlify
- Uses `public/_redirects` file (already created)
- Deploy the `build` folder contents to Netlify

### 3. Firebase Hosting
- Uses `firebase.json` (already created)
- Run: `firebase deploy`

### 4. Apache Servers
- Uses `public/.htaccess` file (already created)
- Upload `build` folder contents to your Apache server

### 5. Nginx Servers
- Use the provided `nginx.conf` configuration
- Copy the configuration to your Nginx server config

### 6. GitHub Pages
- Add `public/404.html` file with the same content as `index.html`
- Or use HashRouter instead of BrowserRouter for better compatibility

## Build and Deploy Commands

```bash
# Build the project
npm run build

# The build output will be in the 'build' folder
# Upload the contents of the 'build' folder to your hosting platform
```

## Testing Routes

After deployment, test these routes to ensure they work:
- `/` (home)
- `/services/blogs`
- `/services/ebooks`
- `/services/white-papers`
- `/services/linkedin-ghostwriting`
- `/company/about`
- `/company/writer-network`
- `/methodology`
- `/blog`

All routes should work on direct access and page reload.

## Troubleshooting

If you still get 404 errors:
1. Ensure your hosting platform supports URL rewriting
2. Check that the configuration files are in the correct locations
3. Verify that the build output is deployed correctly
4. Clear browser cache and test in incognito mode