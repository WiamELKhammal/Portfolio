// src/data/experience.ts
import type { ExperienceEntry } from "../types";

/**
 * Professional experience entries
 * Listed in reverse chronological order
 */
export const experienceData: ExperienceEntry[] = [
  {
    id: "um6p-intern-2025",
    title: "Full-Stack Developer Intern",
    company: "UM6P (Université Mohammed VI Polytechnique)",
    location: "Benguerir, Morocco",
    logo: "/img/experience/um6p.png", // Ensure this exists in public/img/experience/
    startDate: "Feb 2025",
    endDate: "Jul 2025",
    description: [
      "Architected and developed a real-time academic networking platform using the MERN stack (MongoDB, Express, React, Node.js).",
      "Engineered instant messaging and notification features using WebSocket (Socket.io) for real-time bi-directional communication.",
      "Optimized session management and system performance leveraging Redis for scalable caching.",
      "Actively participated in Agile ceremonies, including daily scrums, sprint planning, and rigorous peer code reviews.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSocket",
      "Redis",
      "Agile (Scrum)",
      "MERN Stack"
    ],
  },
  {
    id: "um6p-intern-2024",
    title: "Full-Stack Developer Intern",
    company: "UM6P (Université Mohammed VI Polytechnique)",
    location: "Benguerir, Morocco",
    logo: "/img/experience/um6p.png",
    startDate: "Jul 2024",
    endDate: "Sep 2024",
    description: [
      "Developed a robust full-stack reservation and order tracking platform using Spring Boot and React.js.",
      "Secured the administration dashboard using Spring Security (JWT) and managed user permissions.",
      "Designed a modern, responsive UI using Ant Design and Tailwind CSS to enhance user experience.",
      "Integrated automated email alerts via SMTP for real-time order status updates.",
      "Designed and documented RESTful APIs to ensure seamless frontend-backend integration.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "Ant Design",
      "Tailwind CSS",
      "REST APIs"
    ],
  },
  {
    id: "um6p-intern-2023",
    title: "Web Developer Intern",
    company: "UM6P (Université Mohammed VI Polytechnique)",
    location: "Benguerir, Morocco",
    logo: "/img/experience/um6p.png",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    description: [
      "Built a departmental resource reservation web application using PHP and MySQL.",
      "Conceptualized and implemented resource planning features to solve scheduling conflicts.",
      "Improved interface usability and accessibility based on direct user feedback cycles.",
    ],
    skills: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "User Experience (UX)"
    ],
  },
];

export function getExperienceById(id: string): ExperienceEntry | undefined {
  return experienceData.find((exp) => exp.id === id);
}

export function getExperiencesByCompany(company: string): ExperienceEntry[] {
  return experienceData.filter((exp) =>
    exp.company.toLowerCase().includes(company.toLowerCase())
  );
}