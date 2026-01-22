---
title: "Internship Tracking Application"
description: "A professional JavaFX desktop suite for academic institutions to manage student internship assignments, supervisor evaluations, and progress tracking."
publishDate: "2024-11-10"
tags: ["Java", "JavaFX", "Scene Builder", "SQLite", "Object-Oriented Programming"]
link: "#"
linkText: "Private Project"
featured: true
visibility: private
---
## Overview

The **Internship Tracking Application** is a robust desktop solution designed for university departments to digitize the internship lifecycle. Built using **JavaFX**, the app provides a centralized interface for coordinating between students, academic tutors, and company supervisors.

The platform moves away from manual spreadsheets by providing a structured database environment to record internship start/end dates, company details, and student performance metrics in real-time.

## The Problem

Managing hundreds of student internships simultaneously leads to several administrative bottlenecks:

* **Fragmented Records:** Internship contracts and evaluations are often stored in physical files or disconnected digital folders.
* **Manual Evaluation Tracking:** It is difficult for teachers to see which students have been visited by supervisors or which evaluations are pending.
* **Data Entry Errors:** Without a structured GUI, data entry for grades and company contact information is prone to mistakes.
* **Limited Reporting:** Generating a summary of student progress across a whole semester is time-consuming without a query-able database.

## Technical Implementation

### 1. Graphical User Interface (JavaFX & Scene Builder)

The UI was developed using **JavaFX** and **FXML**, following a clean, modern aesthetic.

* **Interactive Dashboards:** Tables and charts provide a quick overview of internship statuses (e.g., "In Progress," "Completed," or "Pending Evaluation").
* **Responsive Layouts:** Used AnchorPanes and VBox/HBox containers to ensure the application scales correctly on different monitor resolutions.

### 2. Desktop Database Integration

To ensure the app is portable and fast, I implemented a local database strategy:

* **SQLite / H2 Database:** The app stores all student and company data locally, allowing for complex searches and filtering without needing an internet connection.
* **CRUD Operations:** Developed a robust logic layer to Create, Read, Update, and Delete records for students and assignments.

### 3. Object-Oriented Design (MVC)

The project follows the **Model-View-Controller (MVC)** design pattern:

* **Model:** Handles the data objects (Student, Internship, Evaluation).
* **View:** The FXML files defining the visual look.
* **Controller:** The Java logic that connects user clicks to database actions.

## Technology Stack

| Layer                   | Technology                  |
| :---------------------- | :-------------------------- |
| **Language**      | Java                        |
| **GUI Framework** | JavaFX                      |
| **UI Design**     | Scene Builder (FXML)        |
| **Database**      | SQLite                      |
| **Architecture**  | MVC (Model-View-Controller) |

---
