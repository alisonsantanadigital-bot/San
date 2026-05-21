import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "../lib-site-config";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-coffee/70 z-10" />
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1920" alt={siteConfig.professional.segment} className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 text-center text-cream">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <h2 className="text-gold font-serif italic text-xl md:text-2xl mb-4 tracking-wide">{siteConfig.professional.badge}</h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">{siteConfig.hero.title}</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-cream/80 mb-12 font-light leading-relaxed">{siteConfig.hero.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto text-center">{siteConfig.hero.ctaPrimary}</a>
            <a href="#sobre" className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-coffee w-full md:w-auto text-center">{siteConfig.hero.ctaSecondary}</a>
          </div>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-cream/50">
        <span className="text-xs uppercase tracking-[0.3em] mb-2">Deslize</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown size={24} /></motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
}
