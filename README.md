# Space Relics — The Stories We Left Behind

**Competition**: NASA Space Apps Challenge 2026  
**Project Category**: Interactive Educational Museum  
**Platform**: Frontend Single-Page Application (React + Vite + Tailwind CSS)

---

## 1. Project Overview

**Space Relics** is an interactive educational virtual museum website showcasing six seminal pieces of human-made equipment left on the Moon and Mars:

- **Moon**:
  1. *Surveyor 3* (1967) — Soft lander sampled by Apollo 12
  2. *Apollo Lunar Roving Vehicle* (1971–1972) — Manned electric mobility rover
  3. *Apollo 11 Laser Retroreflector* (1969) — EASEP passive optical ranging instrument
- **Mars**:
  4. *Sojourner Rover* (1997) — Mars Pathfinder microrover pioneer
  5. *Spirit Rover* (2004–2011) — MER-A robotic geologist
  6. *Opportunity Rover* (2004–2019) — MER-B marathon exploration rover

> **Independent Project Disclaimer**: *Space Relics* is an independent educational museum project created for the NASA Space Apps Challenge 2026 and is not affiliated with, endorsed by, or operated by NASA.

---

## 2. Technology Stack

- **Framework**: React 19 (Functional components, Hooks)
- **Build Tool**: Vite 8 (ESM, Hot Module Replacement)
- **Styling**: Tailwind CSS 3 (configured with dark space theme design tokens) & PostCSS
- **Routing**: React Router DOM 7 (`BrowserRouter`, nested layout routes, 404 handler)
- **Icons**: Lucide React (`Compass`, `MapPin`, `Calendar`, `CheckCircle2`, `Menu`, `X`, etc.)
- **Animations**: Framer Motion
- **Data Architecture**: Static JSON models + JavaScript Controller access layers

---

## 3. MVC-Inspired Architecture

Space Relics implements a strict separation of concerns adapted for a client-side single-page educational application:

```
src/
├── assets/                          # Static media, icons, and illustrations
│   ├── icons/
│   ├── illustrations/
│   └── images/
│
├── models/                          # Data Layer
│   ├── data/
│   │   ├── moonObjects.json         # Static Moon artifact records
│   │   └── marsObjects.json         # Static Mars artifact records
│   └── objectModel.js               # Data-access methods (getAllObjects, getObjectBySlug, etc.)
│
├── controllers/                     # Business Logic Layer
│   ├── objectController.js          # Retrieval, filtering, search, and related relics
│   ├── mapController.js             # Equirectangular coordinate projection & marker state
│   └── timelineController.js        # Chronological sorting & historical era grouping
│
├── views/                           # Presentation Layer
│   ├── layouts/
│   │   └── MainLayout.jsx           # Global wrapper (Sticky Navbar, dynamic Outlet, Footer)
│   ├── pages/                       # Route Page views
│   │   ├── HomePage.jsx             # Museum introductory portal
│   │   ├── ExplorePage.jsx          # Destination gateway (Moon / Mars)
│   │   ├── MoonExplorerPage.jsx     # Moon artifacts & map portal
│   │   ├── MarsExplorerPage.jsx     # Mars artifacts & map portal
│   │   ├── ObjectDetailsPage.jsx    # Dynamic relic exhibition (/objects/:slug)
│   │   ├── TimelinePage.jsx         # Historical chronology (1967–2019)
│   │   ├── AboutPage.jsx            # Educational mission & project identity
│   │   └── NotFoundPage.jsx         # 404 Deep space error page
│   └── components/                  # Reusable UI Components
│       ├── common/                  # Button, Card, Badge, Container, Heading
│       ├── navigation/              # Navbar (with mobile menu), Footer
│       ├── home/                    # Stage 2 components
│       ├── explorer/                # Stage 3 components
│       ├── object/                  # Stage 4 components
│       └── timeline/                # Stage 5 components
│
├── routes/
│   └── AppRoutes.jsx                # Centralized React Router configuration
├── styles/
│   └── index.css                    # Tailwind directives, theme variables, starfield backdrop
├── utils/
│   └── constants.js                 # Brand identity, navigation items, color palette tokens
├── App.jsx                          # App root component
└── main.jsx                         # Application entrypoint
```

### Architectural Principles

1. **Model**: Pure data and data-retrieval helpers. JSON files are strictly typed by schema without JSX or UI rendering.
2. **Controller**: Decouples business logic from views. Prepares sorted chronologies, projects latitude/longitude to SVG percentages, filters by search query or destination, and locates related records.
3. **View**: Pure presentation. Components receive data via props or controllers and render with semantic, accessible HTML and Tailwind styling.

---

## 4. JSON Data Schema & Conventions

The data architecture enforces identical, consistent schemas across `moonObjects.json` and `marsObjects.json`:

```json
{
  "id": "string (unique identifier)",
  "slug": "string (URL slug)",
  "name": "string (display name)",
  "destination": "Moon | Mars",
  "year": 1969,
  "missionName": "string",
  "objectType": "string",
  "shortDescription": "string",
  "overview": "string",
  "historicalStory": "string",
  "purpose": "string",
  "achievements": ["array of strings"],
  "location": {
    "locationName": "string",
    "latitude": -3.016,
    "longitude": -23.418,
    "coordinateAccuracy": "verified | approximate | unknown",
    "description": "string"
  },
  "missionStatus": "Completed | Still Active / Operational (Passive)",
  "equipmentStatus": "string",
  "whyLeftBehind": "string",
  "interestingFacts": ["array of strings"],
  "images": [
    {
      "imageUrl": "string | null",
      "caption": "string",
      "credit": "NASA | NASA/JPL",
      "sourceUrl": "string | null"
    }
  ],
  "sources": [
    {
      "title": "string",
      "organization": "string",
      "url": "string"
    }
  ]
}
```

> **Data Integrity**: Unverified media or coordinates use `null` values and empty arrays. No historical facts, landing coordinates, or NASA citations are fabricated.

---

## 5. Design System: Dark Space Museum

- **Primary Background**: `#070B16`
- **Secondary Background**: `#0B1220`
- **Card Background**: `#111B2E`
- **Elevated Surface**: `#162238`
- **Primary Accent**: `#3B82F6` (Electric Blue)
- **Secondary Accent**: `#38BDF8` (Sky)
- **Primary Text**: `#F8FAFC`
- **Secondary Text**: `#94A3B8`
- **Muted Text**: `#64748B`
- **Border**: `#263449`
- **Moon Identity**: Cool Silver (`#E2E8F0`), Soft White (`#F8FAFC`), Subtle Blue (`#93C5FD`)
- **Mars Identity**: Rust Orange (`#C2410C`), Warm Red (`#DC2626`), Sandy Beige (`#FDE047`)
- **Typography**: Headings: *Space Grotesk*, Body: *Inter*

---

## 6. Installation & Development

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
# Clone the repository and install dependencies
npm install
```

### Development Server
```bash
# Start local development server with HMR
npm run dev
```

### Production Build & Preview
```bash
# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

### SPA Deployment (Vercel & Netlify)
SPA fallback routing is configured:
- `vercel.json` (rewrites all routes to `/index.html`)
- `public/_redirects` (Netlify rewrite rule `/*  /index.html  200`)
