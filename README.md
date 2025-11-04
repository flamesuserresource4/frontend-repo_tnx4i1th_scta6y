Tech Nexus — IoT • AI • AIoT • Web • App • Game • Roblox

Overview
A modern, minimal, and fast site that works as a landing page, blog, and portfolio. Built with React + Vite + Tailwind, enhanced with Framer Motion animations and a Spline 3D hero.

Features
- Clean navbar with sections: Home, Blog, Projects, About, Contact
- Bold hero with interactive Spline 3D
- Primary CTAs to Discord and WhatsApp
- Benefits grid, latest posts, and projects
- Dark/light mode toggle (system-aware)
- Accessible: semantic headings, alt text, focus states
- Performant: lazy-loaded images, minimal layout shift

Quick Start
1) Install dependencies and run dev server (already configured in this sandbox).
2) Open the frontend preview URL and verify the UI.

Configure Community Links and Socials
- Open src/config.js and set these values:
  - COMMUNITY.DISCORD_URL -> your Discord invite link
  - COMMUNITY.WHATSAPP_URL -> your WhatsApp community link
  - SOCIALS.GITHUB, SOCIALS.YOUTUBE, SOCIALS.LINKEDIN, SOCIALS.EMAIL

Add Blog Posts (MDX-ready approach)
This template surfaces “Latest Posts” from in-file data for demo purposes. To move to MD/MDX:
- Create a content/posts directory.
- Store posts as .mdx with frontmatter: title, date, tags, excerpt, cover, readingTime.
- Use a parser like gray-matter + mdx-bundler or contentlayer to import posts at build-time.
- Render with a code-highlighting solution (e.g., shiki or prism-react-renderer).
- Wire the search and filters to your parsed post list.

Add Projects
Current grid uses sample data. Replace with your data source:
- Option A: Keep a local JSON/JS array and expand it.
- Option B: Fetch from an API or CMS.
Each project supports: name, summary, stack (badges), image (screenshot), demo, repo, tags.

SEO & Feeds
- Set title/description/OG tags in index.html for now.
- For full SEO: add meta tags per route, generate sitemap.xml and rss.xml at build or via a backend.
- Use descriptive alt text and headings (h1-h2-h3) as already structured.

Notes
- The Spline hero is interactive; overlays use pointer-events: none to keep it usable.
- Dark mode toggles the “dark” class on the document root and respects system preference.

License
MIT
