import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-coffee/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920"
          alt="Interior do Café Borgô"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center text-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-gold font-serif italic text-xl md:text-2xl mb-4 tracking-wide">
            Onde o grão encontra a alma
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
            A ARTE DE <br /> <span className="text-gold">DEGUSTAR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-cream/80 mb-12 font-light leading-relaxed">
            Em Jundiaí, uma experiência sensorial que transcende o paladar. 
            Café Borgô é o refúgio para quem busca sofisticação em cada xícara.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#galeria" className="btn-primary w-full md:w-auto text-center">
              Explorar a Galeria
            </a>
            <a href="#colecao" className="btn-outline !border-cream !text-cream hover:!bg-cream hover:!text-coffee w-full md:w-auto text-center">
              Ver a Coleção
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-cream/50"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2">Deslize</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
}
