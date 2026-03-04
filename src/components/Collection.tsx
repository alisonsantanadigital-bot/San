import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  "Cafés Autorais",
  "Bebidas Artesanais",
  "Confeitaria Exclusiva",
  "Brunch Sensorial"
];

const MENU_ITEMS = [
  {
    id: 1,
    category: "Cafés Autorais",
    name: "Borgô Velvet",
    description: "Espresso duplo com notas de chocolate amargo e espuma de avelã.",
    price: "R$ 18,00",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    category: "Cafés Autorais",
    name: "Amanhecer em Jundiaí",
    description: "Café coado V60 com infusão de casca de laranja e mel silvestre.",
    price: "R$ 16,00",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    category: "Bebidas Artesanais",
    name: "Matcha Cerimonial",
    description: "Matcha premium com leite de amêndoas e um toque de baunilha.",
    price: "R$ 22,00",
    image: "https://images.unsplash.com/photo-1515823662273-ad9525e58846?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    category: "Confeitaria Exclusiva",
    name: "Éclair de Pistache",
    description: "Massa choux recheada com creme de pistache iraniano e cobertura de ouro.",
    price: "R$ 24,00",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    category: "Brunch Sensorial",
    name: "Toast de Figo e Brie",
    description: "Pão de fermentação natural, queijo brie derretido, figos frescos e mel.",
    price: "R$ 38,00",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    category: "Cafés Autorais",
    name: "Cold Brew Infusion",
    description: "Café extraído a frio por 18h com notas de frutas vermelhas.",
    price: "R$ 19,00",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="colecao" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Curadoria</span>
          <h2 className="section-title">NOSSA COLEÇÃO</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-2 text-sm uppercase tracking-[0.2em] transition-all duration-300 relative ${
                activeCategory === cat ? "text-wine font-bold" : "text-coffee/40 hover:text-wine/60"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-coffee/20 group-hover:bg-coffee/40 transition-colors duration-500" />
                  <div className="absolute bottom-6 right-6 bg-cream text-wine px-4 py-2 rounded-full font-bold shadow-lg">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-wine mb-2 group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-coffee/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
