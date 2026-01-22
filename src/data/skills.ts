// src/data/skills.ts
import type { SkillCategory } from "../types";

/**
 * Technical skills grouped by professional domain
 * Optimized for an Information Systems & Software Engineer profile
 */
export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    icon: "fa-solid fa-code",
    skills: ["React.js", "Next.js", "Vue.js", "Angular","JavaScript", "TypeScript", "Tailwind", "Ant Design", "HTML5", "CSS3"],
  },
  {
    name: "Backend & Architecture",
    icon: "fa-solid fa-server",
    skills: ["Java", "Spring Boot", "JEE", "UML", "Node.js", "Express.js", "Python", "Microservices", "REST APIs"],
  },
  {
    name: "Data & Intelligence",
    icon: "fa-solid fa-brain",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase"],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "fa-solid fa-cloud",
    skills: ["Azure", "Docker", "Maven", "GitHub", "CI/CD Pipelines", "Vercel", "Netlify", "Render", "Supabase"],
  },
  {
    name: "Business & Productivity",
    icon: "fa-solid fa-briefcase",
    skills: ["Odoo", "Power BI", "Jira", "Figma", "WordPress", "Postman", "Git"],
  },
  {
    name: "Testing & Quality",
    icon: "fa-solid fa-vial",
    skills: ["JUnit", "Jest", "Cypress"],
  }
];

/**
 * Image path mapping
 * Ensure filenames in public/img/skills/ match these keys exactly
 */
export const skillLogos: Record<string, string> = {
  // Frontend
  "React.js": "/img/skills/react.png",
  "Next.js": "/img/skills/next-js.svg",
  "Vue.js": "/img/skills/Vue.png",
  "Angular": "/img/skills/Angular_gradient_logo.png",
  "TypeScript": "/img/skills/Typescript.png",
  "JavaScript": "/img/skills/JavaScript-logo.png",
  "Tailwind": "/img/skills/tailwind.png",
  "Ant Design": "/img/skills/antdesign.svg",
  "HTML5": "/img/skills/html.png",
  "CSS3": "/img/skills/css.png",
  
  // Backend & Arch
  "Java": "/img/skills/java.png",
  "Spring Boot": "/img/skills/spring-boot-logo.png",
  "JEE": "/img/skills/java.png",
  "Node.js": "/img/skills/nodejs.png",
  "Express.js": "/img/skills/Expressjs.png",
  "Python": "/img/skills/Python-logo-notext.svg.png",
  "Microservices": "/img/skills/microservices.png",
  "REST APIs": "/img/skills/restapi.png",
  "UML": "/img/skills/uml.png",
   
  // Databases & Storage
  "PostgreSQL": "/img/skills/Postgresql_elephant.svg.png",
  "MongoDB": "/img/skills/mongodb-icon-1-1.svg",
  "SQL Server": "/img/skills/sql server.png",
  "Firebase": "/img/skills/firebase.png",
  
  // Cloud & DevOps
  "Azure": "/img/skills/Microsoft_Azure.svg",
  "Docker": "/img/skills/docker.png",
  "GitHub": "/img/skills/github.svg",
  "CI/CD Pipelines": "/img/skills/cicdpipeline.png",
  "Vercel": "/img/skills/Vercel_favicon.svg",
  "Netlify": "/img/skills/Netlify_logo_(2).svg",
  "Render": "/img/skills/render.png",
  "Supabase": "/img/skills/supabase.webp",
  "Maven": "/img/skills/maven.svg",
  
  // Tools
  "Odoo": "/img/skills/odoo.png",
  "Power BI": "/img/skills/New_Power_BI_Logo.svg.png",
  "Jira": "/img/skills/Jira_Logo.svg.png",
  "Figma": "/img/skills/Figma-logo.svg.png",
  "WordPress": "/img/skills/wordpress.png",
  "Postman": "/img/skills/Postman_(software).png",
  "Git": "/img/skills/Git-logo.png",
  
  // Testing
  "Jest": "/img/skills/jest-logo-png-transparent.png",
  "Cypress": "/img/skills/cypress-logo.svg",
  "JUnit": "/img/skills/junit5.png",
  "WebSocket": "/img/skills/websocket.png",
  "Redis": "/img/skills/redis.png",
  "PHP": "/img/skills/PHP-logo.svg.png",
  "MySQL": "/img/skills/mysql-logo.png",
  "Spring Security": "/img/skills/springsecurity.png",
  "MERN Stack": "/img/skills/mern.png",
  "Agile(Scrum)": "/img/skills/agilescrum.png",
  "Tailwind CSS": "/img/skills/tailwind.png", 
};

/**
 * Helper: Get image path for a skill
 */
export function getSkillLogo(skillName: string): string {
  return skillLogos[skillName] || "/img/skills/default.png";
}

/**
 * Helper: Get all skills as a flat array
 */
export function getAllSkills(): string[] {
  return skillsData.flatMap((category) => category.skills);
}
// Add these to the skillLogos object in src/data/skills.ts
