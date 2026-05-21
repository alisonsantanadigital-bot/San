import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "../lib-site-config";

export default function Testimonials() {
  return (
    <section className="py-24 bg-wine text-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 text-cream/5 opacity-20"><Quote size={200} /></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16"><span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Prova Social</span><h2 className="text-4xl md:text-5xl font-serif font-bold">AVALIAÇÕES INSTITUCIONAIS</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((content, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-coffee/40 backdrop-blur-sm p-10 rounded-3xl border border-cream/10">
              <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}</div>
              <p className="text-cream/80 italic font-light leading-relaxed text-lg">"{content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
