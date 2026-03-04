import { motion } from "motion/react";
import { Sparkles, Wind, Music, Eye } from "lucide-react";

const EXPERIENCES = [
  {
    icon: <Eye size={32} />,
    title: "Estética Minimalista",
    description: "Um ambiente onde o olhar descansa e a alma se inspira."
  },
  {
    icon: <Music size={32} />,
    title: "Trilha Curada",
    description: "Jazz e Bossa Nova em vinil para acompanhar seu ritual."
  },
  {
    icon: <Wind size={32} />,
    title: "Aromas Únicos",
    description: "A fragrância do café recém-torrado que abraça quem entra."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Detalhes em Ouro",
    description: "Do serviço à decoração, a sofisticação está no detalhe."
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-coffee text-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wine/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
          >
            NÃO É APENAS CAFÉ. <br /> <span className="text-gold italic">É ATMOSFERA.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-cream/60 text-lg font-light"
          >
            No Café Borgô, cada elemento foi orquestrado para criar uma experiência multissensorial. 
            Do toque da cerâmica artesanal ao som suave do jazz, convidamos você a estar presente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-coffee transition-all duration-500">
                {exp.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">
                {exp.title}
              </h3>
              <p className="text-cream/50 font-light text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
