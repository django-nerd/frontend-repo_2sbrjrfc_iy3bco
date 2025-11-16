import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-full border border-zinc-800/80 bg-zinc-900/50 px-4 py-3 backdrop-blur">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 text-black shadow-[0_0_30px_-6px_rgba(250,204,21,0.7)]">
              <Sparkles size={18} />
            </div>
            <span className="text-sm font-semibold tracking-wider text-zinc-200">
              NOVA.AI
            </span>
          </motion.div>

          <div className="hidden gap-8 md:flex">
            {[
              "Work",
              "Capabilities",
              "Approach",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-zinc-400 transition hover:text-zinc-100"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-300 ring-1 ring-inset ring-yellow-500/20 transition hover:bg-yellow-400/15 md:text-sm">
            <span>Start a project</span>
          </button>

          <button className="md:hidden text-zinc-200">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
}
