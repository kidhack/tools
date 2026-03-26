# Designer Tools

A fast static directory of design and AI tools built with Astro and deployed to GitHub Pages.

## Stack

- Astro
- TypeScript
- Fuse.js
- GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content model

All directory content lives in `src/data/tools.ts`.

That file is the source of truth for:

- categories
- tool metadata
- badges
- search tags
- personal notes

## Deployment

The GitHub Actions workflow builds the site for Pages and injects:

- `SITE_URL=https://<owner>.github.io`
- `BASE_PATH=/<repo-name>`

For a repository named `tools`, the site deploys at:

`https://<owner>.github.io/tools`
