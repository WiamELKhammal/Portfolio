# Portfolio Website

A modern, performant portfolio website built with [Astro](https://astro.build).

## 🚀 Features

- **Static Site Generation (SSG)** - Fast, SEO-friendly static pages
- **MDX Support** - Write content using Markdown with JSX components
- **Responsive Design** - Mobile-first, works on all devices
- **Multi-language** - English and French support
- **Optimized Performance** - Minimal JavaScript, maximum speed

## 📦 Tech Stack

- [Astro](https://astro.build) - Static site generator
- [MDX](https://mdxjs.com) - Markdown with components
- CSS - Custom styling
- JavaScript - Minimal client-side interactivity

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- npm, yarn, or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

## 📁 Project Structure

```
/
├── public/           # Static assets (images, fonts, etc.)
│   ├── cv/          # Resume/CV files
│   ├── img/         # Images
│   └── js/          # Client-side scripts
├── src/
│   ├── components/  # Reusable Astro components
│   ├── content/     # Content collections (projects, blog)
│   ├── data/        # Data files (JSON, etc.)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   ├── scripts/     # Scripts
│   ├── styles/      # Global styles
│   └── types/       # TypeScript types
├── astro.config.mjs # Astro configuration
└── package.json
```

## 🌐 Deployment

This site is configured for deployment on **Cloudflare Pages**.

### Cloudflare Pages Settings

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: `18` (or higher)

### Environment Variables

No environment variables required for basic deployment.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ using [Astro](https://astro.build)
