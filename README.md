# 🗺️ UnderstandThisRepo.dev

**Plain-English walkthroughs for open-source projects.**  
Understand how any repo works — from entry points to folder structure — in 5 minutes.

---

## 💡 What This Project Is

Open-source is powerful, but onboarding is painful.  
Most repos assume you already know how everything fits together.

**UnderstandThisRepo.dev** exists to fix that.

We help contributors (especially new devs) *understand the architecture* of popular projects using:
- 🧠 **Layman’s Onboarding Guides** — human explanations of what goes where and why.
- 🗂️ **Folder Trees + Entry Points** — quickly see the “map” of a repo.
- 📊 **Architecture Summaries** — the big picture before diving into code.

---

## 🚀 Quick Start (for local dev)

```bash
# 1. Clone this repo (or unzip the bundle)
git clone https://github.com/<your-username>/understand-this-repo.git
cd understand-this-repo

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Then open the localhost URL (usually `http://localhost:5173/`).

---

## 🧱 Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS + Typography plugin |
| Docs | Markdown content (`/content/*.md`) |
| Hosting | Vercel, Netlify, or GitHub Pages |
| Format | Prettier (optional) |

---

## 📁 Folder Structure

```
understand-this-repo/
├─ public/                  # static assets (favicon)
├─ src/
│  ├─ components/
│  │  ├─ ui/                # primitives (Button, Card, Badge)
│  │  ├─ layout/            # Header, Footer
│  │  ├─ Hero.jsx           # landing hero
│  │  ├─ ProjectCard.jsx    # repo card
│  │  ├─ Modal.jsx          # markdown viewer modal
│  │  ├─ TagFilter.jsx      # tags
│  │  ├─ SectionTitle.jsx   # headings
│  │  └─ MarkdownViewer.jsx # tiny markdown previewer
│  ├─ data/                 # sample project data
│  ├─ styles/               # Tailwind entry
│  ├─ App.jsx               # top-level app
│  └─ main.jsx              # React bootstrap
├─ content/                 # (future) onboarding .md files per repo
├─ docs/                    # templates + onboarding for this site
├─ scripts/                 # CLI helpers
└─ .github/workflows/       # CI (docs freshness / deploy)
```

---

## 🧩 Mission & Vision

> **Every open-source project deserves a readable map.**

By providing clear, analogy-driven explanations, we lower the barrier to contribution and make open-source more accessible for everyone — from students to seasoned devs exploring new stacks.

---

## 🤝 Contributing

We welcome contributions of:
- New onboarding guides (`/content/*.md`)
- Site improvements
- Docs or examples

Steps:
1. **Fork** the repo  
2. **Create a branch:** `git checkout -b add/flask-guide`  
3. **Add your markdown guide:** `content/flask.md`  
4. **Run locally:** `npm run dev`  
5. **Submit a pull request!`**

> See `docs/OnboardingTemplate.md` for the standard layout.

---

## 🌍 Deploying

You can deploy this site anywhere static hosting is supported:

### Vercel (recommended)
1. Import the repo on Vercel
2. Framework preset: **Vite**
3. Auto-deploy from `main` branch

### GitHub Pages (automated)
The site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

**Setup:**
1. Go to your repository **Settings** → **Pages**
2. Under **Build and deployment**, select **Source**: GitHub Actions
3. Push to `main` branch to trigger deployment

The workflow (`.github/workflows/deploy-pages.yml`) will automatically build and deploy your site to `https://<username>.github.io/Understand-This_Repo/`

**Manual deployment:**
```bash
npm run build
npx gh-pages -d dist
```

---

## 📣 Roadmap

| Phase | Goal | Status |
|-------|------|--------|
| 1 | Deploy MVP site with sample content | ✅ Done |
| 2 | Add Markdown-based repo content system | 🔄 In progress |
| 3 | Add CLI (`npx repo-onboard`) to generate Onboarding.md | ⏳ Planned |
| 4 | Add visual diagrams (C4, call graphs, etc.) | 🧠 R&D |
| 5 | Launch community submission portal | 🚀 Soon |

---

## 🧭 License
MIT — free to use, modify, and share.

---

### 🙏 Acknowledgements
Created by developers who believe open-source should be **approachable**.  
Built with ❤️ using React + Tailwind + Vite.
