# EcofriendlyCoffee Archive

An archive of 192 articles on coffee and biodiversity, now optimized for AI/LLM discovery and research.

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

````text
# EcofriendlyCoffee Archive

An archive of 192 articles on coffee and biodiversity, now optimized for AI/LLM discovery and research.

## 🚀 Project Structure

```text
├── public/             # Static assets deployed as-is
│   ├── images/         # Site images and post images
│   ├── md/             # LLM-optimized markdown files (generated)
│   ├── llms.txt        # Consolidated LLM-friendly content
│   ├── llms-full.txt   # Extended LLM content with metadata
│   └── robots.txt      # Can advertise LLM files/endpoints
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections (authors & posts)
│   │   ├── author/     # Author profiles and metadata
│   │   └── posts/      # Articles with optional co-located images
│   ├── layouts/        # Page layout templates
│   └── pages/          # Route definitions
├── scripts/
│   └── copy-images.js  # Copies images from content to public folder
├── output/             # mdream output folder (local/temp)
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
````

## About The Site

EcofriendlyCoffee is a resource specializing in coffee agriculture and biodiversity. As of June 2025, it serves as a comprehensive archive of 192 articles.

Features:

- Mobile-responsive design
- Dark/light mode toggle
- Author-focused content organization
- Section-based navigation
- High-performance static site architecture
- LLM-optimized content discovery (llms.txt family)
- Individual markdown files for AI research

## 🤖 AI/LLM Integration

This archive is optimized for AI crawlers and LLM consumption using [mdream](https://github.com/harlan-zw/mdream).

### What’s published

- `/llms.txt` — Consolidated content optimized for LLMs
- `/llms-full.txt` — Extended content with metadata
- `/md/` — Individual markdown files for each article

These live in `public/` so they are available at your site root after build/deploy.

### Generate and publish LLM artifacts

1. Generate artifacts (crawl your local or hosted site):

```bash
# Example: crawl your locally served site at http://localhost:3000
npx @mdream/crawl http://localhost:3000 --output ./output
```

2. Copy artifacts to `public/` so they’re deployed with the site:

```bash
# Create public/md if it doesn't exist
mkdir -p public/md

# Copy markdown files and llms indexes
cp -r output/md/* public/md/
cp output/llms*.txt public/
```

3. Build and deploy:

```bash
npm run build
# Deploy the dist folder with your hosting provider
```

Optional: In `public/robots.txt`, you can advertise these endpoints:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
LLMs: https://yourdomain.com/llms.txt
LLMs-full: https://yourdomain.com/llms-full.txt
LLMs-directory: https://yourdomain.com/md/
```

### Verify in production

- https://yourdomain.com/llms.txt (200 OK)
- https://yourdomain.com/llms-full.txt (200 OK)
- https://yourdomain.com/md/ (directory or sample .md file loads)
- https://yourdomain.com/robots.txt (contains your LLM entries)
- Optional checker: https://llmstxt.org/checker

## 🧞 Development Commands

All commands are run from the project root:

| Command               | Action                                                |
| :-------------------- | :---------------------------------------------------- |
| `npm install`         | Installs dependencies                                 |
| `npm run dev`         | Starts local dev server at `localhost:4321`           |
| `npm run build`       | Builds the site to `./dist/` (runs copy-images first) |
| `npm run preview`     | Previews the build locally before deploying           |
| `npm run copy-images` | Copies images from content posts to public            |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro check`      |

Note: `npm run build` already runs `copy-images` automatically (see `package.json`).

## 🖼️ Image Management (copy-images script)

The script at `scripts/copy-images.js` ensures images co-located with posts are copied to the public folder so they’re served in production.

What it does:

- Scans `src/content/posts/` for post directories
- Copies images with extensions: jpg, jpeg, png, gif, webp, avif, svg
- Preserves folder structure under `public/images/posts/<post-slug>/`
- Prints copy operations and totals for visibility

When to use:

- After adding or updating post images
- Before building for production (already run as part of `npm run build`)

Run manually if needed:

```bash
npm run copy-images
# or
node scripts/copy-images.js
```

Typical post with images:

```
src/content/posts/my-article/
	├── index.md
	├── hero.jpg
	└── chart.png

# After running copy-images:
public/images/posts/my-article/
	├── hero.jpg
	└── chart.png
```

## 🔄 Content Management

### Adding New Authors

Create a new markdown file in `src/content/author/`:

```md
---
name: "Author Name"
bio: "Short author biography and credentials"
---

Extended author bio and information.
```

### Adding New Articles

Create a new markdown file in `src/content/posts/`:

```md
---
title: "Article Title"
description: "Brief description of the article"
pubDate: "YYYY-MM-DD"
author: "author-filename"
section: "section-name"
---

Article content goes here.
```

For articles with images:

1. Create `src/content/posts/<slug>/`
2. Put your markdown in `index.md`
3. Add images next to it
4. `npm run copy-images` (or just `npm run build`)

## 📝 Customization

Key style files:

- `src/styles/global.css` — Global styles and variables
- `src/styles/theme.css` — Dark/light theme tokens

## 🔗 Deployment

Standard build:

```bash
npm run build
```

If you’ve generated LLM artifacts locally via mdream, copy them to `public/` before building so they’re included:

```bash
cp -r output/md/* public/md/
cp output/llms*.txt public/
npm run build
```

Deploy the `dist` directory with your hosting provider.

## 🧪 Link checking (local)

```bash
npx broken-link-checker http://localhost:4321 --filter-level 1 --recursive > broken-links.txt
npx broken-link-checker http://localhost:4321 --filter-level 3 --recursive > internal-links.txt
```

## Credits

- Original template based on Astro’s blog starter
- Built with [Astro](https://astro.build)
- LLM optimization powered by [mdream](https://github.com/harlan-zw/mdream)
