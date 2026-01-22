---
title: "Modern Weather Dashboard"
description: "A responsive weather application featuring real-time city search, detailed hourly/daily forecasts, and interactive condition tracking."
publishDate: "2025-01-15"
tags: ["Next.js", "Tailwind CSS", "OpenWeather API", "Jest", "React Testing Library"]
link: "https://github.com/WiamELKhammal/nextjs-weather-app"
linkText: "View on GitHub"
featured: true
visibility: public
---
## Overview

The **Modern Weather Dashboard** is a high-performance web application designed to provide users with accurate, real-time meteorological data. Built with a focus on speed and user experience, the app allows users to search for any city globally and receive instant updates on current conditions, as well as short-term and long-term forecasts.

By integrating the **OpenWeather API**, the project delivers precise data points including temperature, humidity, wind speed, and UV index, all wrapped in a clean, adaptive interface.

## The Challenge

Building a reliable weather tool requires more than just fetching data; it involves handling various states and ensuring cross-platform stability:

* **API Integration:** Efficiently managing asynchronous calls to the OpenWeather API while handling rate limits and potential errors.
* **Data Visualization:** Converting complex JSON data into user-friendly hourly and daily forecast charts.
* **Testing & Reliability:** Ensuring the UI remains stable during state changes by implementing a rigorous testing suite with **Jest** and **React Testing Library**.
* **Responsive Design:** Using **Tailwind CSS** to ensure the dashboard remains perfectly readable on everything from mobile devices to ultra-wide monitors.

## Technical Implementation

### 1. Frontend Architecture (Next.js & Tailwind)

The application utilizes **Next.js** for its optimized rendering and routing capabilities. **Tailwind CSS** was used to build a "glassmorphism" UI that adapts its theme based on the current weather conditions (e.g., sunny vs. rainy).

### 2. Quality Assurance (Jest & RTL)

To ensure a bug-free experience, the project features comprehensive unit and integration tests:

* **Component Testing:** Verified that search bars and forecast cards render correctly under various conditions.
* **Mocking APIs:** Used Jest to mock API responses, ensuring the app handles "City Not Found" or "Network Error" states gracefully.

### 3. Real-Time Data Fetching

The app implements debounced search functionality to limit API calls and uses React hooks to manage the global state of weather data across different dashboard components.

## Technology Stack

| Layer                         | Technology            |
| :---------------------------- | :-------------------- |
| **Framework**           | Next.js (React)       |
| **Styling**             | Tailwind CSS          |
| **Data Source**         | OpenWeather API       |
| **Unit Testing**        | Jest                  |
| **Integration Testing** | React Testing Library |

---
