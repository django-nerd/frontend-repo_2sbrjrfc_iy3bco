import { motion } from 'framer-motion';

const words = [
  'RESEARCH', 'DESIGN', 'ENGINEERING', 'GENERATION', 'REALTIME', '3D', 'ML', 'SYSTEMS', 'UX', 'QUALITY'
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-black py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      <motion.div
        className="flex gap-14 whitespace-nowrap text-4xl font-black tracking-tight text-transparent sm:text-6xl"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.22)' }}
      >
        {[...words, ...words].map((w, i) => (
          <span key={i} className="select-none">
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
