# Ticket Managing

This is a fully responsive Ticket Management Mini Project built using Angular. The goal of this project was to dynamically change and render data based on the timeframe selected by the user. The application leverages Modern Signals API to fetch and manage ticket data efficiently.

## Table of Contents

- Overview
  - The Challenge
  - Links
- How to Build and Run
- My Process
  - Built With
  - What I Learned
  - Continued Development
  - Useful Resources
- Author
- Acknowledgments

---

## Overview

### The Challenge

The main challenges in this project were:

- **No CSS Frameworks**: Built using pure CSS without relying on frameworks like Bootstrap or Tailwind. CSS Grid was used for layout, and Flexbox handled smaller components.
- **Signals API**: Used Angular's Signals for state management and reactivity throughout the project.
- **Dynamic Data Rendering**: Rendered data dynamically based on the timeframe selected by the user. Achieved using Angular's built-in routing and query parameters.
- **TypeScript Best Practices**: Focused on strict typing, modular code structure, and JSDoc comments for better maintainability.

These goals ensured a clean, efficient, and modern implementation while pushing the boundaries of Angular's capabilities.

---

## How to Build and Run

To set up and run this project locally, follow these steps:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/ticket-managing.git
   cd ticket-managing
   ```

2. **Install Dependencies**
   Make sure you have Node.js and Angular CLI installed. Then run:

   ```sh
   npm install
   ```

3. **Run the Application**
   Start the development server:

   ```sh
   ng serve
   ```

   Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).

4. **Build for Production**
   To create a production-ready build, run:

   ```sh
   ng build --prod
   ```

5. **Environment Configuration**
   If the project requires an API key or specific environment variables, update the `environment.ts` file in the `src/environments` folder:
   ```ts
   export const environment = {
     production: false,
     apiUrl: "https://api.modernsignals.com",
   };
   ```

---

## My Process

### Built with

- Angular Framework: The core framework used to build the application, providing a robust and scalable structure.
- Sass for Styling: Utilized Sass to write clean, modular, and maintainable styles with features like variables, mixins, and nested rules.
- CSS Grid: Used CSS Grid for creating the overall layout, ensuring a responsive and flexible design.
- BEM Methodology: Followed the Block Element Modifier (BEM) methodology for writing structured and reusable CSS classes.

### What I Learned

- How to effectively use Angular Signals for state management.
- Implementing a theme switcher using Angular's built-in functionalities for dynamic styling and state management.

### Useful Resources

- [Angular Official Documentation](https://angular.io/docs) - Comprehensive guide to Angular.
- [BEM Methodology](http://getbem.com/) - Learn more about BEM for structured CSS.
