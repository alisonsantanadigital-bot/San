import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ana Beatriz",
    role: "Arquiteta",
    content: "O Café Borgô é meu refúgio em Jundiaí. A estética é impecável e o café autoral é simplesmente divino.",
    rating: 5
  },
  {
    name: "Ricardo Mendes",
    role: "Sommelier",
    content: "Fiquei impressionado com a curadoria dos grãos. Um nível de sofisticação que raramente se encontra fora das capitais europeias.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    role: "Designer",
    content: "Cada detalhe, da trilha sonora à cerâmica, faz você se sentir em uma galeria de arte. O brunch é uma experiência à parte.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-wine text-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 text-cream/5 opacity-20">
        <Quote size={200} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Relatos</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">O QUE DIZEM NOSSOS VISITANTES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-coffee/40 backdrop-blur-sm p-10 rounded-3xl border border-cream/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-cream/80 italic font-light leading-relaxed mb-8 text-lg">
                  "{t.content}"
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-gold text-xl">{t.name}</h4>
                <span className="text-cream/40 text-sm uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
