# TrisianNEW

The new Trisian website: the home of **Safe Workspace**, a managed cloud desktop service.

**Status:** planning complete; the site itself has not been built yet.

## What's in this repository

| Path | What |
|---|---|
| `site/` | The website (Astro, static). Empty until the build starts. |
| `.github/workflows/` | Build, checks and deployment to GitHub Pages (added with the first build). |
| `CLAUDE.md` | Working rules for anyone — human or AI — building in this repository. |

Planning material, source documents and research are kept outside version control on purpose. This repository is public; they are not.

## Working on it

Once the site exists:

```
cd site
npm install
npm run dev      # local preview
npm run check    # copy, accessibility, contrast and budget gates
npm run build    # static output
```

## Ground rules

- Every factual statement on the site traces to an approved source document. The build fails on claims that aren't supported.
- Light-first, calm, product-led. No fear-based messaging.
- Nothing is published without the owner's approval.

© All IT Host Inc., trading as Trisian.
