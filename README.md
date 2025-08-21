# ACE Ventures Website

## Project Overview

A minimalist, intentional digital presence designed to attract aligned venture capital partners through authenticity and strategic design.

## Philosophy

"Alignment over everything." This website is not just a digital brochure, but a carefully crafted relationship tool that filters for quality connections with sophisticated investors.

## Technical Specifications

- **Stack**:
  - HTML5
  - Tailwind CSS (CDN)
  - AOS.js for subtle animations
- **Hosting**: Static site (Netlify/Vercel recommended)
- **Performance Targets**:
  - Load time: <2 seconds
  - Total size: <1MB
  - Lighthouse score: >90

## Features

- Single-page, ultra-minimal design
- Responsive across all devices
- Accessible form submission via Netlify Forms
- Subtle, professional animations
- WCAG AA compliant

## Local Development

### Prerequisites

- Modern web browser
- Text editor (VS Code recommended)
- Git (optional)

### Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-org/ace-ventures-website.git
   cd ace-ventures-website
   ```

2. Open `index.html` directly in a browser
   - No build process required
   - No local server needed

## Deployment

### Recommended Platforms

- Netlify
- Vercel

### Deployment Steps

1. Push to GitHub/GitLab
2. Connect repository to Netlify/Vercel
3. Set publish directory to root (`/`)
4. Configure custom domain: `aceventures.ai`

### Form Handling

- Netlify Forms automatically captures submissions
- Honeypot field prevents spam
- Optional: Configure form notifications in Netlify dashboard

## Customization

- Modify typography in Tailwind config
- Adjust color palette in `tailwind.config.js`
- Update content in `index.html`

## Performance Optimization

- Preload critical resources
- Use Lighthouse for performance audits
- Consider local Tailwind setup with PurgeCSS for production

## Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigable

## Browser Compatibility

- Tested on:
  - Chrome
  - Firefox
  - Safari
  - Edge

## License

Proprietary - All rights reserved

## Contact

hello@aceventures.ai
