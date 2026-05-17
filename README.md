# The Madras Mandate

A Hugo-powered static blog for rigorous political analysis and cultural critique from Chennai and Tamil Nadu. Hosted on GitHub Pages with automatic deployment on every push to `main`.

---

## Stack

| Tool | Purpose |
|------|---------|
| **Hugo** | Static site generator |
| **GitHub Pages** | Hosting |
| **GitHub Actions** | CI/CD — auto-build & deploy on push |
| **Tailwind-free** | Pure CSS with design tokens (no build step) |

---

## One-time Setup

### 1. Install Hugo

```bash
# macOS
brew install hugo

# Ubuntu/Debian
sudo apt install hugo

# Windows (winget)
winget install Hugo.Hugo.Extended
```

Verify: `hugo version` — should be v0.110+

### 2. Clone & run locally

```bash
git clone https://github.com/YOUR_USERNAME/madras-mandate.git
cd madras-mandate
hugo server -D        # -D includes drafts
```

Open `http://localhost:1313` — live reloads on every save.

### 3. Configure GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. That's it. The workflow (`.github/workflows/deploy.yml`) handles everything else.

### 4. Set your `baseURL`

In `hugo.toml`, update:
```toml
baseURL = "https://YOUR_USERNAME.github.io/madras-mandate/"
```

Or if you have a custom domain:
```toml
baseURL = "https://themadrasmandate.in/"
```

---

## Publishing Articles

Every article is a Markdown file. The workflow is:

```
write Markdown → git push → GitHub Actions builds → site updates (< 2 min)
```

### Create a new article

```bash
# Urban Governance article
hugo new articles/urban-governance/your-article-slug.md

# State Policy article
hugo new articles/state-policy/your-article-slug.md

# Cultural Mandate article
hugo new articles/cultural-mandate/your-article-slug.md
```

This creates a file from the archetype template with all required frontmatter pre-filled.

### Article frontmatter reference

```yaml
---
title: "Your Article Title"
date: 2024-11-01           # Publication date
draft: false               # true = hidden, false = published
author: "Author Name"
author_bio: "Brief bio shown at the bottom of the article."
category: "State Policy"   # Urban Governance | State Policy | Cultural Mandate
tags: ["Tag1", "Tag2"]
read_time: "7"             # Estimated minutes to read
excerpt: "1-2 sentence description shown in cards and previews."
image: "/images/articles/your-image.jpg"   # Optional featured image
image_caption: "Caption text."             # Optional
---

Your article body in Markdown here.
```

### Adding images

Place images in `static/images/articles/` and reference them as `/images/articles/filename.jpg`.

```bash
cp ~/Downloads/my-photo.jpg static/images/articles/
```

Then in frontmatter: `image: "/images/articles/my-photo.jpg"`

### Markdown features

```markdown
## Section Heading

Regular paragraph text.

> A pull-quote — displayed with a primary-blue left border and serif type.

- Bullet point (rendered with Madras square markers)
- Another point
```

---

## Site Structure

```
madras-mandate/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages
├── content/
│   ├── articles/
│   │   ├── state-policy/       # Articles go here
│   │   ├── urban-governance/
│   │   └── cultural-mandate/
│   └── manifesto/
│       └── _index.md           # Edit manifesto content
├── layouts/                    # Hugo templates
│   ├── _default/
│   │   ├── baseof.html         # Base HTML shell
│   │   ├── single.html         # Individual article page
│   │   └── list.html           # Category/section listing
│   ├── index.html              # Homepage
│   ├── manifesto/
│   │   └── single.html         # Manifesto page (madras-check bg)
│   ├── categories/
│   │   └── list.html           # Bento grid categories page
│   └── partials/
│       ├── nav.html
│       └── footer.html
├── static/
│   ├── css/main.css            # All styles — design system tokens
│   ├── js/main.js              # Progress bar, mobile menu
│   └── images/                 # Static images
├── archetypes/
│   └── articles.md             # Template for hugo new
└── hugo.toml                   # Site config, menus, categories
```

---

## Customisation

### Changing navigation links

Edit `hugo.toml`:
```toml
[[menus.main]]
  name   = "New Section"
  url    = "/articles/new-section/"
  weight = 5
```

### Adding a new category

1. Add to `hugo.toml` params.categories
2. Create `content/articles/new-section/_index.md`
3. Add articles into that folder

### Editing the Manifesto

Open `content/manifesto/_index.md` and edit. It supports HTML inside Markdown for the principles grid.

### Editing design tokens

All colours, spacing, and typography are in `static/css/main.css` under `:root { }`. Changes there cascade everywhere.

---

## Deployment

Push to `main` → automatic. No manual steps ever needed.

```bash
git add .
git commit -m "Add: article on water deficit and Buckingham Canal"
git push
```

Check the **Actions** tab in GitHub to watch the build. It typically completes in 60–90 seconds.

---

## Custom Domain (optional)

1. Add a `CNAME` file to `static/` with your domain: `themadrasmandate.in`
2. Update `baseURL` in `hugo.toml`
3. Configure DNS with your registrar (A records or CNAME to GitHub Pages IPs)
4. Enable HTTPS in GitHub Pages settings
