# Portfolio

My personal portfolio — built with React (Next.js) while I put together a full stack developer profile. Project write-ups, my stack, and a way to reach me.

**Live site:** [add URL once deployed]

## Stack

React / Next.js · TypeScript · CSS with custom design tokens

Fonts: Bricolage Grotesque (headings), Inter (body), JetBrains Mono (labels)

## Planned

- [ ] Blog with a write-up per project (why it was built, stack decisions, trade-offs)
- [ ] AI assistant in the hero section, answering questions from my background (Anthropic API, server-side via Next.js API routes)

## Running it locally

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000).

## Structure

```
/src
  /app          → pages and routes
  /components   → UI components
  /styles       → design tokens, global styles
/public         → static assets (no personal photos — see License)
```

*(`/content` for blog posts and the `ANTHROPIC_API_KEY` env variable will be added once those features are built — see Planned above.)*

## License

Code is MIT — see [LICENSE](./LICENSE). Images and personal photos in this repo are not covered and remain all rights reserved.