import { motion } from "motion/react";
import { siteConfig } from "../lib-site-config";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="order-2 lg:order-1">
            <span className="text-gold font-serif italic text-lg mb-4 block tracking-widest">Quem Somos</span>
            <h2 className="section-title">{siteConfig.about.title}</h2>
            <div className="space-y-6 text-coffee/80 text-lg leading-relaxed font-light">
              {siteConfig.about.text.map((p) => <p key={p}>{p}</p>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 border border-gold/30 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" alt="Advocacia trabalhista" className="w-full h-[600px] object-cover rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
