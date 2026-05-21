import { Scale, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "../lib-site-config";

export default function Footer() {
  return (
    <footer className="bg-coffee text-cream py-16 border-t border-cream/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2"><div className="flex items-center gap-2 text-3xl font-serif font-bold text-gold mb-6"><Scale /><span>{siteConfig.professional.name}</span></div><p className="text-cream/50 max-w-sm font-light leading-relaxed">Advocacia trabalhista com seriedade, clareza e transparência.</p></div>
          <div><h4 className="font-serif font-bold text-xl mb-6">Explorar</h4><ul className="space-y-4 text-cream/60 font-light"><li><a href="#inicio">Início</a></li><li><a href="#sobre">Quem Somos</a></li><li><a href="#colecao">Soluções</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div><h4 className="font-serif font-bold text-xl mb-6">Canais</h4><div className="flex gap-4"><a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center"><Instagram size={18} /></a><a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center"><MessageCircle size={18} /></a></div></div>
        </div>
      </div>
    </footer>
  );
}
