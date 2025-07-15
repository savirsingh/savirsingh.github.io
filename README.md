# Savir Singh · Personal Website

This repository powers my personal site: **savirsingh.com**. Built with [Jekyll](https://jekyllrb.com/) and styled in pure HTML/CSS/JS, featuring:

- A clean, responsive design with light/dark mode toggle  
- A personal blog with searchable posts, categories, tags, and math rendering  
- Hosted on GitHub Pages with a custom domain

---

## Features

### Site structure

- **Home page** — brief intro + navigation  
- **Projects** & **Résumé** — highlights of my work and skillset  
- **Writing (Blog)**  
  - Posts include metadata: date, categories, tags, math snippets  
  - Blog index supports search and dark mode  
  - Per-post layout with improved typography, blockquote styling, and LaTeX rendering

### Theme support

- Light/dark theme toggles saved via `localStorage`  
- System colour scheme detection  
- Smooth UI transition

### Blogging

- Posts live in `_posts/` using front-matter: title, date, categories, tags  
- Uses `excerpt_separator: <!--more-->` for index summaries  
- Excerpts are markdown-rendered, searchable, and trimmed  
- Math Jax (or KaTeX) support via include file

---

## Local development

1. Clone this repo:  
   ```bash
   git clone https://github.com/savirsingh/personal-website.git
   cd personal-website
   ```
2. Install Jekyll & dependencies:
   ```bash
   gem install bundler jekyll
   bundle install
   ```
3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000/` to preview.

## Deployment
- Built and deployed automatically by GitHub Pages
- Custom domain configured (via `CNAME` file & DNS records)

## Folder Structure
```
personal-website/
├── _includes/             # mathjax.html, header/footer snippets
├── _layouts/              # `default.html`, `post.html`, `posts.html`
├── _posts/                # Jekyll markdown blog posts
├── assets/                # CSS, JS, images
├── _config.yml            # site settings & excerpt_separator
├── CNAME                  # holds `savirsingh.com`
├── README.md              # project overview
└── style.css              # global styles
```

## Contributing
Feel free to open issues or submit PRs for bug fixes or enhancements. Suggestions welcome: theme tweaks, pagination, feeds, etc.

## License & Attribution
- Source code under MIT License
- Design, writing, and content © 2021–2025 Savir Singh
- Powered by Jekyll, Font Awesome, and open-source fonts
