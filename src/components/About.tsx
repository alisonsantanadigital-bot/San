import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <span className="text-gold font-serif italic text-lg mb-4 block tracking-widest">Nossa Essência</span>
            <h2 className="section-title">UMA NARRATIVA ESCRITA EM <span className="italic">AROMA</span></h2>
            <div className="space-y-6 text-coffee/80 text-lg leading-relaxed font-light">
              <p>
                O Café Borgô nasceu do desejo de transformar o ato cotidiano de beber café em um ritual artístico. 
                Localizado no coração de Jundiaí, nosso espaço foi projetado como uma galeria viva, onde cada detalhe 
                — da curadoria dos grãos à arquitetura minimalista — conta uma história de paixão e refinamento.
              </p>
              <p>
                Nossos baristas não apenas preparam bebidas; eles orquestram experiências. 
                Utilizamos métodos artesanais e grãos de origem única, selecionados em fazendas que compartilham 
                nosso compromisso com a excelência e a sustentabilidade.
              </p>
              <p className="italic font-serif text-wine font-medium">
                "Não servimos apenas café. Oferecemos pausas poéticas em meio ao caos urbano."
              </p>
            </div>
            
            <motion.div 
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-sm uppercase tracking-widest text-gold font-bold">Fundado em 2022</span>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 border border-gold/30 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
              alt="Barista preparando café"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 -left-8 bg-wine text-cream p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
              <p className="font-serif italic text-xl">"A perfeição está na paciência do preparo."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
