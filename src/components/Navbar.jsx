import { useEffect, useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { COMMUNITY } from '../config';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDark = media.matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500" aria-hidden="true" />
            <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Tech Nexus</a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home','Blog','Projects','About','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={COMMUNITY.DISCORD_URL} className="hidden sm:inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors" aria-label="Join Discord">
              Discord
            </a>
            <a href={COMMUNITY.WHATSAPP_URL} className="hidden lg:inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors" aria-label="Join WhatsApp">
              WhatsApp
            </a>
            <button
              onClick={() => setIsDark((v) => !v)}
              className="p-2 rounded-md border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle color scheme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="md:hidden p-2 rounded-md border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen((o) => !o)} aria-label="Open Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-black/5 dark:border-white/10">
            <div className="flex flex-col gap-2">
              {['Home','Blog','Projects','About','Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="px-1 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  {item}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a href={COMMUNITY.DISCORD_URL} className="flex-1 inline-flex justify-center rounded-md bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700">Discord</a>
                <a href={COMMUNITY.WHATSAPP_URL} className="flex-1 inline-flex justify-center rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium hover:bg-emerald-700">WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
