# The Fire Foods Website

A cinematic restaurant website with a complete front-end and Node.js backend for contact handling.

## Files

- `index.html` — restaurant landing page and menu highlights
- `styles.css` — dark cinematic styling and responsive layout
- `script.js` — navigation and contact form submission logic
- `server.js` — Express backend for serving the site and processing contact requests
- `package.json` — project dependencies and startup scripts
- `.env.example` — example environment variables for email notifications

## Setup

1. Open a terminal in the project folder.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and optionally configure SMTP settings.
4. Start the server:
   - `npm start` to run in production mode
   - `npm run dev` to run with `nodemon`
5. Open `http://localhost:3000` in your browser.

## Contact backend

The backend accepts POST requests to `/api/contact` and returns a JSON result. If SMTP is configured, the server will send the message as an email; otherwise it logs the request to the console.

## Customize

- Replace text and restaurant details inside `index.html`.
- Update colors, spacing, and layout in `styles.css`.
- Adjust the form fields or add new API routes in `server.js`.

## Notes

This website is built to be served locally or deployed to any Node.js hosting provider. The backend ensures the contact form is functional, not just static.
