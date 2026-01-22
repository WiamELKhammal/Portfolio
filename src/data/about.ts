// src/data/about.ts
// Personal introduction and about section data

import type { AboutData, HeroData } from "../types";

/**
 * Hero section data
 * Main introduction displayed at the top of the page
 */
export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: "Wiam EL Khammal",
  title: "Hi , I'm Wiam EL Khammal",
  subtitle: "Full Stack Developer ",
  description: "Recent graduate in Information Systems Engineering and Digital Transformation, with experience building full-stack applications. Skilled in process automation, creating user-friendly interfaces, and delivering impactful digital solutions using modern web and mobile technologies.",
  quote: "Form follows function.",
  cta: {
    primary: {
      text: "View Projects",
      href: "#projects",
    },
    secondary: {
      text: "Download CV",
      href: "/cv/CV_EN_Wiam_EL_Khammal_Software_Engineer.pdf",
      download: true,
    },
  },
};

/**
 * About section data
 * Detailed personal and professional introduction
 */
export const aboutData: AboutData = {
  introduction: [
    "Hi, I'm Wiam, an Information Systems Engineer based in Morocco. My goal is to architect robust and impactful digital transformations that address real-world business challenges.",
    "I specialize in Full Stack development with a strong focus on systems architecture and process automation. I enjoy deconstructing complex workflows into streamlined, efficient applications, ensuring that every solution is scalable and user-centric.",
  ],
  highlights: [
    "process optimization",
    "problem‑solving",
    "emerging technologies",
    "exploring anything that sparks curiosity",
  ],
  strengths: [
    "Systems Thinking",
    "Analytical Thinking",
    "Technical Resilience",
    "Collaboration",
    "Rapid Adaptability",
  ],
  image: {
    src: "/img/profile-v2.png",
    srcFallback: "/img/profile.jpg",
    alt: "Portrait of Wiam EL Khammal",
    width: 800,
    height: 800,
  },
};

/**
 * Professional summary for meta descriptions
 */
export const professionalSummary =
  "Information Systems Engineer specializing in Digital Transformation and Full Stack development. Experienced in process automation and building scalable web and mobile applications.";

/**
 * Short bio for social/footer
 */
export const shortBio =
  "Information Systems Engineer passionate about building robust, automated solutions.";

/**
 * Get introduction paragraphs as HTML-safe strings
 */
export function getIntroductionParagraphs(): string[] {
  return aboutData.introduction;
}

/**
 * Get highlighted interests formatted for display
 */
export function getFormattedHighlights(): string {
  const highlights = aboutData.highlights;
  if (highlights.length === 0) return "";
  if (highlights.length === 1) return highlights[0];

  const lastItem = highlights[highlights.length - 1];
  const otherItems = highlights.slice(0, -1);

  return `${otherItems.join(", ")}, and ${lastItem}`;
}

/**
 * Get all strengths
 */
export function getStrengths(): string[] {
  return aboutData.strengths;
}

/**
 * Get hero CTA configuration
 */
export function getHeroCTA(): HeroData["cta"] {
  return heroData.cta;
}