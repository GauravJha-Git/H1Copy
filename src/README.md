# H1Copy - SEO & Content Services Website

A modern, responsive website for H1Copy, showcasing SEO and content marketing services with stunning visual effects and smooth animations.

![H1Copy Website](https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODk5MjMwNHww&ixlib=rb-4.1.0&q=80&w=1200)

## ✨ Features

### 🎨 Modern Design
- **Gradient Color Scheme**: Cyan, violet, and pink gradients throughout
- **Glass Morphism Effects**: Translucent elements with backdrop blur
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Elements**: Hover effects and micro-interactions

### 🚀 Advanced Animations
- **Framer Motion Integration**: Smooth page transitions and element animations
- **Floating Particles**: Dynamic background animations
- **Scroll-triggered Animations**: Elements animate as they come into view
- **Interactive Hover States**: Enhanced user experience with visual feedback

### 📱 Sections
- **Hero Section**: Compelling headline with animated statistics and CTA buttons
- **About Us**: Company story and mission with animated counters
- **Services**: SEO, content marketing, and analytics services
- **Why Choose Us**: Key differentiators with animated icons
- **Companies & Reviews**: Client testimonials with auto-scrolling carousel
- **Contact**: Contact form with social media links

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4.0
- **Animations**: Framer Motion (motion/react)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Images**: Unsplash API integration
- **Forms**: React Hook Form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd h1copy-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── components/
│   ├── Hero.tsx           # Hero section with animated elements
│   ├── About.tsx          # About us section
│   ├── Services.tsx       # Services showcase
│   ├── WhyChooseUs.tsx    # Benefits and differentiators
│   ├── CompaniesAndReviews.tsx # Client testimonials
│   ├── Contact.tsx        # Contact form and information
│   ├── Navigation.tsx     # Main navigation component
│   ├── Footer.tsx         # Site footer
│   ├── BackgroundAnimation.tsx # Floating particles
│   ├── HeroBackgroundAnimation.tsx # Hero-specific animations
│   ├── figma/
│   │   └── ImageWithFallback.tsx # Image component with fallback
│   └── ui/                # shadcn/ui components
├── styles/
│   └── globals.css        # Global styles and CSS variables
├── guidelines/
│   └── Guidelines.md      # Project guidelines and standards
└── Attributions.md        # Third-party credits and attributions
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) to Violet (#8b5cf6) to Pink (#ec4899)
- **Background**: Light gradients from cyan/violet/pink tints
- **Text**: Gray scale from 600-900
- **Accents**: Emerald and teal for success states

### Typography
- **Headings**: System font stack with bold weights
- **Body**: Optimized for readability
- **Size Scale**: Responsive typography using Tailwind classes

### Animations
- **Entrance**: Staggered fade-in with upward motion
- **Hover**: Scale, shadow, and color transitions
- **Background**: Continuous floating particle effects
- **Scroll**: Progressive disclosure of content

## 🧩 Key Components

### Hero Section
- Animated headline with gradient text
- Statistics counters with motion effects
- Growth badge with floating animation
- Interactive CTA buttons
- Background particle system

### Services Grid
- Icon-based service cards
- Hover animations with scale effects
- Gradient borders and backgrounds
- Responsive grid layout

### Reviews Carousel
- Auto-scrolling testimonials
- Smooth infinite loop animation
- Company logos integration
- Responsive design

### Contact Form
- Form validation with React Hook Form
- Animated form fields
- Social media integration
- Success/error state handling

## 🎯 Customization

### Colors
Update the color scheme in `styles/globals.css`:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
  --background-light: #fafafa;
}
```

### Animations
Modify animation variants in individual components:
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
```

### Content
Update company information in respective component files:
- Hero quotes and headlines
- Service descriptions
- Company statistics
- Contact information

## 📸 Image Credits

Images are sourced from Unsplash API with proper attribution. See `Attributions.md` for detailed credits.

## 📄 License

This project is created for H1Copy. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions about this project, please contact the H1Copy team.

---

**Built with ❤️ for H1Copy - Dominating Search Results**