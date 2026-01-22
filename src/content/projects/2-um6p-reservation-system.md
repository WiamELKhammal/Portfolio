---
title: "Full-Stack Reservation & Order Platform"
description: "An enterprise-grade reservation system developed at UM6P, featuring Spring Security, JWT authentication, and automated notification workflows."
publishDate: "2024-09-01"
tags: ["Spring Boot", "React.js", "Spring Security", "JWT", "Ant Design"]
link: "#"
linkText: "Private Project"
featured: true
visibility: private

---
## Overview

During my tenure as a **Full-Stack Developer Intern at UM6P**, I architected and developed a robust reservation and order tracking platform. The system was designed to bridge the gap between complex backend logistics and a high-end user interface, providing a seamless experience for both administrators and end-users.

The project focused heavily on **Security** and **Scalability**, ensuring that sensitive academic data remains protected while maintaining high system performance through a decoupled architecture.

## The Challenge

Developing a professional-grade reservation system requires solving several technical hurdles:

* **Access Control:** Implementing a secure way to distinguish between regular users and administrators to protect sensitive dashboards.
* **State Synchronization:** Keeping the frontend UI updated in real-time as order statuses change in the backend.
* **API Standardization:** Designing and documenting RESTful endpoints that allow the React frontend to communicate efficiently with the Java backend.
* **User Engagement:** Creating a UI that feels modern and professional while remaining functional for data-heavy administrative tasks.

## Technical Implementation

### 1. Enterprise Security & JWT Flow

To secure the administration dashboard, I engineered a stateless authentication layer using **Spring Security** and **JWT**.

**The Security Lifecycle:**

* **Identity Verification:** The user submits credentials via the React frontend.
* **Token Issuance:** The Spring Boot backend validates credentials and generates a **JWT signed with a secret key**, containing user roles.
* **Authorization Header:** For subsequent requests, the frontend includes the token in the `Authorization: Bearer <token>` header.
* **Validation Filter:** A custom filter intercepts requests, validates the signature, and sets the security context for authorized access to protected routes.

### 2. Modern Frontend (React & Ant Design)

I designed a sophisticated UI/UX using a combination of enterprise-ready styling tools:

* **Ant Design:** Leveraged AntD components for complex data tables and administrative forms, ensuring a consistent enterprise look.
* **Tailwind CSS:** Used for custom layouts and responsive design, making the platform fully accessible across mobile and desktop devices.

### 3. Automated Communication (SMTP)

To solve the "tracking" problem, I integrated an automated notification engine:

* **Real-Time Alerts:** Developed an SMTP-based service that triggers automated emails whenever an order status is updated (e.g., from "Pending" to "Confirmed").

### 4. RESTful API Design

I focused on creating a "Frontend-First" API contract:

* **Documented Endpoints:** Ensured seamless integration through clear documentation of JSON structures and HTTP methods.
* **Global Exception Handling:** Implemented a unified error-handling mechanism to provide clear feedback to the frontend during API failures.

## Technology Stack

| Layer                   | Technology               |
| :---------------------- | :----------------------- |
| **Backend**       | Java, Spring Boot       |
| **Security**      | Spring Security, JWT     |
| **Frontend**      | React.js                 |
| **UI Frameworks** | Ant Design, Tailwind CSS |
| **Communication** | Java Mail Sender (SMTP)  |
| **Database**      | MySQL                    |

---

## Conclusion

This internship project at **UM6P** successfully demonstrated how a modern tech stack can modernize legacy reservation processes. By combining the security of **Spring Boot** with the flexibility of **React**, I delivered a tool that is not only functional but also secure and scalable for institutional use.
