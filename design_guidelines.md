# Design Guidelines: Company Secretary Business Website

## Design Approach
**Hybrid Professional Services Design** - Combining Material Design's structured approach with elevated visual sophistication inspired by modern legal/financial service platforms (Stripe's restraint + LinkedIn's professionalism + traditional CS firm trust indicators).

## Typography System

**Primary Font:** Inter or DM Sans (Google Fonts)
- Hero Headlines: 48-64px, font-weight 700
- Section Headings: 32-40px, font-weight 600
- Service Cards: 24px, font-weight 600
- Body Text: 16-18px, font-weight 400
- Small Text/Labels: 14px, font-weight 500

**Secondary Font:** Merriweather or Lora for testimonial quotes and distinguished content blocks

## Layout System
**Tailwind Spacing Units:** Consistently use 4, 8, 12, 16, 20, 24, 32 units
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-8
- Element gaps: gap-8 for grids, gap-4 for tight groupings
- Container: max-w-7xl for full sections, max-w-4xl for content-focused areas

## Component Library

### Hero Section (Full-Screen Slider)
- 3-slide carousel with auto-advance (5s intervals)
- Slide 1: "Professional Company Secretary Services" - showcase main value proposition
- Slide 2: "Corporate Compliance Made Simple" - highlight expertise
- Slide 3: "Trusted by 500+ Companies" - build credibility
- Each slide: Large headline (left-aligned), supporting text, dual CTAs ("Get Consultation" + "View Services")
- Overlay gradient for text readability
- Slide indicators and arrow navigation

### Services Grid
- 3-column grid (desktop), 1-column (mobile)
- Each card: Icon (Heroicons), service title, 2-3 line description, "Learn More" link
- Cards with subtle border, hover lift effect
- 9 primary services displayed

### Compliance Calendar Widget
- Prominent sidebar/dedicated section
- Scrollable list of upcoming deadlines
- Date badge + compliance description
- Color-coded by urgency (approaching deadlines highlighted)
- "View Full Calendar" CTA

### Statistics Counter
- 4-metric horizontal layout
- Large numbers with animated count-up on scroll
- Metrics: Years of Experience, Clients Served, Cases Completed, Success Rate
- Icons above each metric

### Team Profiles
- 4-column grid of team members (3-col tablet, 2-col mobile)
- Professional headshots (circular or square with rounded corners)
- Name, designation (FCS/ACS credentials prominent), brief bio
- "View Profile" modal or linked pages for detailed information

### Testimonials Carousel
- 2-testimonials per view (desktop), 1 (mobile)
- Client name, company, professional headshot placeholder
- Quote in larger serif font
- Star rating visualization
- Navigation dots and arrows

### News/Updates Section
- Card-based layout, 3 recent updates
- Each card: Date badge, headline, excerpt (2 lines), "Read More"
- Thumbnail image placeholder for each update
- "View All News" button

### Contact Forms
- Multi-step consultation request form
- Fields: Name, Email, Phone, Service Interest (dropdown), Message
- WhatsApp quick-contact floating button (bottom-right)
- Form validation with helpful error messages

## Visual Hierarchy Patterns
- Hero takes 80vh
- Services section immediately follows (no excessive whitespace)
- Alternating section backgrounds (white, subtle gray) for depth
- Statistics counter as visual break between content sections
- Footer with comprehensive links, certifications, contact info

## Imagery Guidelines
- Hero: Professional office/business meeting imagery (3 distinct images for slider)
- Services: Modern iconography (Heroicons library)
- Team: Professional headshots with consistent lighting/background
- About/Vision sections: Corporate setting, team collaboration imagery
- Quality over quantity - strategic placement, not decoration

## Navigation Structure
**Desktop:** Horizontal navbar with dropdowns for Services submenu
**Mobile:** Hamburger menu with expandable sections
- Logo (left), Nav links (center), "Contact Us" CTA button (right)
- Sticky on scroll with subtle shadow

## Mobile Responsiveness
- Hero text scales down: 36-40px headlines on mobile
- Services grid: Stack to single column
- Team profiles: 2-column on mobile
- Statistics: 2x2 grid on mobile
- Contact form: Full-width, simplified layout
- WhatsApp button remains accessible (bottom-right)

## Accessibility Standards
- ARIA labels for all interactive elements
- Keyboard navigation support for carousel and modals
- Form inputs with proper labels and error states
- Sufficient contrast ratios throughout
- Focus indicators on all interactive elements

This design creates a professional, trustworthy presence while maintaining modern web standards and excellent user experience for potential clients seeking Company Secretary services.