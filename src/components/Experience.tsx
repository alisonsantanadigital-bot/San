import { motion } from "motion/react";
import { ShieldCheck, Handshake, MessageSquareText, Scale, SearchCheck, BookOpenText } from "lucide-react";
import { siteConfig } from "../lib-site-config";

const icons = [Handshake, BookOpenText, SearchCheck, MessageSquareText, ShieldCheck, Scale];

export default function Experience() {
  return (
    <section id="diferenciais" className="py-24 bg-coffee text-cream relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-serif mb-8 leading-tight">DIFERENCIAIS DA <span className="text-gold italic">ATUAÇÃO</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteConfig.differentials.map((exp, index) => {
            const Icon = icons[index % icons.length];
            return <motion.div key={exp} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex flex-col items-center text-center group"><div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-coffee transition-all duration-500"><Icon size={30} /></div><p className="text-cream/70 font-light text-sm leading-relaxed">{exp}</p></motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}
