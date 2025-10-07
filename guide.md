# AfroHeat Fitness Website Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Component Architecture](#component-architecture)
5. [Text Content Locations](#text-content-locations)
6. [Image Asset Locations](#image-asset-locations)
7. [How to Update Content](#how-to-update-content)
8. [Development Workflow](#development-workflow)

## Technology Stack
- React (v18+)
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Framer Motion (animations)
- Tabler Icons (icon library)
- React Router DOM (navigation)

## Directory Structure
```
AfroHeat/
├── dist/                 # Build output directory
├── node_modules/         # Dependencies
├── public/
│   └── images/          # All image assets organized by category
├── scripts/             # Utility scripts
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── sections/    # Page sections (Hero, About, Contact, etc.)
│   │   └── ui/          # Reusable UI elements
│   ├── context/         # React context providers
│   ├── forms/           # Form components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route components
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── package.json         # Project dependencies and scripts
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

## Component Architecture
The application follows a component-based architecture:

### Layout Components
- `Header.tsx` - Navigation header
- `Footer.tsx` - Site footer

### Section Components
Located in `/src/components/sections/`:
- `HeroSection.tsx` - Homepage hero banner with slideshow
- `AboutSection.tsx` - About us information with testimonials
- `ContactSection.tsx` - Contact information and location
- `ServicesSection.tsx` - Fitness services and offerings
- `TrainersSection.tsx` - Trainer profiles and information
- `CommunitySection.tsx` - Community engagement section
- `FeatureSection.tsx` - Feature highlights
- `MembershipSection.tsx` - Membership information
- `OwlEventsSection.tsx` - Booking system integration
- `new-home-section.tsx` - Additional home page content
- `HamrawitMediaSection.tsx` - Media section for head coach
- `AboutTrainersSection.tsx` - Additional trainer information
- `AnimatedTrainersSection.tsx` - Animated trainer section

### UI Components
Located in `/src/components/ui/`:
- `infinite-moving-cards.tsx` - Testimonial carousel
- `signature-class-card.tsx` - Service offering cards
- `GoogleRating.tsx` - Google rating display
- `why-choose-us-cards.tsx` - Why choose us image gallery
- `ScheduleModal.tsx` - Schedule booking modal
- Other reusable UI elements

## Text Content Locations

### Main Sections with Text Content:

#### HeroSection.tsx
- Tagline: "More than your average fitness center"
- Headline: "A Vibrant community and creative hub for wellness and meaningful connections"
- Rating: "4.9" and "Trusted by hundreds of women"
- Button text: "Join us"
- Alt text for images

#### AboutSection.tsx
- Section title: "Where Women find strength & community"
- Value titles: "Safe Space", "Cultural Community", "Holistic Wellness"
- Value descriptions
- Statistic labels: "Years Strong", "Active Members", "Classes per Week"
- Service titles: "Dance Fitness", "Bootcamp", "Student Pass"
- Service descriptions
- Call-to-action text
- Testimonial quotes and author names
- Social media section text
- OwlEvents section text

#### ContactSection.tsx
- Section titles: "Contact Information", "Quick Actions"
- Contact item titles: "Visit Us", "Call Us", "Email Us", "Operating Hours"
- Address: "Addis Ababa, Ethiopia"
- Phone number: "+251 90 424 2222"
- Email: "afroheatfitness1@gmail.com"
- Operating hours
- Action text
- Quick action titles and descriptions
- Social media section: "Follow Us"

#### ServicesSection.tsx
- Section title: "All our services"
- Service titles and descriptions
- Call-to-action text

#### TrainersSection.tsx
- Trainer names and roles
- Trainer descriptions

## Image Asset Locations

All images are stored in `/public/images/`:

- `/public/images/about us/`
  - `/community engagement/` - Community event images
  - `/event & activities/` - Event and activity images
  - `/our space/` - Images of the facility
  - `/Transformation/` - Transform images
  - `founderpic.webp` - Founder portrait

- `/public/images/hero/` - Hero section background images
  - `grouppic.webp`, `yoga.webp`

- `/public/images/logos/` - Brand logos and patterns
  - Various logo files in different colors and formats

- `/public/images/mini phones/` - Social media phone mockup images
  - `instagram.webp`, `linkedin.webp`, `tiktok.webp`

- `/public/images/new/` - New section images
  - `boootcamp.webp`, `dance.webp`, `studio.webp`

- `/public/images/Trainers/` - Trainer profile images
  - Images of individual trainers

- `/public/images/why-us/` - Images for "Why Choose Us" section

- `/public/images/icons/` - Icon images

- `footer pattern.webp` - Footer pattern image

## How to Update Content

### Updating Text Content

1. **Locate the component**: Identify which section contains the text you want to update
2. **Open the file**: Navigate to `/src/components/sections/[ComponentName].tsx`
3. **Find the text**: Use Ctrl+F to search for the specific text you want to change
4. **Modify the text**: Change only the content between quotes, maintaining the same formatting and structure
5. **Save the file**: Save changes to see updates

Example: To change the hero tagline:
```tsx
// Find this line in HeroSection.tsx:
<span className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-poppins mb-4 mt-12 sm:mt-16">
  More than your average fitness center
</span>

// And change only the text content:
<span className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-poppins mb-4 mt-12 sm:mt-16">
  Your new tagline here
</span>
```

### Updating Images

1. **Prepare your new image**: Optimize for web use and ensure appropriate file format (JPG, PNG, WebP)
2. **Upload to correct directory**: Place image in appropriate subdirectory in `/public/images/`
3. **Update image reference**: If changing filename, update the `src` attribute in the component file
4. **Test the change**: Verify the image displays correctly

Example: To update a trainer image:
```tsx
// In TrainersSection.tsx, find:
image: '/images/trainers/hamrawit.webp'

// Change to:
image: '/images/trainers/new-hamrawit-image.webp'
```


## Development Workflow

### Running the Development Server
```bash
npm install    # Install dependencies
npm run dev    # Start development server
```

### Building for Production
```bash
npm run build  # Create production build
```

### Common Scripts
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Environment Setup
1. Install Node.js (v18 or higher recommended)
2. Install dependencies with `npm install`
3. Run development server with `npm run dev`
4. Access the site at http://localhost:5173


