# Netflix India Clone

A responsive Netflix India landing page clone built with Next.js, React, TypeScript, and Tailwind CSS. The project focuses on a polished first-page experience with reusable components, local content data, optimized images, and consistent formatting.

![Netflix India Clone preview](public/images/hero-streaming.png)

## Features

- Responsive Netflix-inspired homepage
- Hero section with optimized background imagery
- Reusable layout, home, and UI components
- Trending, reasons-to-join, FAQ, and call-to-action sections
- Local content configuration in TypeScript
- Tailwind CSS utility styling
- Prettier format-on-save setup for VS Code and Cursor
- ESLint configuration for Next.js 16

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Prettier 3
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run lint:fix
```

Runs ESLint with automatic fixes.

```bash
npm run format
```

Formats the project with Prettier.

```bash
npm run format:check
```

Checks that all files match the Prettier config.

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    home/
    layout/
    ui/
  lib/
public/
  images/
```

## Formatting

The repository includes Prettier, Tailwind class sorting, and workspace settings for format-on-save in VS Code and Cursor. Install the recommended extensions when prompted by the editor.

## Deployment

This app can be deployed to Vercel or any platform that supports Next.js.

```bash
npm run build
```

Use the build command above in your deployment provider.

## Disclaimer

This project is for learning and portfolio use only. Netflix is a trademark of Netflix, Inc. This project is not affiliated with, endorsed by, or sponsored by Netflix.
