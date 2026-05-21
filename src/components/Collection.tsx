import { motion } from "motion/react";
import { siteConfig, serviceWhatsappLink } from "../lib-site-config";

export default function Collection() {
  return (
    <section id="colecao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Atuação Profissional</span>
          <h2 className="section-title">SOLUÇÕES TRABALHISTAS</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteConfig.services.map((item, idx) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="group rounded-2xl border border-wine/10 p-8 bg-cream/50 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-wine mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-coffee/70 font-light leading-relaxed mb-6">{item.description}</p>
              <a href={serviceWhatsappLink(item.title)} target="_blank" rel="noopener noreferrer" className="text-wine font-semibold hover:text-gold transition-colors">Fale sobre este assunto</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
