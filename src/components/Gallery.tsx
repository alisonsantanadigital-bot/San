import { motion } from "motion/react";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    alt: "Fachada do Café Borgô",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    alt: "Latte Art",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    alt: "Doces e Confeitaria",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    alt: "Ambiente Interno",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    alt: "Clientes desfrutando",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Visual</span>
            <h2 className="section-title !mb-0">GALERIA IMERSIVA</h2>
          </div>
          <p className="text-coffee/60 max-w-xs font-light italic">
            Cada ângulo do Café Borgô foi pensado para ser um quadro. Sinta a atmosfera através das lentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-wine/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-cream font-serif italic text-xl border-b border-cream/50 pb-2">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
