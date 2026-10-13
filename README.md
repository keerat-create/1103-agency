# 1103 Agency

An editorial homepage built with Next.js App Router, TypeScript, and Tailwind CSS v4. Fonts are bundled locally using Fontsource: Fraunces for headlines and DM Sans for body and interface text.

## Develop and preview

Use Node.js 24 and npm 11 (the versions validated in the cloud environment).

```sh
npm ci
npm run dev
```

Open http://localhost:3000 on your own computer. In a cloud development tool, use its forwarded port 3000 preview if available. This onboarding chat does not provide a public preview URL.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build on port 3000. Run the build before production startup; typecheck also works independently after installation.

## Structure

- `src/app/page.tsx`: homepage composition and provisional section copy.
- `src/app/globals.css`: brand tokens, editorial layout, responsive styles, focus and reduced motion support.
- `src/components/`: navigation, section labels, and footer.
- `src/data/portfolio.ts`: editable typed brand-card data.
- `public/`: destination for official logo, favicon, and approved project assets.

## Supplied brand assets and design reference

The official logo (`Untitled design - 1.jpg`) and favicon (`Untitled design - 3.jpg`) are copied byte-for-byte to `public/brand/`. The logo uses unoptimized image rendering: no crop, recoloring, transparency removal, or artwork changes. Its original white canvas is retained. The favicon is linked directly as an image/jpeg icon.

The supplied website reference is preserved in `docs/design/editorial-reference.jpg`. The layout draws on its rust frame, blue stripes, centered serif type, and butter yellow card section, with simpler graphics and more restrained spacing. The reference is an internal design source, not displayed as agency work.

The portfolio contains supplied brand information with provisional services and a logo placeholder; contact details remain a placeholder. No clients, testimonials, results, email addresses, or contact form functionality have been invented. Add approved work, final copy, real contact details, and any required legal information before launch.

## Vercel

The project uses standard Next.js conventions and needs no custom Vercel configuration or environment variables. When deployment is authorized, import the GitHub repository into Vercel, choose Next.js, and use the repository root with `npm run build`. No deployment or domain changes have been performed.

## Managing the portfolio

Edit `src/data/portfolio.ts` to add, remove, or reorder brand cards. Each entry has `slug`, `brand`, `description`, `logo`, `services`, `servicesProvisional`, and a pastel `tone` (sage, rose, blue, or butter). Keep descriptions to one or two sentences and slugs unique.

Place exact original logos in `public/portfolio/`, then set `logo` to `{ src: "/portfolio/filename.jpg", alt: "Brand name" }`. Logos are displayed uncropped and unoptimized; `null` displays a clearly labeled placeholder. Set `servicesProvisional` to `false` only after the services are approved.

The Fit Tiffin Co. is the first entry. Its supplied original logo is displayed unchanged; its services have been confirmed. Cards are informational and do not open separate pages or case studies.

Preview at `http://localhost:3000/#work`. If the filesystem watcher cannot start, use `WATCHPACK_POLLING=true npm run dev -- --webpack`.


## Contact form setup and testing

The form is deliberately non-operational until configured. Copy `.env.example` to `.env.local` and supply:

- `CONTACT_TO_EMAIL`: the real inbox receiving enquiries.
- `CONTACT_FROM_EMAIL`: a sender authorized on a verified Resend sending domain.
- `RESEND_API_KEY`: a server-only Resend API key.
- `CONTACT_ENABLED=true`: an explicit delivery switch once the configuration is ready.
- `CONTACT_PUBLIC_EMAIL`: the official company email for the direct email link (optional and intentionally public).

Restart the dev server after environment changes. For production, rebuild after changes to the enabled flag or public email so the prerendered form matches the server configuration. No credentials use `NEXT_PUBLIC_` and none are passed into frontend code. Only the enabled flag and public contact address are exposed. Do not commit `.env.local`. No address or credentials have been invented.

Open `http://localhost:3000/#contact`. Without configuration the form shows an unavailable notice and disables sending. The endpoint returns HTTP 503 for same-origin submissions while unconfigured. Fields remain editable for layout review.

After configuration, test required fields, invalid email, the optional fields, keyboard navigation, and a real test enquiry to your own recipient inbox. Confirm the provider accepts the request and the inbox receives it. The success message confirms provider acceptance, not guaranteed inbox delivery. An invalid key or provider failure must show an error and preserve entered values. Submit a filled `website` honeypot via a same-origin request to verify rejection. Requests from a different origin are rejected. The API validates and caps the request body and sends plain text, with the visitor's address only in Reply-To. No visitor data or credentials are logged.

The adapter uses Resend's `POST /emails` API. Honeypot and same-origin validation provide basic spam protection; no distributed rate limiter is configured. No production deployment or domain changes have been made.
