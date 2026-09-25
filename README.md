# Haojin Lu

Personal academic and technical website, built with Astro and deployed to GitHub Pages at [haojinlu.github.io](https://haojinlu.github.io).

## Local Development

Requires Node.js 22.12 or newer and npm.

### Install

```sh
npm install
```

### Run

```sh
npm run dev
```

Open the local address printed by Astro.

### Build

```sh
npm run typecheck
npm run build
npm run preview
```

The static site is written to `dist/`.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Commit `package-lock.json` so the Astro action can install the same dependency versions.

The repository name must be `HaojinLu.github.io` under the `HaojinLu` account for the root user-site URL. `astro.config.mjs` sets the canonical site URL accordingly.

## Content Editing

- Edit `src/data/projects.ts` to add or revise projects. Every project has a title, factual description, type, role, tags, GitHub URL, and `featured` flag. Optional fields support a demo, image, and date. The homepage shows featured entries; the Projects page shows all entries.
- Edit `src/data/experience.ts` only when the role, organization, dates, and public-display permission have been verified. It is intentionally empty for now.
- Edit `src/data/site.ts` for contact links, research interests, and the CV path. Only add accounts that are confirmed to exist.
- When a public CV is ready, place it at `public/cv/Haojin-Lu-CV.pdf` and set `cvPdf: '/cv/Haojin-Lu-CV.pdf'` in `src/data/site.ts`.
- Page text lives in `src/pages/`; shared styling lives in `src/styles/global.css`.

Do not add unpublished materials or unverified achievements, affiliations, publications, performance claims, or demo links.

## Project Structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── astro.config.mjs              # Astro site URL and static output
├── public/                       # Favicon, robots.txt, future CV PDF
├── src/
│   ├── components/               # Shared project rendering
│   ├── data/                     # Project, experience, and site data
│   ├── layouts/                  # Shared page shell and metadata
│   ├── pages/                    # Home, projects, experience, CV, sitemap
│   └── styles/                   # Responsive global styles
└── package.json
```
