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
- Edit `src/data/experience.ts` to revise verified public experience. The HRI entry is deliberately high-level; do not add unpublished paper details, code, figures, videos, datasets, or study materials. The competition entry is a separate team experience.
- Edit `src/data/site.ts` for contact links and research interests. Only add accounts that are confirmed to exist.
- Page text lives in `src/pages/`; shared styling lives in `src/styles/global.css`.

Only add research materials and claims that the site owner has approved for public display. Keep the Experience entries high level.

## Project Structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── astro.config.mjs              # Astro site URL and static output
├── public/                       # Favicon and robots.txt
├── src/
│   ├── components/               # Shared project rendering
│   ├── data/                     # Project, experience, and site data
│   ├── layouts/                  # Shared page shell and metadata
│   ├── pages/                    # Home, projects, experience, sitemap
│   └── styles/                   # Responsive global styles
└── package.json
```
