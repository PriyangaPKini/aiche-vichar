# aiche-vichar

A small personal blog — engineering notes, system-design lessons, and the occasional reflection.

Live at <https://aiche-vichar.netlify.app/>.

## Stack

- [Astro](https://astro.build) (static output) with [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Fuse.js](https://www.fusejs.io/) for client-side Cmd/Ctrl+K search
- [Firebase](https://firebase.google.com/) Auth (Google sign-in) + Firestore for threaded comments
- Fonts: Fraunces (display) and Inter (body) via Google Fonts
- Plain CSS in `src/styles/global.css` — no framework

## Development

Requires Node `>=22.12.0`.

```sh
npm install
npm run dev          # start dev server at localhost:4321
npm run build        # build to ./dist/
npm run preview      # preview the production build
npm run sync:notion  # pull blog content from Notion into src/content/blog
```

Copy `.env.example` to `.env` and fill in the Firebase keys for sign-in/comments to work locally. The `NOTION_*` keys are only required when running the sync script.

## Project layout

```
src/
├── components/        # Navbar, Footer, Search, PostItem, Comments, SignInModal, …
├── content/
│   └── blog/          # markdown posts
├── content.config.ts  # zod schema for the `blog` collection
├── layouts/           # BaseLayout, PostLayout
├── lib/firebase.ts    # client SDK init, auth helpers, comment CRUD
├── pages/
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── index.astro
├── styles/global.css
├── constants.ts
└── utils.ts
public/                # static assets (favicon, avatar, fonts, blog images)
scripts/
└── sync-notion.mjs    # mirror Notion → src/content/blog
```

## Notes

- Posts can carry a `canonicalUrl` to declare they were originally published elsewhere — the post still renders on-site with an "Originally published on …" callout linking back to the source.
- Deploys are manual: trigger the `Deploy to Netlify` workflow from the Actions tab.

See `AGENTS.md` for repo conventions, the content sync workflow, and deployment details.
