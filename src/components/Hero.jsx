import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { COMMUNITY } from '../config';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-90" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 dark:from-black/70 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Build the future with IoT, AI, and beyond
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
              A modern hub for makers building IoT, AIoT, Web, Apps, Games, and Roblox experiences. Learn, ship projects, and grow with a supportive community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMMUNITY.DISCORD_URL}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Join Discord
              </a>
              <a
                href={COMMUNITY.WHATSAPP_URL}
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Join WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
