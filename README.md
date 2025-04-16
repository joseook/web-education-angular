# Academia Futuro Brilhante - Educational Institution Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive website for "Academia Futuro Brilhante" (Bright Future Academy), an educational institution. This project is built with Angular 19, featuring a beautiful UI with animations, theming support (light/dark mode), and a component-based architecture.

![Academia Futuro Brilhante](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Component Library](#component-library)
- [Animations](#animations)
- [Theming](#theming)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark/Light Mode**: Theme switcher with persistent preferences
- **Animation System**: Custom animation directives for engaging user experience
- **Component Library**: Reusable UI components (buttons, cards, etc.)
- **Modern UI**: Clean, attractive design with TailwindCSS
- **Angular 19**: Built with the latest Angular framework features
- **Performance Optimized**: Fast loading and rendering

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/        # Layout components (navbar, footer, etc.)
│   │   └── ui/            # Reusable UI components
│   │       ├── animations/  # Animation directives
│   │       ├── button/      # Button component
│   │       ├── card/        # Card components
│   │       └── theme-switcher/ # Theme toggle component
│   ├── pages/             # Page components
│   │   ├── about/         # About us page
│   │   ├── contact/       # Contact page
│   │   ├── courses/       # Courses page
│   │   └── home/          # Homepage
│   ├── app.component.ts   # Root component
│   └── app.routes.ts      # Application routes
├── global_styles.css      # Global styles (TailwindCSS)
└── main.ts                # Application bootstrap
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- pnpm (v7.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-education-angular.git
   cd web-education-angular
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 🧩 Component Library

The project includes several reusable UI components:

### Button Component

A versatile button component with multiple variants and sizes:

```html
<ui-button variant="default" size="lg">Click Me</ui-button>
```

**Variants**: default, outline, secondary, destructive, ghost, link  
**Sizes**: default, sm, lg, icon

### Card Component

Card components for displaying content in a structured way:

```html
<ui-card>
  <ui-card-header>
    <ui-card-title>Card Title</ui-card-title>
    <ui-card-description>Card description</ui-card-description>
  </ui-card-header>
  <ui-card-content>
    Main content goes here
  </ui-card-content>
</ui-card>
```

## 🎬 Animations

The project uses custom animations through the `MotionDirective`:

```html
<div uiMotion animation="fadeIn" [delay]="0.2">
  This content will fade in with a delay of 0.2 seconds
</div>
```

**Animation Types**:
- `fadeIn`: Simple fade-in effect
- `slideUp`: Slides element up while fading in
- `slideLeft`: Slides element from the right
- `slideRight`: Slides element from the left
- `zoom`: Zooms in while fading in

## 🎨 Theming

The project supports light and dark themes using TailwindCSS and a custom theme switcher component:

```html
<ui-theme-switcher></ui-theme-switcher>
```

The theme preference is saved in localStorage and respects the user's system preferences by default.

## 📦 Deployment

To build the project for production:

```bash
pnpm build
```

The built application will be in the `dist/` directory.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Angular and TailwindCSS
