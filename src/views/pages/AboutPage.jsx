import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import HeroSection from "../components/home/HeroSection";
import { APP_IDENTITY } from "../../utils/constants";
import { TEAM_MEMBERS, PROJECT_CREDITS } from "../../models/data/teamData";
import {
  ArrowRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  User,
  ShieldCheck,
  Compass,
  Planet,
  Certificate,
  Books,
} from "@phosphor-icons/react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About the Project & Team | Space Relics";
  }, []);

  // Six historical artifacts reference for Section Two visual representation
  const museumArtifacts = [
    {
      name: "Surveyor 3",
      year: "1967",
      world: "Moon",
      image: "/images/relics/surveyor-3.jpg",
    },
    {
      name: "Apollo 11 Retroreflector",
      year: "1969",
      world: "Moon",
      image: "/images/relics/apollo-11-lrrr.jpg",
    },
    {
      name: "Apollo Lunar Roving Vehicle",
      year: "1971–1972",
      world: "Moon",
      image: "/images/relics/apollo-lrv.jpg",
    },
    {
      name: "Sojourner Rover",
      year: "1997",
      world: "Mars",
      image: "/images/relics/sojourner.jpg",
    },
    {
      name: "Spirit Rover",
      year: "2004–2011",
      world: "Mars",
      image: "/images/relics/spirit.jpg",
    },
    {
      name: "Opportunity Rover",
      year: "2004–2019",
      world: "Mars",
      image: "/images/relics/opportunity.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#090B0E] text-space-text">
      {/* =========================================================================
          SECTION ONE — About Space Relics (Hero)
          ========================================================================= */}

      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-space-border/80 bg-[#090B0E]">
        {/* 1. Full Widescreen Archival Lunar Landscape Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-landscape-bg.jpg"
            alt="Archival panoramic landscape of the Moon's surface captured during NASA Apollo missions"
            className="w-full h-full object-cover object-center filter contrast-[1.1] grayscale-[0.35] brightness-[0.7] transform scale-105"
          />

          {/* Layer B: Directional dark gradient behind text on left/center */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E] via-[#090B0E]/85 to-[#090B0E]/40" />
        </div>

        {/* 2. Main Content: Elegant Editorial Typography with High Contrast */}
        <div className="relative z-10 my-auto py-8">
          <Container>
            <div className="max-w-3xl">
              {/* Expressive Editorial Headline */}
              <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight leading-[1.08] drop-shadow-md">
                Every Relic Has a Story. Every Mission Leaves a Legacy.
              </h1>

              {/* Concise Supporting Description */}
              <p className="mt-6 text-base sm:text-lg text-space-textSecondary max-w-3xl leading-relaxed font-sans drop-shadow">
                Space Relics is an interactive educational digital museum
                documenting six human-made objects left behind on the Moon and
                Mars. From early robotic lunar exploration to the remarkable
                journeys of Mars rovers, these objects represent decades of
                aerospace engineering, scientific discovery, and human
                curiosity. The museum brings their stories together in one
                place, allowing visitors to explore their history, understand
                their purpose, and discover the enduring legacy of humanity's
                footsteps beyond Earth.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* =========================================================================
          SECTION TWO — Purpose & Educational Mission
          ========================================================================= */}
      <section className="py-16 border-b border-space-border/80 bg-[#090B0E]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative (6 Cols) */}
            <div className="lg:col-span-6">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight mb-6">
                Why We Built This Museum
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans mb-8">
                <p>
                  Far from Earth, six landmark pieces of human technology rest
                  permanently on the Moon and Mars. Too often, historical space
                  equipment is viewed solely as discarded debris. In reality,
                  each object represents a monument to human ingenuity that
                  expanded our understanding of the solar system.
                </p>
                <p>
                  We built Space Relics to transform archival data into an
                  engaging educational resource with clear curatorial goals:
                </p>
              </div>

              {/* 5 Core Pillars */}
              <ul className="space-y-3.5 text-xs sm:text-sm font-sans text-space-textSecondary">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-space-text font-medium">
                      Preserve Historical Stories:
                    </strong>{" "}
                    Maintain the narrative memory of human-made machines resting
                    across celestial surfaces.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-space-text font-medium">
                      Accessible Public History:
                    </strong>{" "}
                    Make complex technical mission archives engaging and
                    accessible for students, educators, and space enthusiasts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-space-text font-medium">
                      Explain Engineering Triumphs:
                    </strong>{" "}
                    Demonstrate how engineers solved extreme environmental
                    challenges like lunar vacuum and Martian dust storms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-space-text font-medium">
                      Contextualize Planetary Science:
                    </strong>{" "}
                    Connect individual rovers and landers to pivotal discoveries
                    such as surface bearing capacity and ancient water.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-space-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-space-text font-medium">
                      Inspire Future Exploration:
                    </strong>{" "}
                    Encourage curiosity about robotic exploration and humanity's
                    sustainable future beyond Earth.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Visual Representation of the Six Relics (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded border border-space-border bg-space-card">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-space-border/60">
                  <span className="font-mono text-xs uppercase tracking-widest text-space-textMuted">
                    Exhibition Inventory
                  </span>
                  <span className="font-mono text-xs text-space-accentLight">
                    6 Documented Artifacts
                  </span>
                </div>

                {/* 2x3 Grid of the 6 authentic artifacts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {museumArtifacts.map((artifact, idx) => (
                    <div
                      key={idx}
                      className="rounded border border-space-border/70 bg-space-bgSecondary overflow-hidden flex flex-col justify-between"
                    >
                      <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                        <img
                          src={artifact.image}
                          alt={artifact.name}
                          className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.15]"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-2.5">
                        <span
                          className={`text-[9px] font-mono uppercase tracking-wider block ${
                            artifact.world === "Moon"
                              ? "text-moon-silver"
                              : "text-mars-rust"
                          }`}
                        >
                          {artifact.world} • {artifact.year}
                        </span>
                        <h4 className="font-sans font-medium text-xs text-space-text truncate mt-0.5">
                          {artifact.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] font-mono text-space-textMuted mt-5 leading-normal">
                  All six artifacts are preserved at verified surface
                  coordinates and documented in the museum's permanent
                  collection.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION THREE — NASA Space Apps Challenge 2026
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-space-border/80 bg-space-bgSecondary/20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-10">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight">
                Built for Exploration. Presented to the World.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans">
                Space Relics was developed as an educational digital experience
                for the{" "}
                <span className="text-space-text font-medium">
                  {APP_IDENTITY.competition}
                </span>
                . The challenge provided the catalyst to transform historical
                mission archives into an interactive museum celebrating
                humanity's technological presence on other celestial bodies.
              </p>
            </div>

            {/* Structured Project Information Panel */}
            <div className="rounded border border-space-border bg-space-card p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-space-accentLight mb-6 pb-3 border-b border-space-border/60">
                Project Dossier & Technical Architecture
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-sans">
                <div className="space-y-4">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-space-textMuted">
                      Event
                    </span>
                    <span className="text-space-text font-medium">
                      NASA Space Apps Challenge 2026
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-space-textMuted">
                      Project Name
                    </span>
                    <span className="text-space-text font-medium">
                      Space Relics — The Stories We Left Behind
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-space-textMuted">
                      Team
                    </span>
                    <span className="text-space-text font-medium">
                      Epsilons X
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-space-textMuted">
                      Category
                    </span>
                    <span className="text-space-text">
                      Educational Digital Museum Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION FOUR — Meet the Team: Epsilons X (5 Members, 3+2 Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-space-border/80 bg-[#090B0E]">
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-space-text font-normal tracking-tight">
              Meet the Minds Behind Space Relics
            </h2>
            <p className="mt-4 text-sm sm:text-base text-space-textSecondary leading-relaxed font-sans">
              Behind every great exploration is a team driven by curiosity,
              creativity, and the desire to build something meaningful. Meet{" "}
              <span className="text-space-text font-semibold">Epsilons X</span>,
              the five-member team behind Space Relics.
            </p>
          </div>

          {/* 3+2 Balanced Responsive Team Grid */}
          <div className="space-y-8">
            {/* Top Row: 3 Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {TEAM_MEMBERS.slice(0, 3).map((member) => (
                <div
                  key={member.id}
                  className="rounded border border-space-border bg-space-card flex flex-col justify-between overflow-hidden group hover:border-space-border/100 transition-colors"
                >
                  {/* Portrait Area */}
                  <div className="relative aspect-[4/3] w-full bg-space-bgSecondary border-b border-space-border overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-space-textMuted p-6">
                        <div className="w-16 h-16 rounded-full border border-space-border bg-[#090B0E] flex items-center justify-center text-space-textSecondary mb-2 group-hover:border-space-accent transition-colors">
                          <User weight="duotone" className="w-8 h-8" />
                        </div>
                        <span className="font-mono text-[10px] tracking-wider uppercase text-space-textMuted">
                          Profile Photo
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-space-text mb-1">
                        {member.name}
                      </h3>
                      <span className="font-mono text-xs text-space-accentLight block mb-3">
                        {member.role}
                      </span>
                      <p className="text-xs text-space-textSecondary leading-relaxed font-sans mb-6">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social / Contact Links Footer */}
                    <div className="pt-4 border-t border-space-border/60 flex items-center gap-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`Email ${member.name}`}
                        >
                          <EnvelopeSimple className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`${member.name}'s GitHub Profile`}
                        >
                          <GithubLogo className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                          <LinkedinLogo className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Members (Centered on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {TEAM_MEMBERS.slice(3, 5).map((member) => (
                <div
                  key={member.id}
                  className="rounded border border-space-border bg-space-card flex flex-col justify-between overflow-hidden group hover:border-space-border/100 transition-colors"
                >
                  {/* Portrait Area */}
                  <div className="relative aspect-[4/3] w-full bg-space-bgSecondary border-b border-space-border overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-space-textMuted p-6">
                        <div className="w-16 h-16 rounded-full border border-space-border bg-[#090B0E] flex items-center justify-center text-space-textSecondary mb-2 group-hover:border-space-accent transition-colors">
                          <User weight="duotone" className="w-8 h-8" />
                        </div>
                        <span className="font-mono text-[10px] tracking-wider uppercase text-space-textMuted">
                          Profile Photo
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-space-text mb-1">
                        {member.name}
                      </h3>
                      <span className="font-mono text-xs text-space-accentLight block mb-3">
                        {member.role}
                      </span>
                      <p className="text-xs text-space-textSecondary leading-relaxed font-sans mb-6">
                        {member.bio}
                      </p>
                    </div>

                    {/* Social / Contact Links Footer */}
                    <div className="pt-4 border-t border-space-border/60 flex items-center gap-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`Email ${member.name}`}
                        >
                          <EnvelopeSimple className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`${member.name}'s GitHub Profile`}
                        >
                          <GithubLogo className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded text-space-textSecondary hover:text-white hover:bg-space-bgSecondary border border-space-border/60 transition-colors focus:outline-none focus:ring-1 focus:ring-space-accent"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                          <LinkedinLogo className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION FIVE — Credits & Acknowledgements
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-space-border/80 bg-space-bgSecondary/20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-left mb-10">
              <h2 className="font-editorial text-3xl sm:text-4xl text-space-text font-normal tracking-tight">
                Research, Resources & Acknowledgements
              </h2>
              <p className="mt-3 text-sm text-space-textSecondary leading-relaxed font-sans">
                Space Relics incorporates public domain historical records,
                photographic scans, and technical mission timelines from
                authoritative space exploration archives:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECT_CREDITS.map((credit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded border border-space-border bg-space-card flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-heading font-medium text-sm text-space-text mb-2">
                      {credit.organization}
                    </h3>
                    <p className="text-xs text-space-textSecondary leading-relaxed font-sans mb-4">
                      {credit.description}
                    </p>
                  </div>
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-space-accent hover:text-space-accentLight transition-colors inline-flex items-center gap-1.5 self-start"
                  >
                    <span>Visit Archive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION SIX — Independent Project Disclaimer
          ========================================================================= */}
      <section className="py-12 border-b border-space-border/80 bg-[#090B0E]">
        <Container size="narrow">
          <div className="p-6 rounded border border-space-border/70 bg-space-card/60 flex items-start gap-4">
            <ShieldCheck
              weight="duotone"
              className="w-6 h-6 text-space-textMuted flex-shrink-0 mt-0.5"
            />
            <div className="space-y-1.5 text-xs text-space-textMuted leading-relaxed font-sans">
              <h4 className="font-mono uppercase tracking-wider text-space-textSecondary text-[11px] font-semibold">
                Official Independent Project Disclaimer
              </h4>
              <p>
                Space Relics is an independent educational project developed for
                the NASA Space Apps Challenge 2026. It is not an official NASA
                website and is not affiliated with, endorsed by, or sponsored by
                NASA.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION SEVEN — Closing Section
          ========================================================================= */}
      <section className="py-16 sm:py-28 relative overflow-hidden bg-space-bgSecondary/30 text-center">
        <Container size="narrow">
          <div className="p-8 sm:p-14 rounded border border-space-border bg-space-card shadow-lg">
            <h2 className="font-editorial text-3xl sm:text-5xl text-space-text font-normal tracking-tight mb-4">
              The Story of Exploration Is Still Being Written.
            </h2>

            <p className="text-sm sm:text-base text-space-textSecondary max-w-xl mx-auto leading-relaxed mb-8 font-sans">
              Discover the machines, missions, and milestones that continue to
              shape humanity's journey beyond Earth.
            </p>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded text-xs font-mono uppercase tracking-wider bg-space-text text-[#090B0E] font-semibold hover:bg-white transition-all focus:outline-none focus:ring-1 focus:ring-space-accent"
            >
              <span>Explore the Relics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
