# Netflix India Clone

A responsive Netflix India landing page clone built with Next.js, React, TypeScript,
Tailwind CSS, and Yup. The project includes a polished marketing landing page, a
Netflix-style sign-in screen, reusable UI components, local content data, optimized
images, and consistent developer tooling.

![Netflix India Clone preview](public/images/hero-streaming.png)

## Current implementation

- Full-screen Netflix-inspired hero section with a local background image, layered overlays,
  brand wordmark, language selector, sign-in button, and membership email form.
- Sign-in button uses Next.js client-side navigation to the `/login` route.
- Responsive page layout that matches the Netflix India landing page flow.
- "Trending Now" section powered by local TypeScript content data.
- Trending cards use remote Netflix CDN poster artwork through `next/image`.
- Lazy-loaded trending carousel that waits until the section approaches the viewport.
- Carousel preview fallback for the lazy client component.
- Horizontal carousel controls with scroll state detection and smooth pagination.
- Ranked title cards with responsive sizing, hover states, and outlined rank numbers.
- "More reasons to join" section with reusable cards, gradient backgrounds, and custom icons.
- Accessible FAQ section built with native `details` / `summary` accordions.
- Final call-to-action section that reuses the membership email form.
- Footer with support links, language selection, and regional Netflix label.
- Netflix-style sign-in page with header, centered form, help disclosure, reCAPTCHA copy,
  and auth footer.
- Yup validation for email or mobile-number sign-in input.
- Phone-number entry mode that reveals the `IN +91` country-code selector.
- Route groups split marketing and auth pages without changing public URLs.
- Shared UI primitives for buttons, language selection, email signup, and section shells.
- Local content configuration for trending titles, reasons, FAQ copy, and footer links.
- Global CSS utilities for page gutters, hero sizing, curved divider, hidden scrollbars, and
  rank-number styling.
- Workspace formatting setup for Prettier, Tailwind class sorting, ESLint, VS Code, and Cursor.

## Project scope

This is a front-end clone for learning and portfolio use. It does not connect to Netflix,
stream video, process payments, authenticate users, or submit forms to a backend. Form
validation is implemented on the client, while submit actions and footer links are currently
placeholders.

## Technology stack

| Tool           | Purpose                                                           |
| -------------- | ----------------------------------------------------------------- |
| Next.js 16     | App Router framework and image optimization                       |
| React 19       | Component rendering and client interactions                       |
| TypeScript 5   | Static typing for components and content models                   |
| Tailwind CSS 4 | Utility-first styling through PostCSS                             |
| Lucide React   | Interface icons for controls                                      |
| Yup 1          | Sign-in form schema validation                                    |
| ESLint 9       | Static analysis with Next.js core web vitals and TypeScript rules |
| Prettier 3     | Consistent formatting with Tailwind class sorting                 |

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

Available pages:

```text
http://localhost:3000
http://localhost:3000/login
```

The installed Next.js version requires Node.js `>=20.9.0`.

## Available scripts

| Command                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Starts the Next.js development server.                  |
| `npm run build`        | Creates an optimized production build.                  |
| `npm run start`        | Runs the production server after a build.               |
| `npm run lint`         | Runs ESLint across the project.                         |
| `npm run lint:fix`     | Runs ESLint and applies automatic fixes where possible. |
| `npm run format`       | Formats supported files with Prettier.                  |
| `npm run format:check` | Checks whether files match the Prettier configuration.  |

## Routes

| Route    | Access | Purpose                              |
| -------- | ------ | ------------------------------------ |
| `/`      | Public | Netflix India inspired landing page. |
| `/login` | Public | Netflix-style sign-in entry screen.  |

## Project structure

```text
src/
  app/
    (auth)/
      login/
        page.tsx             # Sign-in route
    (marketing)/
      page.tsx               # Landing page route
    globals.css              # Tailwind import, theme tokens, shared CSS utilities
    layout.tsx               # Root metadata and document shell
  components/
    auth/
      AuthFooter.tsx
      AuthHeader.tsx
      AuthIdentifierField.tsx
      LoginPageShell.tsx
      SignInForm.tsx
    home/
      CtaSection.tsx
      FaqSection.tsx
      HeroSection.tsx
      LazyTrendingCarousel.tsx
      ReasonsSection.tsx
      TrendingCard.tsx
      TrendingCarousel.tsx
      TrendingCarouselPreview.tsx
      TrendingCarouselTrack.tsx
      TrendingSection.tsx
    icons/
      FeatureIcons.tsx       # Custom SVG icons used by reason cards
    layout/
      SiteFooter.tsx
      SiteHeader.tsx
    ui/
      Button.tsx
      EmailSignup.tsx
      LanguageSelect.tsx
      SectionShell.tsx
  lib/
    validation/
      signInSchema.ts        # Yup validation for the sign-in identifier field
    authContent.ts           # Login footer content
    content.ts               # Local page data and content types
    utils.ts                 # Shared class name helper
public/
  images/
    hero-streaming.png       # README preview image
    netflix-homepage-bg.jpg  # Hero background
    netflix-wordmark.svg     # Header logo
```

