import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee text-cream py-16 border-t border-cream/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-3xl font-serif font-bold text-gold mb-6">
              <Coffee />
              <span>CAFÉ BORGÔ</span>
            </div>
            <p className="text-cream/50 max-w-sm font-light leading-relaxed">
              Uma galeria de sabores em Jundiaí. Dedicados à arte do café especial e à sofisticação do momento presente.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Explorar</h4>
            <ul className="space-y-4 text-cream/60 font-light">
              <li><a href="#inicio" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#colecao" className="hover:text-gold transition-colors">Coleção</a></li>
              <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/30 text-xs uppercase tracking-widest">
          <p>© 2024 Café Borgô. Todos os direitos reservados.</p>
          <p>Feito com paixão em Jundiaí.</p>
        </div>
      </div>
    </footer>
  );
}
