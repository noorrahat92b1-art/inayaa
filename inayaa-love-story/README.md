# For Inayaa ❤️ — An Interactive Love Story

A premium, mobile-first romantic single-page site built with Next.js, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Replace the photos

Drop 15 photos of Inayaa into `public/images/`, named exactly:

```
image1.jpg
image2.jpg
...
image15.jpg
```

They'll automatically show up in the welcome collage, the carousel, the polaroid wall, the memories timeline, and the final surprise. Placeholder gradient images are already there so the site works out of the box — just overwrite them.

Captions for the gallery live in `data/content.json` under `gallery_captions` (one per image, in order).

## Add the background music

Add an MP3 at:

```
public/sounds/romantic-bg.mp3
```

The mute/play button top-right controls it. If no file is present, the button simply stays muted — nothing breaks.

## Edit all the text in one place

Everything you'd want to personalize — the welcome message, the love letter, the quiz questions and answers, the memories timeline (titles/dates/captions/photos), the reasons list, and the final surprise text — lives in `data/content.json`. No code changes needed.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). Click Deploy.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom blush / lavender / peach palette)
- Framer Motion for all animation and transitions
- Zero external image/font services required beyond Google Fonts
