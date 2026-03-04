import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Coffee } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Coleção", href: "#colecao" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-coffee/90 backdrop-blur-lg shadow-xl" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-2xl font-serif font-bold text-cream tracking-tighter"
        >
          <Coffee className="text-gold" />
          <span>CAFÉ BORGÔ</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-cream/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/5511942890717"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gold text-coffee px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cream transition-colors"
          >
            Reservar
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-coffee border-t border-cream/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream/80 hover:text-gold text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5511942890717"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-coffee px-6 py-3 rounded-full font-bold text-center mt-4"
              >
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
