# Astana Orleu | Профессиональное обучение

A premium Next.js 14 website for Astana Orleu - a professional education center in Kazakhstan offering courses in procurement, accounting, management, and legal affairs.

## Features

- **Bilingual Support**: Full Russian (RU) and Kazakh (KZ) language support
- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth animations with Framer Motion
- **Course Management**: Course catalog with filtering by direction, format, and city
- **Schedule System**: Event schedule with list and calendar views
- **SEO Optimized**: Built with Next.js 14 App Router for optimal SEO
- **TypeScript**: Full TypeScript support for type safety
- **Production Ready**: Optimized for deployment with Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: Custom i18n solution with JSON files
- **UI Components**: Custom reusable components

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── page.tsx       # Home page
│   │   ├── courses/       # Courses catalog
│   │   ├── schedule/      # Schedule page
│   │   ├── about/         # About page
│   │   ├── contacts/      # Contact page
│   │   └── layout.tsx     # Locale layout with navbar, footer
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root redirect
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer, FloatingContacts
│   ├── ui/                # Button, Badge, Card, FAQ
│   ├── sections/          # Hero, Directions, Events, Reviews, etc.
│   └── schedule/          # ScheduleList, ScheduleCalendar
├── data/                  # Static data (courses, events, reviews)
├── hooks/                 # useTranslation hook
├── lib/                   # Utilities and i18n helpers
├── locales/               # Translation files (ru.json, kz.json)
└── middleware.ts          # Locale routing middleware

```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will automatically redirect to `/ru` (Russian) by default.

## Usage

### Development

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

### Adding Content

- **Courses**: Edit `/src/data/courses.ts`
- **Events**: Edit `/src/data/events.ts`
- **Reviews**: Edit `/src/data/reviews.ts`
- **Translations**: Edit `/src/locales/ru.json` and `/src/locales/kz.json`

### Locales

The site supports two locales:
- `ru` - Russian (default)
- `kz` - Kazakh

All text content is defined in `/src/locales/{locale}.json` files.

## Design System

### Colors

- **Primary**: #1a3a6b (Deep Blue)
- **Accent**: #c0c8d8 (Light Blue-Gray)
- **Background**: #f8f9fb (Off White)
- **Text**: #0f1923 (Dark)
- **Secondary Text**: #6b7a8d (Gray)
- **Dividers**: #e2e6ed (Light Gray)

### Typography

- **Font**: Inter
- **Base Size**: 16px
- **Scale**: 1.125 (Major Third)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure your project
4. Click Deploy

The site will be live at your Vercel domain.

### Environment Variables

No environment variables are required for basic functionality.

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Performance

- Optimized images with Next.js Image component
- Code splitting with dynamic imports
- Production build optimizations enabled
- Gzip compression
- CSS minification

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards

## License

Proprietary - Astana Orleu

## Support

For questions or issues, contact: info@astanaorleu.kz
