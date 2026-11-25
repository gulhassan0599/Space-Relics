<div align="center">
# Space Relics - The Stories We Left Behind

### **An Interactive Educational Digital Museum for the NASA Space Apps Challenge 2026**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel%20%2F%20GitHub%20Pages-00F0FF?style=for-the-badge&logo=vercel&logoColor=black)](https://space-relics.vercel.app/)
[![NASA Space Apps](https://img.shields.io/badge/NASA%20Space%20Apps-2026%20Project-E11D48?style=for-the-badge&logo=nasa&logoColor=white)](https://www.spaceappschallenge.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

*Every relic has a story. Every mission leaves a legacy.*

[Explore Live Exhibition](https://space-relics.vercel.app/) • [Project Dossier](#-project-motive--vision) • [Exhibits](#-featured-museum-exhibits) • [Architecture](#-project-architecture--folder-structure) • [Installation](#-getting-started)

</div>

---

## 🛰️ Project Motive & Vision

Across decades of interplanetary exploration, humanity has dispatched robotic scouts and crewed missions to the Moon and Mars. When their missions concluded, their landers, rovers, and scientific instruments remained resting on alien sands—silent monuments to human curiosity, engineering bravery, and scientific pursuit.

**Space Relics** is an interactive, digital educational museum built for the **NASA Space Apps Challenge 2026**. Its purpose is to:

1. **Preserve Extraterrestrial Heritage**: Document the exact locations, scientific purposes, and historical journeys of hardware left beyond Earth.
2. **Make Space History Accessible**: Present technical aerospace archives through an editorial, human-centered storytelling experience.
3. **Connect Engineering with Planetary Science**: Detail how each machine overcame extreme environments—from lunar vacuum and thermal swings to Martian dust storms.
4. **Foster Global Curiosity**: Inspire students, researchers, and space enthusiasts about humanity's past achievements and upcoming return to the Moon and Mars.

> [!NOTE]  
> **Independent Project Disclaimer**: *Space Relics* is an independent educational initiative developed for the NASA Space Apps Challenge 2026. It is not an official NASA website and is not affiliated with, endorsed by, or sponsored by NASA.

---

## 🏛️ Featured Museum Exhibits

The permanent collection curates **six landmark artifacts** across two planetary sectors:

### Sector 01: The Moon
- **Surveyor 3 (1967)**: The pioneering robotic lander that conducted lunar soil-bearing tests and was later inspected by Apollo 12 astronauts.
- **Apollo 11 Lunar Module Descent Stage "Eagle" (1969)**: The historic platform that carried the first humans to walk on the lunar surface at Tranquility Base.
- **Apollo 15 Lunar Module Descent Stage "Falcon" (1971)**: The Apennine landing base that introduced deep field geology and supported the first Lunar Roving Vehicle.

### Sector 02: Mars
- **Mars Pathfinder & Sojourner (1997)**: The innovative airbag-assisted landing station and microrover that proved mobile robotic exploration on Mars.
- **Spirit Rover — MER-A (2004–2010)**: The resilient robotic geologist that scaled Husband Hill and uncovered hydrothermal silica in Gusev Crater.
- **Opportunity Rover — MER-B (2004–2019)**: The marathon rover that operated for nearly 15 years across Meridiani Planum, proving ancient standing liquid water.

---

## 🚀 Live Deployment & Links

| Service | Link |
| :--- | :--- |
| **Live Application** | [project-space-relics.vercel.app](https://project-space-relics.vercel.app/)  |
| **GitHub Repository** | [github.com/gulhassan0599/Space-Relics](https://github.com/gulhassan0599/Space-Relics) |
| **NASA Space Apps Challenge** | [spaceappschallenge.org](https://www.spaceappschallenge.org/) |

---

## 💻 Tech Stack & Design System

- **Frontend Core**: React 19, JavaScript (ESM)
- **Tooling & Bundler**: Vite 8 with fast HMR
- **Routing**: React Router DOM 7 (Dynamic nested layouts, instant route scrolling)
- **Styling**: Tailwind CSS 3 with custom space palette design tokens
- **Typography**: Editorial Serif (*Newsreader*), Technical Grotesk (*Space Grotesk*), Clean UI (*Inter*)
- **Icons**: Phosphor Icons React
- **Architecture**: MVC-inspired modular client architecture

---

## 📂 Project Architecture & Folder Structure

```
Space-Relics/
├── public/
│   ├── favicon.svg              # Custom planetary vector favicon
│   ├── icons.svg                # System icon sprites
│   └── images/
│       ├── destinations/        # High-res Moon & Mars photography
│       ├── hero/                # Panoramic landscape & archival plates
│       ├── relics/              # Authentic NASA/JPL mission photographs
│       └── team/                # Epsilons X team member portraits
│
├── src/
│   ├── controllers/             # Business Logic Layer
│   │   ├── mapController.js     # Coordinate calculations & marker normalization
│   │   ├── objectController.js  # Relic data retrieval, filtering, and search
│   │   └── timelineController.js# Chronological era sorting
│   │
│   ├── models/                  # Data Layer (Single Source of Truth)
│   │   ├── data/
│   │   │   ├── moonObjects.json # Authentic Moon relic records & sources
│   │   │   ├── marsObjects.json # Authentic Mars relic records & sources
│   │   │   └── teamData.js      # Team credentials & archive credits
│   │   └── objectModel.js       # Data access methods
│   │
│   ├── views/                   # Presentation Layer
│   │   ├── components/
│   │   │   ├── common/          # Reusable Container, Card, Heading, Badge
│   │   │   ├── explorer/        # Interactive SVG Moon & Mars surface maps
│   │   │   ├── home/            # Hero, Destinations, Featured relics sections
│   │   │   ├── navigation/      # Sticky Navbar, ScrollToTop, Museum Footer
│   │   │   └── object/          # Relic Hero, Timeline, Gallery, Location status
│   │   │
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx   # Top-level shell with automatic scroll restoration
│   │   │
│   │   └── pages/               # Route Views
│   │       ├── HomePage.jsx
│   │       ├── ExplorePage.jsx
│   │       ├── MoonExplorerPage.jsx
│   │       ├── MarsExplorerPage.jsx
│   │       ├── ObjectDetailsPage.jsx
│   │       ├── TimelinePage.jsx
│   │       ├── AboutPage.jsx
│   │       └── NotFoundPage.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx        # Application routing configuration
│   ├── utils/
│   │   └── constants.js         # Navigation links & brand identity
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ How to Run & Use Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### 1. Clone the Repository
```bash
git clone https://github.com/gulhassan0599/Space-Relics.git
cd Space-Relics
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 👥 Meet the Team: Epsilons X

Developed for the **NASA Space Apps Challenge 2026**:

| Member | Role | Contribution |
| :--- | :--- | :--- |
| **Gul Hassan** | Lead Architect & Principal Developer | Application engineering, MVC architecture, system integration & data accuracy. |
| **Reyyan Aleem** | UI/UX & Digital Experience Designer | Editorial layouts, typography systems, responsive interface design. |
| **Maham Taqi** | Space History & Archival Researcher | Mission research, lunar coordinates & archival records curation. |
| **Rimsha Talib** | Space History & Data Researcher | Technical spacecraft specifications & mission milestone verification. |
| **Bashair Talib**| Presentation & Project Storyteller | Project communications, demo presentation & educational storytelling. |

---

## 📚 Acknowledgements & Archival Sources

All historical imagery, coordinates, and mission data are curated from open public domain archives:
- **NASA Image and Video Library** (`images.nasa.gov`)
- **NASA / JPL-Caltech Photojournal** (`photojournal.jpl.nasa.gov`)
- **NASA Space Science Data Coordinated Archive (NSSDCA)** (`nssdc.gsfc.nasa.gov`)
- **NASA Lunar and Planetary Institute (LPI)** (`lpi.usra.edu`)

---

<div align="center">
<sub>Built with 🌌 for planetary science and exploration education.</sub>
</div>
