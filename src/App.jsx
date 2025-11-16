import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Sections />

      <footer id="contact" className="relative z-10 border-t border-zinc-900 bg-black/90 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-extrabold text-white">Let’s build what’s next.</h3>
              <p className="mt-3 max-w-xl text-zinc-400">
                Tell us about your product and goals. We’ll respond within 24 hours with a tailored path forward.
              </p>
            </div>
            <form className="grid gap-4">
              <input className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Your name" />
              <input className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Email" />
              <textarea rows={4} className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40" placeholder="Project details" />
              <button className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_-10px_rgba(250,204,21,0.75)] transition hover:opacity-90">
                Request proposal
              </button>
            </form>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-zinc-900 pt-6 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} NOVA.AI — All rights reserved.</span>
            <span>Made with precision and care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
