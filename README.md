# Shopify Editions Winter 2026 🛍️

A high-performance, production-ready marketing SPA showcasing the latest innovations from Shopify Editions Winter 2026. Built with Next.js 14, React Server Components, Tailwind CSS, GSAP animations, and Three.js WebGL effects.

![Next.js](https://img.shields.io/badge/Next.js-15.5+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Design & UX
- **Glassmorphism UI**: Modern glass-effect cards with backdrop blur
- **Fluid WebGL Background**: Interactive Three.js fluid simulation in hero section
- **Smooth Scrolling**: Lenis-powered smooth scroll with 1.2s easing
- **Scroll Spy Navigation**: Auto-updating sticky navigation
- **Card Spotlight Effect**: Mouse-tracking gradient spotlight on hover
- **Typewriter Animation**: Cycling AI prompts with typewriter effect
- **Staggered Reveals**: GSAP-powered scroll-triggered animations

### 🚀 Performance
- **Lighthouse Score**: Optimized for 90+ (Desktop), 80+ (Mobile)
- **React Server Components**: Static content pre-rendered on the server
- **Dynamic Imports**: Below-fold components loaded on demand
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Size**: ~212KB initial load (under 200KB gzipped)
- **Code Splitting**: Automatic route-based splitting

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support with focus-visible states
- **ARIA Labels**: Proper semantic HTML and ARIA attributes
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Color Contrast**: 4.5:1 minimum contrast ratio compliance
- **Screen Reader**: Descriptive labels and alt text

### 🎯 Interactive Features
- **Search Modal**: ⌘K shortcut with FlexSearch integration
- **Video Modal**: Full-screen video playback
- **Feature Cards**: Three size variants (small, wide, large)
- **Bento Grid**: Responsive 4-column grid layout
- **Chapter Sections**: Pinned chapter titles on scroll
- **Analytics Tracking**: Event tracking for interactions

### 🛠️ Tech Stack

#### Core Framework
- **Next.js 15.5+**: App Router with React Server Components
- **React 19.0+**: Latest React features
- **TypeScript 5.3+**: Strict type checking

#### Styling
- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **Custom Design System**: Brand colors, typography, spacing tokens

#### Animation & 3D
- **GSAP 3.12+**: Professional-grade animations with ScrollTrigger
- **Lenis 1.0+**: Smooth scroll library
- **Three.js r160+**: WebGL fluid simulation with custom shaders

#### CMS & Data
- **Sanity.io v3**: Headless CMS with GROQ queries
- **next-sanity 9.0+**: Next.js integration for Sanity

#### State & Search
- **Zustand 4.4+**: Lightweight state management
- **FlexSearch 0.7+**: Fast full-text search

#### UI Components
- **Radix UI**: Accessible dialog primitives
- **CVA**: Class variance authority for component variants

#### Development
- **ESLint**: Code linting with Next.js config
- **PostCSS**: CSS processing with Autoprefixer

## 📁 Project Structure

```
shopify-editions-winter26/
├── app/
│   ├── components/
│   │   ├── layout/           # GlobalHeader, StickyNav, Footer
│   │   ├── hero/             # HeroSection, WebGLFluid, TypewriterPrompt
│   │   ├── chapters/         # ChapterWrapper, ChapterTitle, FeatureGrid
│   │   ├── cards/            # FeatureCard variants, CardBadge, CardSpotlight
│   │   ├── ui/               # Button, VideoModal, SearchModal
│   │   └── primitives/       # GlassContainer, RevealOnScroll, VideoPlayer
│   ├── lib/
│   │   ├── sanity.client.ts  # Sanity client configuration
│   │   ├── sanity.queries.ts # GROQ queries
│   │   ├── sanity.types.ts   # TypeScript interfaces
│   │   ├── search.ts         # FlexSearch implementation
│   │   ├── analytics.ts      # Event tracking utilities
│   │   ├── utils.ts          # Helper functions
│   │   └── constants.ts      # App constants
│   ├── hooks/                # Custom React hooks
│   ├── store/                # Zustand state management
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Main page component
│   └── globals.css           # Global styles
├── sanity/
│   ├── schemas/              # edition, chapter, feature schemas
│   ├── lib/                  # Sanity utilities
│   ├── schema.ts             # Schema definitions
│   └── sanity.config.ts      # Sanity Studio config
├── animations/
│   ├── gsap.config.ts        # GSAP setup
│   ├── scroll-animations.ts  # Scroll-triggered animations
│   ├── hero-reveal.ts        # Hero animations
│   ├── card-reveal.ts        # Card animations
│   └── smooth-scroll.ts      # Lenis integration
├── three/
│   ├── FluidSimulation.ts    # WebGL fluid class
│   ├── shaders/              # GLSL shaders (vertex, fragment)
│   └── utils/                # Three.js utilities
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind design tokens
└── vercel.json               # Deployment config
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Sanity Account**: For CMS (optional for demo)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akd98-byte/shopify-editions-winter26.git
   cd shopify-editions-winter26
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   NEXT_PUBLIC_SEGMENT_WRITE_KEY=your_segment_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Color Palette

```typescript
colors: {
  'bg-primary': '#0A0A0A',      // Primary background
  'bg-secondary': '#141414',    // Secondary background
  'text-primary': '#F1F0EB',    // Primary text
  'text-muted': '#999999',      // Muted text
  'accent-ai': '#7B61FF',       // AI accent (purple)
  'accent-gold': '#D4AF37',     // Gold accent
  'border-subtle': 'rgba(255,255,255,0.1)', // Subtle borders
  'overlay-glass': 'rgba(20,20,20,0.6)',    // Glass overlay
}
```

### Typography

- **Primary**: Inter Tight (400, 600, 700, 800)
- **Secondary**: Instrument Serif (Italic 400)
- **Monospace**: JetBrains Mono (400, 500)

### Spacing & Layout

- **Base Unit**: 4px
- **Container Max Width**: 1600px
- **Grid Gaps**: 24px (desktop), 16px (mobile)
- **Border Radius**: 24px (cards), 999px (buttons)

## 📊 Performance Benchmarks

### Build Metrics
- **Initial Load JS**: ~87KB (shared chunks)
- **Page Size**: ~212KB
- **Gzipped**: <200KB ✅
- **Static Pages**: Pre-rendered

### Lighthouse Targets
- **Performance**: 90+ (Desktop), 80+ (Mobile)
- **First Contentful Paint**: <1.2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: 0

## 🔧 Configuration

### Tailwind Config

Customize design tokens in `tailwind.config.ts`:
- Colors
- Typography scale
- Spacing system
- Border radius
- Animations

### Next.js Config

Image domains and headers in `next.config.js`:
- Sanity CDN configuration
- Font caching headers
- Image optimization settings

### Vercel Deployment

Optimized caching headers in `vercel.json`:
- Static asset caching
- Font caching
- Image caching

## 📦 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy

3. **Environment Variables**
   Add these in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SEGMENT_WRITE_KEY`

### Manual Build

```bash
npm run build
npm run start
```

## 🗂️ Sanity CMS Setup

### Schema Structure

**Edition**
- Title, slug, theme color
- Hero video and title lines
- Chapter references
- Published date

**Chapter**
- Title, slug, description
- Order, accent color
- Feature references

**Feature**
- Title, slug, badge (new/update/beta)
- Description, thumbnail, media
- Grid size (small/wide/large)
- Links, order

### Sample Content

The app includes mock data in `app/page.tsx` for demonstration. Connect to Sanity CMS for dynamic content management.

## 🎯 Key Features Explained

### WebGL Fluid Simulation

Uses Three.js with custom GLSL shaders for real-time fluid effects:
- Simplex noise-based flow
- Mouse interaction with lerp smoothing
- Fallback to CSS gradient for reduced motion

### Smooth Scrolling

Lenis library provides buttery-smooth scrolling:
- 1.2s duration with custom easing
- Scroll-to navigation
- Performance-optimized RAF loop

### GSAP Animations

Professional animations with ScrollTrigger:
- Hero text staggered reveal (0.15s delay)
- Card reveals with fade + translateY
- Chapter title pinning
- Scroll-based triggers

### Search Functionality

FlexSearch integration:
- Full-text search across features
- ⌘K keyboard shortcut
- Instant results
- Analytics tracking

## 🔐 Security

- **Environment Variables**: Secrets in `.env.local`
- **API Routes**: Server-side only
- **CSP Headers**: Content Security Policy (recommended)
- **Input Validation**: Sanitized user inputs

## 🐛 Troubleshooting

### Build Errors

**Font loading issues:**
```bash
# Fonts load via CDN in production
# System fonts used as fallback
```

**TypeScript errors:**
```bash
npm run build  # Check for type errors
```

### Runtime Issues

**WebGL not working:**
- Check browser support (Chrome 105+, Safari 15+, Firefox 103+)
- Verify GPU acceleration enabled
- Falls back to CSS gradient automatically

**Smooth scroll laggy:**
- Reduce Lenis duration in `animations/smooth-scroll.ts`
- Check for performance bottlenecks

## 📈 Analytics Events

Tracked interactions:
- `Feature Clicked`: Feature card clicks
- `Feature Hovered`: Hover duration tracking
- `Scroll Depth`: 25%, 50%, 75%, 100%
- `Search`: Query and results count
- `Video Played`: Video playback events

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- **Shopify**: For the Editions inspiration
- **Vercel**: For Next.js and hosting platform
- **Sanity.io**: For the headless CMS
- **GreenSock**: For GSAP animation library

## 📞 Support

For issues and questions:
- **GitHub Issues**: [Create an issue](https://github.com/akd98-byte/shopify-editions-winter26/issues)
- **Documentation**: Check this README
- **Community**: Join discussions

---

Built with ❤️ for Shopify Editions Winter 2026
