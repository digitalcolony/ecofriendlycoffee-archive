# EcofriendlyCoffee Archive

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
├── public/            # Static assets like images and fonts
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Content collections (articles & authors)
│   │   ├── author/    # Author profiles and metadata
│   │   └── posts/     # Articles
│   ├── layouts/       # Page layout templates
│   └── pages/         # Route definitions
├── astro.config.mjs   # Astro configuration
├── package.json       # Project dependencies
└── tsconfig.json      # TypeScript configuration
```

## About The Site

EcofriendlyCoffee is a resource specializing in coffee agriculture.

Features:

- ✅ Mobile-responsive design
- ✅ Dark/light mode toggle
- ✅ Author-focused content organization
- ✅ Section-based navigation
- ✅ High-performance static site architecture

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The site organizes content in two main ways:

1. **Authors** (`src/content/author/`): Each author has their own page with a collection of their articles
2. **Sections** (`src/pages/section/`): Content organized by topic/category

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally before deploying       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔄 Content Management

### Adding New Authors

Create a new markdown file in `src/content/author/` with the author's information:

```md
---
name: "Author Name"
bio: "Short author biography and credentials"
---

Extended author bio and information.
```

### Adding New Articles

Create a new markdown file in `src/content/posts/` with proper frontmatter:

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

## 📝 Customization

The site uses CSS variables for theming, making it easy to customize colors, fonts, and other visual elements. Key files:

- `src/styles/global.css`: Global styles and variables
- `src/styles/theme.css`: Dark/light theme definitions

## 🔗 Deployment

The site is configured for deployment to modern hosting platforms. Simply run:

```bash
npm run build
```

And deploy the `dist` directory to your hosting provider.

## Credits

- Original template based on Astro's blog starter
- Coffee expertise from the INeedCoffee community
- Built with [Astro](https://astro.build)

### Link checking

npx broken-link-checker http://localhost:4321 --filter-level 1 --recursive > broken-links.txt (all)

npx broken-link-checker http://localhost:4321 --filter-level 3 --recursive > internal-links.txt (internal, kinda works)
