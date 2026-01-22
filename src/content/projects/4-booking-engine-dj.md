---
title: "A booking engine for elite DJ talent"
description: "A luxury multi-step booking engine for elite DJ talent and event production management."
publishDate: "2024-12-15"
tags: ["React", "Framer Motion", "State Management", "Editorial UX"]
link: "https://github.com/yourusername/dj-booking-portal"
linkText: "View on GitHub"
featured: true
visibility: public
---
## Overview

The **Sound & System Portal** is a bespoke booking experience designed for a premium DJ agency. Moving away from standard contact forms, this platform utilizes a high-end, multi-step flow that allows clients to build their event atmosphere in real-time.

The project emphasizes **Editorial UX**, combining sophisticated typography with a seamless, state-driven interface to mirror the luxury of the events being booked.

---

## The Challenge

Converting a complex service menu—ranging from DJ Tiers to lighting upgrades—into a frictionless digital experience:

* **Dynamic State Management:** Syncing pricing and selections across six distinct steps without page refreshes.
* **Luxury Branding vs. Functionality:** Maintaining a "Bone White" minimalist aesthetic while providing clear real-time validation.
* **Editorial Flow:** Ensuring the progress bar and navigation feel like a premium magazine experience.

---

## Technical Implementation

### 01. Dynamic Multi-Step Routing

Implemented custom routing logic using **React Router v6** to manage the wedding inquiry flow. This ensures that the user's progress is tracked and the navigation footer intelligently hides on home and success pages.

### 02. Real-Time Logic & Pricing

Developed a centralized state in the parent component that calculates the "Estimated Investment" instantly. Every selection—from the DJ Tier to Live Music add-ons—updates the global total without cascading render errors.

### 03. Advanced Form Validation

Engineered a custom validation system that locks the "Next" button until required fields are met. This includes email/phone regex patterns and selection checks, ensuring only high-quality leads reach the final stage.

---

## Technology Stack

| Layer                | Technology                        |
| :------------------- | :-------------------------------- |
| **Frontend**   | React.js (Vite)                   |
| **Styling**    | CSS-in-JS, Bootstrap 5            |
| **Routing**    | React Router v6                   |
| **State**      | React Hooks (useState, useEffect) |
| **Animations** | Framer Motion / CSS Transitions   |
| **Workflow**   | Component-Driven Development      |

---
