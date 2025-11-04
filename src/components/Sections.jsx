import { motion } from 'framer-motion';
import { Rocket, Cpu, Brain, Layers, Search } from 'lucide-react';
import { CATEGORIES } from '../config';
import { useEffect, useState } from 'react';

const benefits = [
  { icon: Rocket, title: 'Ship Faster', desc: 'Templates, snippets, and real-world examples to accelerate delivery.' },
  { icon: Cpu, title: 'Hardware + Cloud', desc: 'Practical IoT/AIoT guides from sensor to edge to cloud.' },
  { icon: Brain, title: 'AI-native', desc: 'Learn to integrate LLMs, vision, and agents across your stack.' },
  { icon: Layers, title: 'Full-stack', desc: 'Web, Apps, Games, and Roblox — one community, many crafts.' },
];

const samplePosts = [
  {
    title: 'Getting Started with ESP32 + AIoT: Cloud Vision Counter',
    excerpt: 'Build a vision-powered counter using ESP32-CAM and a lightweight cloud function.',
    tags: ['IoT', 'AIoT', 'AI'],
    minutes: 6,
  },
  {
    title: 'Prompt Engineering for Game NPCs with LLMs',
    excerpt: 'Design believable NPC behaviors using tools, memory, and guardrails.',
    tags: ['AI', 'Game'],
    minutes: 7,
  },
  {
    title: 'Roblox Scripting Patterns: Component Systems',
    excerpt: 'Reusable patterns for scalable Roblox experiences with clear separation.',
    tags: ['Roblox', 'Game'],
    minutes: 5,
  },
];

const sampleProjects = [
  {
    name: 'EdgeVision Kit',
    summary: 'Offline object detection on a Raspberry Pi with a web dashboard.',
    stack: ['Python', 'FastAPI', 'React', 'YOLOv8'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['AIoT', 'IoT', 'Web'],
  },
  {
    name: 'RoboBuilder',
    summary: 'No-code blocks to program robots, export to Arduino/ESP.',
    stack: ['TypeScript', 'Vite', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['IoT', 'App'],
  },
  {
    name: 'LLM NPCs',
    summary: 'LLM-powered NPCs with memory and tools for Roblox and Unity games.',
    stack: ['Node', 'OpenAI', 'Roblox'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['AI', 'Game', 'Roblox'],
  },
];

export default function Sections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Why join */}
      <section id="about" className="py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Why join?</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
            Learn from hands-on builds, contribute to open projects, and get feedback fast.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 shadow-sm">
                <Icon className="text-blue-600 dark:text-blue-400" />
                <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-12">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">MDX-ready blog with categories, tags, and code highlighting.</p>
            </div>
            <a href="#blog" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all</a>
          </div>

          <BlogList />
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Projects</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Filter by tech and explore case studies with repo/demo links.</p>
            </div>
            <a href="#projects" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all</a>
          </div>

          <ProjectsGrid />
        </motion.div>
      </section>
    </div>
  );
}

function BlogList() {
  const [query, setQuery] = useStateSafe('');
  const [active, setActive] = useStateSafe('All');
  const categories = ['All', ...CATEGORIES];

  const filtered = samplePosts.filter((p) => {
    const q = query.toLowerCase();
    const matchesQuery = p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    const matchesCategory = active === 'All' || p.tags.includes(active);
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            aria-label="Search posts"
            className="w-full pl-9 pr-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                active === c
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.title} className="group rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.excerpt}</p>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 text-xs font-medium">
                    {t}
                  </span>
                ))}
                <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">{p.minutes} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectsGrid() {
  const [active, setActive] = useStateSafe('All');
  const tags = ['All', ...CATEGORIES];

  const filtered = sampleProjects.filter((p) => active === 'All' || p.tags.includes(active));

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              active === t
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.summary}</p>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {p.stack.map((s) => (
                  <span key={s} className="inline-flex items-center rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 px-2 py-0.5 text-xs font-medium">{s}</span>
                ))}
                <a href={p.demo} className="ml-auto text-sm font-semibold text-blue-600 hover:text-blue-700">Demo</a>
                <a href={p.repo} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Small safe hook to keep components simple
function useStateSafe(initial) {
  const [v, setV] = useState(initial);
  useEffect(() => {}, []);
  return [v, setV];
}
