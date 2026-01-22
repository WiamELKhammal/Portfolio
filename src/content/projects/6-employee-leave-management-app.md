---
title: "Employee Leave Management App"
description: "A modern Angular-based administrative dashboard for tracking employee leave requests with real-time API integration and dynamic status filtering."
publishDate: "2024-09-12"
tags: ["Angular", "TypeScript", "REST API", "HttpClient", "CRUD"]
link: "https://github.com/yourusername/leave-management"
linkText: "View on GitHub"
featured: true
visibility: public

---
## Overview

The **Employee Leave Management App** is a streamlined administrative tool designed to digitize and simplify the workflow of requesting and approving time off. Built with **Angular**, the application provides a centralized interface that replaces manual tracking with a high-performance digital dashboard.

By connecting to a live REST API, the platform demonstrates full **CRUD (Create, Read, Update, Delete)** capabilities, ensuring that data is persisted and managed through professional-grade HTTP protocols.

## The Challenge

Efficient HR management requires a balance between user simplicity and data accuracy:

* **State Synchronization:** Ensuring the UI reflects the current status of a request immediately after a manager approves or rejects it.
* **Data Organization:** Handling large lists of requests while providing intuitive filters for "Pending" or "Approved" items.
* **API Reliability:** Managing asynchronous communication with an external API while providing a smooth, non-blocking user experience.
* **Form Validation:** Ensuring that leave dates and reasons are correctly formatted before being sent to the backend.

## Technical Implementation

### 1. Component-Based Architecture (Angular)

The application follows a modular design, breaking the interface into reusable components like the **Request Table**, **Status Filters**, and **Submission Modals**. This ensures the codebase is scalable and easy to debug.

### 2. REST API Integration (HttpClient)

I utilized the **Angular HttpClient** module to power the application's data layer:

* **Live Data Fetching:** Automatically populates the dashboard with real-time data from an external REST API.
* **Asynchronous Updates:** Implemented logic to handle POST and PUT requests, allowing users to submit new leave forms and admins to update statuses without refreshing the page.

### 3. Dynamic Filtering & UI

To optimize the user experience, I engineered a custom filtering system:

* **Tab-Based Navigation:** Users can instantly switch views between "All," "Pending," and "Approved" requests.
* **Modal Forms:** Integrated a sleek modal system for data entry, keeping the workflow fast and focused.
* **Modern CSS:** Built a responsive, clean UI that adapts to different screen sizes while maintaining professional aesthetics.

## Technology Stack

| Layer                   | Technology                      |
| :---------------------- | :------------------------------ |
| **Framework**     | Angular                         |
| **Language**      | TypeScript                      |
| **Data Fetching** | Angular HttpClient (RxJS)       |
| **Backend API**   | REST API (miniprojectideas.com) |
| **Styling**       | Modern CSS3 / HTML5             |

---

**Would you like me to add a "How to Run" section that explains how to set up the Angular CLI environment for this project?**
