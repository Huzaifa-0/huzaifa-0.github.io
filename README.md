# Huzaifa Alfahl — Portfolio (Astro)

Statically-generated portfolio built with Astro, migrated from a React SPA. Every page is a real, static HTML route (no client-side router), with per-page SEO metadata, Open Graph tags, and a sitemap.

## Commands

| Command           | Action                                       |
| ------------------ | --------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the static site to `./dist/`            |
| `npm run preview`   | Serve the production build locally            |

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages automatically on every push to `main`, via GitHub's native "Deploy from GitHub Actions" Pages source (Settings → Pages → Source → GitHub Actions).
