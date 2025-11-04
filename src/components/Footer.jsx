import { SOCIALS } from '../config';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Tech Nexus</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              A modern, minimal hub for IoT, AI, AIoT, Web, App, Game, and Roblox development.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={SOCIALS.GITHUB} aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">GitHub</a>
            <a href={SOCIALS.YOUTUBE} aria-label="YouTube" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">YouTube</a>
            <a href={SOCIALS.LINKEDIN} aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">LinkedIn</a>
            <a href={SOCIALS.EMAIL} aria-label="Email" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Email</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Tech Nexus. All rights reserved.</div>
      </div>
    </footer>
  );
}
