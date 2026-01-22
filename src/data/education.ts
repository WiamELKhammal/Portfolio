// src/data/education.ts
// Education and academic background data

import type { EducationEntry } from "../types";

/**
 * Education entries
 * Listed in reverse chronological order (most recent first)
 */
export const educationData: EducationEntry[] = [
  {
    id: "esi-rabat-engineering-2025",
    degree: "State Engineering Degree – Information Systems and Digital Transformation",
    institution: "ESI",
    location: "Rabat, Morocco",
    startDate: "Sep 2022",
    endDate: "Jul 2025",
    description: [
      "Specialized in architecting complex information systems and leading large-scale digital transformation initiatives.",
      "Mastered Full-Stack development using Java/JEE, Spring Boot, and modern JavaScript frameworks.",
      "Developed expertise in business process modeling, IT governance, and agile project management.",
      "Conducted analysis and design of information systems using UML and design patterns for scalable solutions.",
      "Explored the integration of emerging technologies within organizational infrastructures to improve efficiency.",
    ],
    skills: [
      "Information Systems",
      "Digital Transformation",
      "Java / JEE",
      "Spring Boot",
      "UML",
      "Agile (Scrum)",
      "Project Management",
      "Business Intelligence",
    ],
  },
  {
    id: "cpge-marrakesh-2022",
    degree: "Classes Préparatoires (MPSI/MP) – Math, Physics, and Engineering Sciences",
    institution: "CPGE Ibn Taymiya",
    location: "Marrakesh, Morocco",
    startDate: "Sep 2020",
    endDate: "Jul 2022",
    description: [
      "Completed an intensive two-year program preparing for national competitive entrance exams to top engineering schools (CNC).",
      "Ranked in competitive exams, demonstrating strong resilience and advanced analytical capabilities.",
      "Deep focus on advanced mathematics (calculus, linear algebra) and theoretical physics.",
      "Introduced to algorithmic thinking and engineering sciences (SI).",
    ],
    skills: [
      "Advanced Mathematics",
      "Physics",
      "Engineering Sciences",
      "Problem Solving",
      "Critical Thinking",
      "Algorithmic Logic",
    ],
  },
  {
    id: "bac-benguerir-2020",
    degree: "Baccalaureate – Mathematical Sciences A",
    institution: "Lycée Shahid Saleh Sarghini",
    location: "Benguerir, Morocco",
    startDate: "Sep 2019",
    endDate: "Jul 2020",
    description: [
      "Focused on a rigorous curriculum of mathematics and physics.",
      "Graduated with honors, establishing a strong foundation for higher technical education.",
    ],
    skills: [
      "Mathematics",
      "Physics",
      "Logical Reasoning",
    ],
  },
];

/**
 * Get education by ID
 */
export function getEducationById(id: string): EducationEntry | undefined {
  return educationData.find((edu) => edu.id === id);
}

/**
 * Get education entries with specific degree keywords
 */
export function getEducationByInstitution(
  institution: string,
): EducationEntry[] {
  return educationData.filter((edu) =>
    edu.institution.toLowerCase().includes(institution.toLowerCase()),
  );
}

/**
 * Get highest degree
 */
export function getHighestDegree(): EducationEntry {
  return educationData[0];
}