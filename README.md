# 🚀 NexaFlow - AI-Powered Automation Platform

A modern, responsive website built with React, TypeScript, and Vite featuring AI automation showcases, 3D visualizations, and interactive components.

## ✨ Features

- 🎨 **Modern Design** - Beautiful UI with Tailwind CSS and Framer Motion animations
- 🤖 **AI Automation** - Showcases and demos of AI-powered workflows
- 🎯 **3D Visualizations** - Interactive 3D components using Three.js and React Three Fiber
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Optimized build with code splitting and lazy loading
- 🌐 **SEO Optimized** - Meta tags and structured data
- 🔒 **Secure** - HTTPS, CSP headers, and security best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **UI Components**: Radix UI, Lucide React
- **Charts**: Recharts
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nexaflow-website.git
cd nexaflow-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Deployment
npm run deploy:cloudflare   # Deploy to Cloudflare Pages
npm run deploy:railway      # Deploy to Railway
npm run deploy:surge        # Deploy to Surge.sh
npm run deploy:firebase     # Deploy to Firebase

# Analysis
npm run build:analyze       # Analyze bundle size
npm run optimize           # Build and analyze
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── ...              # Feature components
├── lib/                 # Utility libraries
├── pages/               # Page components
├── styles/              # CSS and animation files
└── assets/              # Static assets
```

## 🎨 Key Components

- **AnimatedShaderHero** - Hero section with shader animations
- **AI3DAssistantShowcase** - Interactive 3D AI assistant demo
- **AIAutomationFeatures** - Animated feature showcases
- **InteractiveAccordionDemo** - Collapsible content sections
- **BusinessMetricsDashboard** - Real-time metrics visualization

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### Alternative Platforms

- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop or Git integration
- **Railway**: Docker-based deployment
- **Firebase Hosting**: Google Cloud integration

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_ENVIRONMENT=production
VITE_API_URL=your-api-url
```

### Build Optimization

The project includes several performance optimizations:

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image compression and lazy loading
- **CDN**: Static assets served from CDN

## 📊 Performance

- **Lighthouse Score**: 95+ for all metrics
- **Bundle Size**: ~2MB gzipped
- **Load Time**: <2s on 3G networks
- **Core Web Vitals**: All green

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library

---

Built with ❤️ using modern web technologies