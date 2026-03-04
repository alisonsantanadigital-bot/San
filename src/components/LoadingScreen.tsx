import { motion } from "motion/react";
import { Coffee } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-coffee text-cream"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Coffee size={64} className="text-gold mb-6" />
        <motion.h1 
          className="text-4xl md:text-5xl font-serif mb-4 tracking-widest"
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.2em", opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          CAFÉ BORGÔ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gold/80 italic font-serif text-lg"
        >
          Prepare-se para entrar em uma obra viva.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 w-48 h-[1px] bg-gold/20 overflow-hidden"
      >
        <motion.div 
          className="h-full bg-gold"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
}
