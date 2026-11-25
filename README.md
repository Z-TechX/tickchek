# TickChik — Z-TechX event registration concept

A responsive, static website concept inspired by the overall information architecture of TicketAse, with original TickChik branding and copy.

## Files
- `index.html` — semantic page structure, SEO metadata and structured data
- `styles.css` — responsive styling and visual system
- `script.js` — mobile navigation, FAQ accordion and mailto enquiry form
- `assets/tickchik-logo.png` — generated TickChik wordmark graphic

## Run locally
Open `index.html` in a browser. No build tools or package installation are required.

## Publish
Upload the folder to GitHub Pages, Netlify, Cloudflare Pages or any static hosting provider. For GitHub Pages, keep `index.html` at the published root.

## Visual asset licensing
The hero video is served from Pexels video 2941105: https://www.pexels.com/video/a-crowd-gathering-on-a-musical-concert-2941128/ . The event photos are served from Unsplash image URLs. Review the current terms before production use:
- Pexels license: https://www.pexels.com/license/
- Unsplash license: https://unsplash.com/license

These are externally hosted demo assets; download and self-host approved assets before production if you need guaranteed availability.

## Z-TechX contact details used
- Website: https://z-techx.com/
- Email: info@z-techx.com
- Phone: +880 1304-072381
- LinkedIn: https://www.linkedin.com/company/z-techx/

## Important implementation boundary
This is a front-end marketing website / teaching demo. It does **not** implement real registration storage, payment processing, ticket issuance, authentication, QR generation, offline QR validation, scanner synchronisation or an organiser backend. The dashboard uses illustrative sample data. The offline check-in section describes the intended product workflow; a production build needs a backend, authenticated organiser/staff roles, signed or otherwise tamper-resistant tickets, a scanner application with a securely provisioned event manifest, local scan storage, duplicate handling and a sync/conflict strategy.