## Component overview

| Component              | Responsibility                                                                 |
| ---------------------- | ------------------------------------------------------------------------------ |
| `HeroSection`          | Builds the first viewport with imagery, heading, CTAs, and the curved divider. |
| `SiteHeader`           | Renders the wordmark, language selector, and sign-in action.                   |
| `EmailSignup`          | Shared membership email form used in the hero and final CTA.                   |
| `TrendingSection`      | Connects local trending data to the lazy carousel experience.                  |
| `LazyTrendingCarousel` | Loads the interactive carousel near the viewport using `IntersectionObserver`. |
| `TrendingCarousel`     | Manages scroll buttons, scroll state, and horizontal navigation.               |
| `TrendingCard`         | Renders each ranked title card with responsive visual treatment.               |
| `ReasonsSection`       | Displays the value-prop cards and matching custom icons.                       |
| `FaqSection`           | Provides accessible expandable FAQ rows.                                       |
| `AuthHeader`           | Renders the auth-page Netflix wordmark link.                                   |
| `AuthFooter`           | Renders auth-page support links and language selector.                         |
| `LoginPageShell`       | Composes the sign-in page layout, header, form, reCAPTCHA copy, and footer.    |
| `SignInForm`           | Handles sign-in field state, Yup validation, and inline error rendering.       |
| `AuthIdentifierField`  | Renders the email/mobile field and switches to country-code phone mode.        |
| `FeatureIcons`         | Exposes custom SVG icons used by the reason cards.                             |
| `SiteFooter`           | Renders footer links, language selector, and regional label.                   |

## Content and validation

Content is stored locally in `src/lib/content.ts` so the page can be edited without touching
component logic.

- `trendingItems` drives the ranked carousel.
- `reasons` drives the "More reasons to join" card grid.
- `faqs` drives the FAQ accordion.
- `footerLinks` drives the footer navigation grid.
- `authFooterLinks` drives the sign-in footer navigation grid.
- `signInSchema` validates email or mobile-number input for the sign-in form.

Validation is stored in `src/lib/validation/signInSchema.ts`, keeping Yup rules separate from
the client form component.

## Architecture notes

- `src/app/(marketing)` contains public marketing pages without adding `(marketing)` to the URL.
- `src/app/(auth)` contains auth-related pages without adding `(auth)` to the URL.
- Route files stay small and compose feature components from `src/components`.
- Domain components live in `components/home` and `components/auth`.
- Shared primitives live in `components/ui`.
- Custom SVG assets that are rendered as React components live in `components/icons`.
- Shared data, validation, and utilities live in `src/lib`.
- External poster artwork is allowed through `images.remotePatterns` in `next.config.ts`.

## Styling notes

- Tailwind CSS is loaded from `src/app/globals.css` with the Tailwind 4 `@import` flow.
- `@theme inline` maps app-level CSS variables into Tailwind theme colors and fonts.
- `.netflix-container` centralizes responsive page gutters.
- `.auth-container` centralizes the auth header and footer width.
- `.auth-login-surface` creates the dark red/black sign-in page background.
- `.membership-form` defines the responsive email form grid.
- `.hero-section`, `.hero-content`, and `.hero-curve-line` create the first viewport and curved
  Netflix-style divider.
- `.rank-number` applies the outlined ranking style used in the trending carousel.

## Quality checks

Run these before opening a pull request or deploying:

```bash
npm run lint
npm run format:check
npm run build
```

Formatting can be applied with:

```bash
npm run format
```

## Deployment

The project can be deployed to Vercel or any platform that supports Next.js.

Recommended build command:

```bash
npm run build
```

Recommended output/runtime:

```text
Next.js application
```

## Future improvements

- Connect email and sign-in forms to a real backend or authentication provider.
- Add password, OTP, registration, and plan-selection flows.
- Add automated UI tests for carousel, FAQ, login validation, and responsive layout behavior.
- Move remote poster artwork to owned static assets if CDN stability is required.
- Add metadata images for richer link previews.

## Disclaimer

This project is for learning and portfolio use only. Netflix is a trademark of Netflix, Inc.
This project is not affiliated with, endorsed by, or sponsored by Netflix.
