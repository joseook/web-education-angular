# Academia Futuro Brilhante - Technical Documentation

This document provides in-depth technical information about the Academia Futuro Brilhante Angular application.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Component Documentation](#component-documentation)
- [Routing System](#routing-system)
- [Theme System](#theme-system)
- [Animation System](#animation-system)
- [TailwindCSS Configuration](#tailwindcss-configuration)
- [Development Guidelines](#development-guidelines)

## Architecture Overview

This project follows a component-based architecture using Angular 19 with the following key design principles:

- **Standalone Components**: All components use the standalone API
- **Separation of Concerns**: UI components separated from layout and page components
- **Composition Pattern**: UI components are designed to be composed together
- **Reactive Patterns**: Observable patterns for state management
- **Mobile-First Design**: Responsive from the ground up

## Component Documentation

### UI Components

#### Button Component (`src/app/components/ui/button/button.component.ts`)

The button component provides a flexible button with various visual styles and sizes.

**Properties:**
- `variant: ButtonVariant` - The visual style of the button (default, outline, secondary, destructive, ghost, link)
- `size: ButtonSize` - The size of the button (default, sm, lg, icon)
- `disabled: boolean` - Whether the button is disabled

**Usage:**
```html
<ui-button variant="destructive" size="lg" [disabled]="isLoading">
  Delete Item
</ui-button>
```

**Ripple Effect:**
The button includes a custom ripple effect animation that activates on click.

#### Card Component (`src/app/components/ui/card/card.component.ts`)

A set of card components for structured content display.

**Components:**
- `CardComponent` - Base container
- `CardHeaderComponent` - Header section
- `CardTitleComponent` - Card title
- `CardDescriptionComponent` - Card description
- `CardContentComponent` - Main content area
- `CardFooterComponent` - Footer section

**Properties:**
- `hoverEffect: boolean` - Whether to apply hover effects
- `clickable: boolean` - Whether the card should appear clickable

**Usage:**
```html
<ui-card [hoverEffect]="true">
  <ui-card-header>
    <ui-card-title>Card Title</ui-card-title>
    <ui-card-description>Card description text</ui-card-description>
  </ui-card-header>
  <ui-card-content>
    <p>Main content goes here</p>
  </ui-card-content>
  <ui-card-footer>
    <ui-button>Action</ui-button>
  </ui-card-footer>
</ui-card>
```

#### Theme Switcher (`src/app/components/ui/theme-switcher/theme-switcher.component.ts`)

A component that toggles between light and dark themes.

**Features:**
- Persists theme preference in localStorage
- Respects user's system preferences by default
- Smooth transitions between themes

**Implementation:**
The theme switcher uses Tailwind's dark mode with class strategy. It adds/removes the 'dark' class on the document's html element.

### Layout Components

#### Main Layout (`src/app/components/layout/main-layout/main-layout.component.ts`)

The main application layout that wraps all pages.

**Structure:**
- Navbar (fixed at top)
- Main content area (flexible height)
- Footer (at bottom)

#### Navbar (`src/app/components/layout/navbar/navbar.component.ts`)

The navigation header with responsive design.

**Features:**
- Mobile dropdown menu with animation
- Shrinks on scroll
- Active route highlighting

#### Footer (`src/app/components/layout/footer/footer.component.ts`)

The site footer with multiple sections.

## Animation System

### Motion Directive (`src/app/components/ui/animations/motion.directive.ts`)

A directive that applies entrance animations to elements.

**Properties:**
- `animation: string` - Type of animation (fadeIn, slideUp, slideLeft, slideRight, zoom)
- `delay: number` - Delay in seconds
- `duration: number` - Duration in seconds

**Implementation:**
The directive applies CSS transitions directly using Angular's Renderer2, avoiding the Animation Builder to prevent circular dependency issues.

## Routing System

The application uses Angular's router with the following routes:

- `/` - Home page
- `/cursos` - Courses page
- `/sobre` - About page
- `/contato` - Contact page

## Theme System

The theme system is built on Tailwind CSS with a custom dark mode implementation:

1. Default theme variables are set in the Tailwind configuration
2. Dark mode uses the class strategy (not media query)
3. Theme preferences are stored in localStorage
4. System preferences are respected by default

### Theme Variables

Key color variables include:

- `primary`: Brand primary color
- `secondary`: Secondary color
- `background`: Background color
- `foreground`: Text color
- `muted`: Muted/subdued colors
- `card`: Card background colors
- `border`: Border colors

## TailwindCSS Configuration

The project uses a custom Tailwind configuration with:

- Custom color scheme
- Extended animation properties
- Extended typography settings
- Custom shadow settings

## Development Guidelines

### Component Creation

When creating new components:

1. Use the standalone component pattern
2. Keep components small and focused
3. Use composition over inheritance
4. Follow the existing naming and structure patterns

### Style Guidelines

1. Use Tailwind utility classes for styling
2. Avoid custom CSS when possible
3. Use the established color variables
4. Follow mobile-first responsive design

### Performance Considerations

1. Use `OnPush` change detection for complex components
2. Optimize images and assets
3. Lazy load routes and components where appropriate
4. Use memoization for expensive computations 