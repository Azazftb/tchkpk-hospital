# TCHKPK Hospital Website - Deployment Guide

This guide provides step-by-step instructions for deploying the TCHKPK Hospital website to GitHub Pages with a custom domain.

## 📋 Prerequisites

Before starting deployment, ensure you have:
- GitHub account
- Git installed on your computer
- Node.js 18+ installed
- Your custom domain (optional)

## 🚀 Quick Start Deployment

### 1. Prepare Your Repository

```bash
# Navigate to your project directory
cd tchkpk-hospital

# Initialize git repository if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial TCHKPK Hospital website"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/tchkpk-hospital.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. **Go to your GitHub repository**
2. **Click on "Settings" tab**
3. **Scroll down to "Pages" section**
4. **Set Source to "GitHub Actions"**
5. **Save the settings**

### 3. Automatic Deployment

The website will automatically deploy when you push to the main branch. The deployment process:

1. **Triggers**: On every push to main branch
2. **Builds**: Creates production-ready static files
3. **Deploys**: Uploads to GitHub Pages
4. **URL**: Available at `https://YOUR_USERNAME.github.io/tchkpk-hospital`

## 🌐 Custom Domain Setup

### Option 1: Using GitHub Pages Custom Domain

1. **Add CNAME file**:
   ```bash
   # Create CNAME file in public directory
   echo "yourdomain.com" > public/CNAME
   ```

2. **Update next.config.ts**:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
     // Remove these for custom domain:
     // assetPrefix: process.env.NODE_ENV === 'production' ? '/tchkpk-hospital' : '',
     // basePath: process.env.NODE_ENV === 'production' ? '/tchkpk-hospital' : '',
   };

   export default nextConfig;
   ```

3. **Configure DNS**:
   - **A Records**: Point to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME Record**: Point www subdomain to your GitHub Pages URL

4. **Configure in GitHub**:
   - Go to Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

### Option 2: Using Cloudflare (Recommended)

1. **Add domain to Cloudflare**
2. **Update nameservers** at your domain registrar
3. **Add DNS records**:
   - CNAME: `www` → `YOUR_USERNAME.github.io`
   - CNAME: `@` → `YOUR_USERNAME.github.io`
4. **Enable Cloudflare features**:
   - SSL/TLS: Full (strict)
   - Always Use HTTPS: On
   - Auto Minify: CSS, HTML, JS
   - Brotli Compression: On

## 📧 Formspree Configuration

### 1. Create Formspree Account

1. **Visit**: [formspree.io](https://formspree.io)
2. **Sign up** for free account
3. **Verify** your email address

### 2. Create Forms

**Contact Form**:
1. Create new form named "Contact Form"
2. Copy the form ID (e.g., `mbjqgjqb`)
3. Update `src/app/contact/page.tsx` line ~28:
   ```javascript
   const response = await fetch("https://formspree.io/f/mbjqgjqb", {
   ```

**Appointment Form**:
1. Create new form named "Appointment Booking"
2. Copy the form ID (e.g., `mvgpwjkl`)
3. Update `src/app/appointments/page.tsx` line ~46:
   ```javascript
   const response = await fetch("https://formspree.io/f/mvgpwjkl", {
   ```

### 3. Form Settings

Configure each form with:
- **Email notifications**: info@tchkpk.com
- **Autoresponder**: Enable with thank you message
- **Spam filtering**: Enable reCAPTCHA
- **Field validation**: Enable required fields

## 🛠 Manual Deployment Process

If you prefer manual deployment:

### 1. Build the Site

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### 2. Deploy Files

The `out` folder contains your static website. Upload contents to:
- **GitHub Pages**: Handled automatically by GitHub Actions
- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect GitHub repository
- **Any web host**: Upload via FTP/SFTP

## 🔧 Environment Configuration

### Development Environment

```bash
# Run locally
npm run dev

# Open browser
http://localhost:3000
```

### Production Environment

```bash
# Build for production
npm run build

# Preview production build locally
npm run start
```

## 📱 Testing Before Deployment

### 1. Local Testing

```bash
# Test development build
npm run dev

# Test production build
npm run build && npm run start
```

### 2. Mobile Testing

- **Chrome DevTools**: Test responsive design
- **Real devices**: Test on actual phones/tablets
- **Browser testing**: Chrome, Firefox, Safari, Edge

### 3. Performance Testing

- **Lighthouse**: Check performance, accessibility, SEO
- **PageSpeed Insights**: Google's performance tool
- **GTmetrix**: Comprehensive performance analysis

## 🚨 Troubleshooting

### Common Issues

**1. Build Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**2. Deployment Not Updating**
- Check GitHub Actions logs
- Clear browser cache
- Wait for DNS propagation (up to 48 hours)

**3. Forms Not Working**
- Verify Formspree form IDs
- Check browser console for errors
- Test form submission directly on Formspree

**4. Custom Domain Issues**
- Verify DNS settings
- Check CNAME file in public directory
- Ensure GitHub Pages custom domain is set

### GitHub Actions Debug

Check deployment status:
1. Go to your repository
2. Click "Actions" tab
3. View latest workflow run
4. Check for error messages

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Create GA4 property**
2. **Add tracking code** to `src/app/layout.tsx`:
   ```typescript
   import Script from 'next/script'

   // Add before closing </head>
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

## 🔒 Security Considerations

### SSL Certificate
- **GitHub Pages**: Automatic HTTPS
- **Custom Domain**: Enable "Enforce HTTPS" in settings
- **Cloudflare**: Full (strict) SSL mode

### Form Security
- **Formspree**: Built-in spam protection
- **reCAPTCHA**: Enable for additional security
- **Rate limiting**: Formspree handles automatically

## 📈 SEO Optimization

### Meta Tags
Already configured in `src/app/layout.tsx`:
- Title tags
- Meta descriptions
- Keywords
- OpenGraph tags

### Sitemap
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/appointments/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## 📞 Support

For deployment issues:
1. Check this guide first
2. Review GitHub Actions logs
3. Check DNS propagation
4. Contact technical support

---

**Successfully deploy TCHKPK Hospital website and serve your community online! 🏥**