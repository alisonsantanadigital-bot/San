import { motion } from "motion/react";
import { MapPin, Phone, Instagram, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-serif italic text-lg mb-2 block tracking-widest uppercase">Conecte-se</span>
            <h2 className="section-title">ONDE NOS ENCONTRAR</h2>
            
            <div className="space-y-10 mt-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1 text-wine">Endereço</h4>
                  <p className="text-coffee/70 font-light">Rua das Orquídeas, 123 — Jardim Botânico<br />Jundiaí, SP — CEP 13214-000</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1 text-wine">Horários</h4>
                  <p className="text-coffee/70 font-light">Terça a Sexta: 09:00 — 20:00<br />Sábados e Domingos: 08:30 — 21:00</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center text-wine shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1 text-wine">Contato</h4>
                  <p className="text-coffee/70 font-light">+55 (11) 94289-0717</p>
                  <div className="flex gap-4 mt-4">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-wine hover:text-gold transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="https://wa.me/5511942890717" target="_blank" rel="noreferrer" className="text-wine hover:text-gold transition-colors">
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/5511942890717"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 inline-flex items-center gap-3 bg-wine text-cream px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-coffee transition-all"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </motion.a>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5007823831356!2d-46.8984167!3d-23.1884136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf276af5d86681%3A0xe7ec6cc6dac7c106!2sCaf%C3%A9%20Borg%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.5) contrast(1.1) invert(0.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
