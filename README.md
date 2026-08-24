# Umesh Utsav Udyan

A single-page marketing site for Umesh Utsav Udyan, a marriage palace in Bhopal. The site presents the venue through a black-and-gold, royal-inspired design across Home, Gallery, Our Services, About Us, Testimonials, Booking, and Contact Us sections, and collects enquiries through two Netlify Forms (general contact and booking requests).

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) for routing and SSR
- Tailwind CSS v4 for styling, with a custom gold/onyx theme defined in `src/styles.css`
- [lucide-react](https://lucide.dev/) for iconography
- Netlify Forms for the Contact and Booking submissions
- Deployed on Netlify

## Project Structure

- `src/routes/index.tsx` — assembles the page from section components
- `src/components/` — one component per section (`Hero`, `Gallery`, `Services`, `About`, `Testimonials`, `Booking`, `Contact`, `Footer`, `Nav`) plus shared ornamental pieces in `Ornament.tsx`
- `public/__forms.html` — hidden static form skeleton required for Netlify to detect the client-rendered forms at build time

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. Note that Netlify Forms submissions only work on a deployed site (Netlify Dev / `netlify dev` emulates this locally).

## Build

```bash
npm run build
```
