---
description: How to deploy the Next.js application to Vercel
---

# Deploying to Vercel

Vercel is the recommended platform for deploying Next.js applications. It offers automatic CI/CD and globally distributed infrastructure.

## Option 1: Git Integration (Recommended)

This is the most seamless way to deploy. Every push to your main branch will trigger a new deployment.

1. **Commit and Push your code** to a Git provider (GitHub, GitLab, or Bitbucket).
   ```powershell
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```
2. **Import your project to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Sign in with your Git provider.
   - Select the `cophil-web` repository.
3. **Configure Settings**:
   - Vercel will automatically detect **Next.js**.
   - Leave the default build commands and output directory as is.
   - Click **Deploy**.

## Option 2: Vercel CLI

If you prefer deploying directly from your terminal:

1. **Install Vercel CLI**:
   ```powershell
   npm i -g vercel
   ```
2. **Login**:
   ```powershell
   vercel login
   ```
3. **Deploy**:
   Run this command in the project root:
   ```powershell
   vercel
   ```
   Follow the prompts to link your project and deploy. To deploy to production, run:
   ```powershell
   vercel --prod
   ```

## Post-Deployment Checklist

- [ ] **Custom Domain**: Connect your domain in the Vercel Dashboard under **Settings > Domains**.
- [ ] **Environment Variables**: If you add any `.env` variables (e.g., for analytics or APIs), add them in **Settings > Environment Variables**.
- [ ] **Build Check**: Ensure `npm run build` passes locally before deploying to avoid build failures on the server.
