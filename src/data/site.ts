// src/data/site.ts
// Centralized site configuration and metadata for Wiam EL Khammal

import type { SiteConfig, NavItem, ContactInfo, LanguageEntry } from "../types";

/**
 * Main site configuration
 */
export const siteConfig: SiteConfig = {
  name: "Wiam EL Khammal",
  title: "Portfolio - Wiam EL Khammal",
  description:
    "Full-Stack Software Engineer — specializing in MERN stack and Spring Boot architecture. Clean, minimal portfolio showcasing scalable systems and professional experience.",
  url: "https://wiamelkhammal.dev", // Update this when you deploy
  author: "Wiam EL Khammal",
  email: "elkhammalwiam@gmail.com",
  locale: "en",
  social: {
    github: "https://github.com/WiamELKhammal",
    linkedin: "https://www.linkedin.com/in/wiam-el-khammal-84ab21257/",
    telegram: "", 
    codingame: "https://www.codingame.com/profile/0a0ea4aaeddda8f52a3b6a66976aa79e5734507",
    leetcode: "https://leetcode.com/u/Tweetyw/",
  },
};

/**
 * Main navigation items
 */
export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Work with me", href: "/work-with-me" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Resume/Portfolio section navigation
 */
export const sectionNavigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * Contact information
 */
export const contactInfo: ContactInfo = {
  location: "Benguerir, Morocco",
  social: [
    {
      platform: "Email",
      url: `mailto:${siteConfig.email}`,
      label: "elkhammalwiam@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      platform: "LinkedIn",
      url: siteConfig.social.linkedin!,
      label: "Wiam EL Khammal",
      icon: "fa-brands fa-linkedin",
    },
    {
      platform: "GitHub",
      url: siteConfig.social.github!,
      label: "WiamELKhammal",
      icon: "fa-brands fa-github",
    },
  ],
};

/**
 * Language proficiencies
 */
export const languages: LanguageEntry[] = [
  { name: "Arabic", level: "Native Speaker", code: "ar" },
  { name: "French", level: "Professional Working Proficiency", code: "fr" },
  { name: "English", level: "Professional Working Proficiency", code: "en" }
];

/**
 * Footer social links with icons
 */
export const footerSocialLinks = [
  {
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    icon: "fa-solid fa-envelope",
  },
  {
    href: siteConfig.social.linkedin!,
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    external: true,
  },
  {
    href: siteConfig.social.github!,
    label: "GitHub",
    icon: "fa-brands fa-github",
    external: true,
  },
  {
    href: siteConfig.social.codingame!,
    label: "CodinGame",
    icon: "fa-solid fa-code",
    external: true,
  },
  {
    href: siteConfig.social.leetcode!,
    label: "LeetCode",
    icon: "fa-solid fa-terminal",
    external: true,
  },
];

/**
 * CV/Resume download paths
 */
export const cvPaths = {
  en: "/cv/CV_Wiam_EL_Khammal_EN.pdf",
  fr: "/cv/CV_Wiam_EL_Khammal_FR.pdf",
};

/**
 * OG Image for social sharing
 */
export const ogImage = `${siteConfig.url}/assets/img/og-image.jpg`;