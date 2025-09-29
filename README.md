# TCHKPK Hospital Website

A professional, mobile-friendly hospital website built with Next.js, Tailwind CSS, and Shadcn/UI for TCHKPK Hospital in Timergara, KPK, Pakistan.

## 🏥 About

TCHKPK Hospital website provides:
- **Professional healthcare presentation** with modern, trustworthy design
- **Mobile-responsive layout** for all devices (PC, tablet, mobile)
- **Complete hospital information** including services, contact details, and appointments
- **Formspree integration** for contact and appointment forms
- **Dark mode support** with theme toggle
- **Static site generation** for fast loading and easy deployment

## 🚀 Features

### Pages
- **Homepage**: Hero section, services preview, testimonials, FAQ
- **Services**: Comprehensive medical services with detailed descriptions
- **About**: Hospital vision, mission, values, and team information
- **Contact**: Contact form, location map, and emergency information
- **Appointments**: Online booking form with service selection

### Design Features
- Modern, clean hospital-appropriate design
- Mobile-first responsive layout
- Accessibility-focused with proper contrast and typography
- Dark/light mode toggle
- Professional color scheme (primary blue #0c3c78)
- Smooth animations and transitions

### Technical Features
- Built with Next.js 15 (latest)
- Styled with Tailwind CSS
- UI components from Shadcn/UI
- HeroIcons for consistent iconography
- Static site export for GitHub Pages
- TypeScript for type safety
- SEO optimized

## 🛠 Tech Stack

- **Framework**: Next.js 15 (latest)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: HeroIcons
- **Forms**: Formspree integration
- **Theme**: Next-themes for dark mode
- **Deployment**: GitHub Pages (static export)
- **Language**: TypeScript

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tchkpk-hospital.git
cd tchkpk-hospital
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in development mode.

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## 📧 Form Configuration

### Formspree Setup

1. **Create Formspree Account**: Go to [formspree.io](https://formspree.io) and create an account
2. **Create Forms**: Create two forms:
   - Contact form
   - Appointment booking form
3. **Get Form IDs**: Copy the form IDs from your Formspree dashboard
4. **Update Code**: Replace placeholder form IDs in:
   - `src/app/contact/page.tsx` (line ~28)
   - `src/app/appointments/page.tsx` (line ~46)

Replace `YOUR_FORM_ID` and `YOUR_APPOINTMENT_FORM_ID` with your actual Formspree form IDs.

### Form Integration Example

```javascript
// In contact/page.tsx and appointments/page.tsx
const response = await fetch("https://formspree.io/f/YOUR_ACTUAL_FORM_ID", {
  method: "POST",
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
})
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project includes GitHub Actions for automatic deployment:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select "GitHub Actions" as source
3. **Automatic Deploy**: Every push to main branch triggers deployment

### Manual Deployment

```bash
# Build the static site
npm run build

# The 'out' folder contains your static site
# Upload the contents of 'out' folder to your web server
```

### Custom Domain Setup

1. **Add CNAME file**: Create `public/CNAME` with your domain
2. **Configure DNS**: Point your domain to GitHub Pages
3. **Update next.config.ts**: Remove basePath for custom domain

```typescript
// For custom domain, update next.config.ts:
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove these lines for custom domain:
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/tchkpk-hospital' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/tchkpk-hospital' : '',
};
```

## 🎨 Customization

### Hospital Information

Update hospital details in:
- `src/app/layout.tsx` - Meta information
- `src/components/navbar.tsx` - Hospital name
- `src/components/footer.tsx` - Contact information
- All page files - Replace contact details

### Branding Colors

The primary hospital color (#0c3c78) is defined in:
- `tailwind.config.ts` - Primary color configuration
- `src/app/globals.css` - CSS custom properties

### Content Updates

- **Services**: Edit `src/app/services/page.tsx`
- **About Page**: Update `src/app/about/page.tsx`
- **Homepage**: Modify `src/app/page.tsx`
- **Contact**: Update `src/app/contact/page.tsx`

## 📱 Mobile Responsiveness

The website is built mobile-first with responsive design:
- Collapsible navigation menu for mobile
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized images and loading

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Build static export
npm run deploy   # Build and prepare for deployment
```

## 📞 Contact Information

**TCHKPK Hospital**
- **Location**: Timergara, KPK, Pakistan
- **Phone**: +92 348 9117057
- **Email**: info@tchkpk.com
- **Emergency**: 24/7 available

## 📄 License

This project is created for TCHKPK Hospital. All rights reserved.

## 🤝 Support

For technical support or questions about the website:
1. Check this README for common solutions
2. Review the code documentation
3. Contact the development team

---

**Built with ❤️ for TCHKPK Hospital - Caring for Your Family's Health, Right Here in Timergara**
