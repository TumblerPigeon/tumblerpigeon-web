# TumblerPigeon Website

Personal website for the TumblerPigeon brand — game developer & content creator.

Built with **Next.js 14 (App Router)** + **Tailwind CSS** + **MDX** + **next-intl**.

---

## Local Development

### Prerequisites
- Node.js 18+
- npm (or pnpm/yarn)

### Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Blog Posts

1. Create a new `.mdx` file in `content/posts/`:

```
content/posts/my-post-slug.mdx
```

2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
category: "game-dev"
language: "en"
excerpt: "A short summary shown on the blog card (1-2 sentences)."
slug: "my-post-slug"
tags: ["optional", "tags"]
---

Your MDX content here...
```

**Category options:**
- `game-dev`
- `income-business`
- `product-reviews`
- `life-misc`

**Language options:**
- `en` (English)
- `tr` (Turkish)

3. The post will automatically appear in the blog grid. No config needed.

---

## Adding the Logo

Replace `public/images/logo-placeholder.svg` with your actual logo:

```
public/images/logo.png   ← place your circular logo here
```

The hero section loads `/images/logo.png` with a fallback to `logo-placeholder.svg`.

---

## Configuring Giscus Comments

1. Go to [giscus.app](https://giscus.app)
2. Enter your GitHub repo details
3. Copy the generated values into `src/components/GiscusComments.tsx`:

```ts
script.setAttribute('data-repo', 'your-username/your-repo');
script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
script.setAttribute('data-category', 'Blog Comments');
script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
```

Make sure GitHub Discussions is enabled on the repo.

---

## i18n / Translations

- English strings: `messages/en.json`
- Turkish strings: `messages/tr.json`

The language switcher in the navbar toggles between `/` (English) and `/tr/` (Turkish).

Blog posts are language-tagged via the `language` frontmatter field. The blog page has a language filter (All / EN / TR).

---

## Deploying to Vercel

### First Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Subsequent Deploys

```bash
vercel --prod
```

Or connect your GitHub repo in the Vercel dashboard for automatic deploys on push.

### Environment Variables

No required env vars for the base setup. If you add a newsletter service or contact form backend, add keys in the Vercel dashboard under **Settings → Environment Variables**.

---

## Connecting a Custom Domain on GoDaddy

1. In the **Vercel dashboard**, go to your project → **Settings → Domains**
2. Add your domain: `tumblerpigeon.com`
3. Vercel will show you DNS records to configure

**In GoDaddy:**
1. Log in → **My Products** → find your domain → **DNS**
2. Add/update these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 600 |
| CNAME | www | `cname.vercel-dns.com` | 600 |

4. Wait up to 48h for propagation (usually much faster)
5. Vercel auto-provisions SSL once DNS resolves

---

## Project Structure

```
├── content/
│   └── posts/           ← MDX blog posts go here
├── messages/
│   ├── en.json          ← English UI strings
│   └── tr.json          ← Turkish UI strings
├── public/
│   └── images/          ← logo.png and other assets
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   └── [locale]/    ← All pages under locale routing
│   │       ├── layout.tsx
│   │       ├── page.tsx       (/)
│   │       ├── blog/
│   │       │   ├── page.tsx        (/blog)
│   │       │   └── [slug]/
│   │       │       └── page.tsx    (/blog/[slug])
│   │       ├── contact/
│   │       │   └── page.tsx   (/contact)
│   │       └── merch/
│   │           └── page.tsx   (/merch)
│   ├── components/      ← Shared UI components
│   ├── lib/
│   │   └── posts.ts     ← MDX post utilities
│   └── i18n.ts          ← next-intl config
├── middleware.ts         ← Locale routing middleware
├── next.config.mjs
└── tailwind.config.ts
```

---

## Color Palette

| Name | Hex |
|------|-----|
| Background | `#0d0b0e` |
| Card BG | `#161318` |
| Cream | `#f5e6c8` |
| Cream Muted | `#c8b89a` |
| Brand Blue | `#1a3adb` |
| Brand Red | `#c0392b` |

---

## Fonts

- **Display (headings):** Bebas Neue — `font-display`
- **Body:** Space Grotesk — `font-body`  
- **Mono:** Space Mono — `font-mono`
