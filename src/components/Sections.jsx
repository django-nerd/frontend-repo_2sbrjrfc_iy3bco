import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BrainCircuit, CircuitBoard, Sparkles } from 'lucide-react';

function Panel({ index, title, eyebrow, children }) {
  const { scrollYProgress } = useScroll({ offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [60, 0, -40]);

  return (
    <motion.section
      id={title.toLowerCase()}
      style={{ opacity, y }}
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] text-yellow-300/90">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            {title}
          </h2>
          <div className="mt-6 text-zinc-300">
            {children}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2.5 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/15">
            Discuss a brief <ArrowRight size={16} />
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-black p-8">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            {index === 0 && (
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Sparkles, label: 'Generative UX' },
                  { icon: BrainCircuit, label: 'ML Engineering' },
                  { icon: CircuitBoard, label: 'Realtime Systems' },
                  { icon: Sparkles, label: '3D Interfaces' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-black/40 p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-tr from-yellow-400 to-yellow-200 text-black">
                      <Icon size={18} />
                    </div>
                    <div className="text-sm font-medium text-white">{label}</div>
                  </div>
                ))}
              </div>
            )}

            {index === 1 && (
              <div className="grid gap-4 text-zinc-300">
                <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                  We orchestrate data pipelines, model serving, and GPU-aware infrastructure for latency-critical products.
                </div>
                <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                  Our design language fuses cinematic motion with rigorous information architecture.
                </div>
                <div className="rounded-xl border border-zinc-800 bg-black/40 p-6">
                  Security-first delivery with robust testing and observability baked in.
                </div>
              </div>
            )}

            {index === 2 && (
              <div className="grid grid-cols-3 gap-6">
                {['OpenAI', 'Stability', 'NVIDIA', 'AWS', 'GCP', 'HuggingFace'].map((brand) => (
                  <div key={brand} className="flex items-center justify-center rounded-xl border border-zinc-800 bg-black/40 p-6 text-sm font-semibold text-zinc-200">
                    {brand}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Sections() {
  return (
    <div className="relative bg-black">
      <Panel index={0} title="Capabilities" eyebrow="WHAT WE DO">
        From strategy and research to production deployment, we deliver end-to-end AI products. Interfaces that move. Systems that scale.
      </Panel>
      <Panel index={1} title="Approach" eyebrow="HOW WE WORK">
        We partner deeply with your team to discover the signal, craft the story, and build the engine that powers it.
      </Panel>
      <Panel index={2} title="Partners" eyebrow="TRUSTED BY">
        We collaborate with future-facing companies moving at the speed of invention.
      </Panel>
    </div>
  );
}
