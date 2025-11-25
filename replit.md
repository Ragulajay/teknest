# TekNest - Final Year Project Support Platform

## Overview

TekNest is a comprehensive educational platform designed to support final year students in completing their academic projects across software development, hardware engineering, and IoT solutions. The platform features a modern marketing website showcasing services, success stories, and a contact system for student inquiries. Built with a focus on professional aesthetics inspired by modern EdTech platforms (Coursera, Udacity) combined with clean tech company design patterns (Vercel, Linear).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type-safe component development
- Wouter for lightweight client-side routing
- Single Page Application (SPA) architecture with a single Home page route

**UI Component System**
- Shadcn/ui component library (New York style variant) providing pre-built, customizable components
- Radix UI primitives for accessible, unstyled component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Component-based architecture with reusable UI elements stored in `client/src/components/ui/`

**Design System**
- Custom Tailwind configuration extending the base theme with:
  - HSL-based color system for light/dark mode support
  - Custom spacing scale (4, 6, 8, 12, 16, 20, 24, 32 units)
  - Typography system using Inter (body), Poppins (headings), and JetBrains Mono (code)
  - Elevation system with hover and active states (`hover-elevate`, `active-elevate-2`)
- Responsive design with mobile-first approach using Tailwind breakpoints

**State Management**
- TanStack Query (React Query) v5 for server state management and data fetching
- Local component state using React hooks
- Custom hooks for reusable logic (e.g., `use-mobile`, `use-toast`)

**Page Structure**
The home page follows a long-scroll landing page pattern with sections:
- Hero (full viewport height with background image)
- Services (three-column grid showcasing offerings)
- Why Choose Us (two-column layout with image and benefits)
- Portfolio (project showcase with filtering)
- Process (four-step workflow visualization)
- Testimonials (student success stories)
- Tech Stack (technology logos grid)
- CTA (call-to-action with background image)
- Contact Form
- Footer

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API server
- Dual-mode server setup:
  - Development: Vite dev server middleware for HMR and asset serving
  - Production: Static file serving from compiled build

**API Design**
- RESTful endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Contact submissions retrieval endpoint (`GET /api/contact`)
- JSON request/response format
- Error handling with appropriate HTTP status codes

**Development Workflow**
- Vite integration for fast development with hot module replacement
- Separate build process for client (Vite) and server (esbuild)
- Development server runs on port specified by environment
- Production build bundles server code and serves static client files

### Data Storage Solutions

**Database Schema**
- PostgreSQL database via Drizzle ORM
- Two main tables defined in `shared/schema.ts`:
  - `users`: User accounts with username/password authentication
  - `contact_submissions`: Form submissions with name, email, phone, project type, and message
- UUID primary keys using `gen_random_uuid()`
- Timestamps for submission tracking

**ORM Configuration**
- Drizzle ORM v0.39+ for type-safe database operations
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema-first approach with TypeScript types generated from database schema
- Zod integration for runtime validation of insert operations
- Migration management via drizzle-kit

**Storage Abstraction**
- `IStorage` interface defining data access methods
- `MemStorage` implementation for in-memory development/testing
- Designed to support swapping storage backends (database vs. in-memory)
- Methods for user management and contact submission CRUD operations

### Authentication and Authorization

**Current Implementation**
- User schema exists with username/password fields
- No active authentication middleware or session management implemented
- Prepared for future authentication implementation

**Planned Architecture**
- Password hashing (schema supports storing hashed passwords)
- Session management (connect-pg-simple dependency suggests PostgreSQL session store)
- User login/registration endpoints (not yet implemented)

### Form Handling & Validation

**Client-Side Validation**
- React Hook Form with @hookform/resolvers for form state management
- Zod schemas for type-safe validation rules
- Real-time validation feedback in contact form

**Server-Side Validation**
- Zod schema validation on API endpoints
- `insertContactSubmissionSchema` validates incoming contact form data
- Structured error responses for validation failures

## External Dependencies

### Third-Party Services

**Database Hosting**
- Neon serverless PostgreSQL (cloud-hosted database)
- Connection via `DATABASE_URL` environment variable
- Serverless driver optimized for edge/serverless environments

**Asset Management**
- Local asset storage in `attached_assets/` directory
- Generated images for hero backgrounds, portfolio examples, and testimonials
- Logo image stored locally

### Development Tools

**Replit-Specific Integrations**
- @replit/vite-plugin-runtime-error-modal for error overlays
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development environment indicators
- Conditional loading only in development mode on Replit

### UI Component Libraries

**Core Dependencies**
- Radix UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- Lucide React for consistent iconography
- React Icons (simple-icons) for technology logos
- Embla Carousel for project portfolio slider
- cmdk for command palette functionality
- date-fns for date formatting and manipulation

### Styling & Design

**CSS Framework**
- Tailwind CSS with PostCSS for processing
- Autoprefixer for browser compatibility
- Class Variance Authority (CVA) for component variant management
- clsx and tailwind-merge (via cn utility) for conditional class composition

### Build & Development

**Build Tools**
- Vite for frontend bundling and development server
- esbuild for server-side bundling (production)
- tsx for TypeScript execution in development
- TypeScript compiler for type checking

**Code Quality**
- TypeScript strict mode enabled
- ESNext module format with ES module interop
- Path aliases configured (@/, @shared/, @assets/)

### Fonts

**Google Fonts**
- Inter (weights: 400, 500, 600, 700, 800, 900) for body text
- Poppins (weights: 600, 700, 800) for headings
- JetBrains Mono (weights: 400, 500) for monospace/code snippets
- Loaded via Google Fonts CDN with font-display: swap