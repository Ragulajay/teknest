# TekNest Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from modern educational platforms (Coursera, Udacity) combined with tech company aesthetics (Vercel, Linear) to create a professional yet approachable student-focused experience.

## Core Design Principles
1. **Student-Centric**: Build trust and credibility while remaining accessible and encouraging
2. **Technical Excellence**: Showcase expertise through clean, modern design patterns
3. **Project-Focused**: Highlight real results and success stories prominently

## Typography System
- **Headings**: Inter or Poppins (Bold/Semibold) - modern, technical feel
- **Body**: Inter or system fonts (Regular/Medium) - excellent readability
- **Accent**: Mono font for technical details and code snippets

**Scale**:
- Hero Headline: text-5xl lg:text-7xl font-bold
- Section Headers: text-3xl lg:text-5xl font-bold
- Subheadings: text-xl lg:text-2xl font-semibold
- Body: text-base lg:text-lg
- Captions: text-sm

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 lg:py-24
- Component gaps: gap-8 lg:gap-12
- Card padding: p-6 lg:p-8
- Container: max-w-7xl mx-auto px-6 lg:px-8

## Page Structure

### Hero Section (100vh)
- Full-screen immersive hero with large background image showing students working on projects
- Centered content with bold headline, compelling subheadline, and dual CTA buttons
- Floating stats bar at bottom: "500+ Projects Completed | 95% Success Rate | 24/7 Support"
- Buttons with blurred backgrounds (backdrop-blur-md bg-white/20)

### Services Section
**Three-column grid** (grid-cols-1 md:grid-cols-3):
- Software Development card with custom icon
- Hardware Projects card with custom icon  
- IoT Solutions card with custom icon
Each card includes: Icon, title, description (3-4 lines), feature list (4-5 items), "Learn More" link

### Why Choose TekNest Section
**Two-column layout** (grid-cols-1 lg:grid-cols-2):
- Left: Image showcasing mentor-student collaboration
- Right: Bullet points with checkmark icons highlighting expertise, support, success rate, resources

### Project Showcase/Portfolio
**Masonry-style grid** (3 columns on desktop, 2 on tablet, 1 on mobile):
- 6-8 project cards with hover effects
- Each card: Project image, category tag, title, brief description
- Mix of software UI screenshots, hardware prototypes, IoT device photos

### Process/How It Works
**Four-step horizontal timeline** (grid-cols-1 md:grid-cols-4):
- Step numbers in circles, connecting line between steps
- Each step: Number, title, brief description
- Steps: Consultation → Planning → Development → Delivery

### Testimonials Section
**Carousel with three visible cards** (grid-cols-1 md:grid-cols-3):
- Student photo, quote, name, university, project type
- 6-8 testimonials total in rotation
- Star ratings displayed

### Tech Stack/Expertise
**Badge grid showcase** (grid-cols-2 md:grid-cols-4 lg:grid-cols-6):
- Technology logos: React, Python, Arduino, Raspberry Pi, Node.js, MongoDB, IoT platforms, etc.
- Subtle hover lift effect

### CTA Section
Full-width with background image (students celebrating project success):
- Centered headline: "Ready to Bring Your Project to Life?"
- Dual CTAs: "Start Your Project" (primary) + "Schedule Consultation" (secondary)
- Trust indicators below: "Free Initial Consultation | Affordable Pricing | Expert Mentors"

### Footer
**Four-column grid** (grid-cols-1 md:grid-cols-4):
- Column 1: TekNest logo, tagline, social links
- Column 2: Quick Links (Services, Portfolio, About, Contact)
- Column 3: Services list
- Column 4: Newsletter signup with email input + "Subscribe" button, contact info
- Bottom bar: Copyright, Privacy Policy, Terms

## Component Library

### Cards
- Rounded corners: rounded-xl lg:rounded-2xl
- Elevation: shadow-lg hover:shadow-xl transition
- Padding: p-6 lg:p-8
- Border: border border-gray-200 (subtle)

### Buttons
- Primary: Large, bold, rounded-lg, px-8 py-4
- Secondary: Outlined style with hover fill
- On images: backdrop-blur-md with semi-transparent background

### Form Inputs
- Rounded: rounded-lg
- Padding: px-4 py-3
- Border: border-2 with focus ring
- Labels: font-medium mb-2

### Icons
Use Heroicons via CDN for all interface icons
Custom project category icons as placeholders: <!-- CUSTOM ICON: Software Development -->

## Images Section

### Required Images:
1. **Hero Background**: Large (1920x1080) - Students collaborating on laptops with electronics/hardware on desk, modern workspace, energetic atmosphere
2. **Why Choose Us**: Medium (800x600) - Mentor guiding student through project, close-up of hardware/circuit board work
3. **Project Portfolio** (6-8 images):
   - Software UI screenshots (dashboard, mobile app)
   - Hardware prototypes (Arduino/Raspberry Pi projects)
   - IoT devices and sensors
   - Student project presentations
4. **Testimonial Photos**: Headshots of 6-8 students (diverse, professional)
5. **CTA Background**: Wide (1920x800) - Students celebrating completed project, holding hardware/showing laptop screen
6. **Service Icons**: Use Heroicons or placeholder comments for custom illustrations

### Image Treatment:
- Hero: Subtle gradient overlay for text contrast
- Cards: Aspect ratio 16:9 or 4:3, object-cover
- Hover: Slight zoom (scale-105) on portfolio items
- All images: rounded corners matching card style

## Accessibility
- Minimum touch targets: 44x44px
- Form labels always visible
- Skip navigation link
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation fully supported

## Animations
**Minimal and purposeful**:
- Scroll-triggered fade-in for sections (once)
- Smooth hover transitions (200-300ms)
- Carousel auto-advance with manual controls
- NO parallax, NO complex scroll animations

This design creates a professional, trust-building experience that positions TekNest as the expert choice for student project support while maintaining approachability for the target audience.