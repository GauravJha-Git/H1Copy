# Deployment Guide for H1Copy Website

## Vercel Deployment

This project is now configured for easy deployment on Vercel.

### Prerequisites
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings:**
   - Vercel will automatically detect this as a Vite project
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your project automatically

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure

- **Source files:** `src/` directory
- **Build output:** `build/` directory (created after running `npm run build`)
- **Configuration:** `vite.config.ts` for Vite settings
- **Deployment:** `vercel.json` for Vercel configuration

### Environment Variables

If you need environment variables:
1. Add them in your Vercel dashboard under Project Settings > Environment Variables
2. For local development, create a `.env.local` file (already in .gitignore)

### Custom Domain

After deployment, you can add a custom domain in your Vercel project settings.
