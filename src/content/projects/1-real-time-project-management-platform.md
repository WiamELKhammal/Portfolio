---
title: "Real-Time Project Management Platform"
description: "A cloud-based EdTech platform for real-time academic project tracking, student-teacher collaboration, and secure file management."
publishDate: "2025-03-20"
tags: ["Next.js", "TypeScript", "Express.js", "Azure", "SMTP", "Automation", "REST API"]
link: "https://github.com/WiamELKhammal/Cloud-projet"
linkText: "View on GitHub"
featured: true
visibility: public

---
## Overview

**Academic Project Management** is a professional-grade EdTech solution designed to centralize university workflows. By leveraging a multi-cloud architecture, this platform replaces chaotic email chains with a streamlined, transparent dashboard for both faculty and students.

The project focuses on high-speed data handling and secure file management, ensuring that academic progress is tracked accurately and documents are never lost.

<img width="945" height="363" alt="image" src="https://github.com/user-attachments/assets/0ab84ddc-ce59-4718-b80d-375fda24e530" />

## The Problem

Managing projects in a university setting presents several major challenges:

- **Information Silos:** Data is scattered across different platforms, making it hard to find a "single source of truth."
- **Progress Tracking:** Students struggle to visualize milestones, and teachers lack clear oversight.
- **Insecure File Handling:** Traditional methods lack the reliable, centralized storage needed for important academic documents.

## Technical Implementation

I designed a robust, multi-cloud system where each service handles a specific, critical task:

### 1. Authentication & Real-Time Sync (Firebase & Supabase)

- **Firebase Auth:** Provides a secure and seamless login experience for students and faculty.
- **Supabase:** Manages relational data and real-time synchronization to keep the dashboard updated.

### 2. Database & File Management (MongoDB Atlas)

- **Document Storage:** Used **MongoDB Atlas** to handle complex project metadata and student submissions.
- **Data Integrity:** Implemented backend logic for normalization and integrity checks across the database layers.

### 3. Automated Workflows (Azure Logic Apps)

To solve the communication gap, I implemented serverless automation using **Azure Logic Apps**:

- **HTTP Triggered Emails:** When a teacher posts a grade or comment, the backend sends an HTTP request to Azure.
- **Serverless Notification Engine:** Azure automatically processes the request and triggers an "Envoyer un e-mail (V3)" action to notify the student instantly.

### 4. Deployment (Render & Vercel)

- **Render:** Hosts the Node.js/Express backend for reliable API performance.
- **Vercel:** Deploys the Next.js frontend for optimized loading speeds.

## Technology Stack

| Layer                | Technology                      |
| :------------------- | :------------------------------ |
| **Frontend**   | Next.js, TypeScript, Vercel     |
| **Backend**    | Express.js, Node.js, Render     |
| **Database**   | MongoDB Atlas, Supabase         |
| **Auth**       | Firebase Authentication         |
| **Automation** | Azure Logic Apps (HTTP to SMTP) |

## Conclusion

This project highlights the efficiency of using modern cloud technologies to solve traditional problems. By combining **Firebase, Supabase, MongoDB Atlas, Azure, Render, and Vercel**, the application offers a performant, scalable, and accessible solution. This architecture simplifies student-teacher collaboration while guaranteeing security and a smooth user experience, illustrating how cloud computing can transform complex processes into intuitive tools.
