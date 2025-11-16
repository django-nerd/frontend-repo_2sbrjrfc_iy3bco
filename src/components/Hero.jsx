import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      <motion.div style={{ opacity, y, scale }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-end px-6 pb-24 pt-40 sm:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl font-black tracking-tight text-white sm:text-7xl"
          >
            Intelligent experiences
            <br /> forged in code and light.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300"
          >
            We are a boutique AI agency crafting cinematic interfaces and
            production-grade systems. Precision, performance, and polish at
            every layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="pointer-events-auto rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_-10px_rgba(250,204,21,0.75)] transition hover:opacity-90"
            >
              Explore work
            </a>
            <a
              href="#contact"
              className="pointer-events-auto rounded-full border border-zinc-800/80 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Start a project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
