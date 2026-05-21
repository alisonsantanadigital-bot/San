import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "../lib-site-config";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", tipo: "", mensagem: "", horario: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dr. Soloneto. Vim pelo site.%0A- Nome: ${form.nome}%0A- WhatsApp: ${form.whatsapp}%0A- Tipo de situação trabalhista: ${form.tipo}%0A- Mensagem: ${form.mensagem}%0A- Melhor horário para contato: ${form.horario}`;
    window.open(`https://wa.me/5511969335179?text=${text}`, "_blank");
  };
  return <section id="contato" className="py-24 bg-cream"><div className="container mx-auto px-6"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><h2 className="section-title">CANAL DE CONVERSÃO</h2><p className="text-coffee/70 mb-8">Atendimento jurídico mediante agendamento. Canais digitais disponíveis para primeiro contato.</p><p className="text-coffee/70 mb-2 flex items-center gap-3"><Phone size={18} />{siteConfig.professional.phoneDisplay}</p><div className="flex gap-4 mt-4"><a href={siteConfig.links.instagram} target="_blank" rel="noreferrer"><Instagram /></a><a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /></a></div></motion.div><motion.form onSubmit={submit} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="space-y-4 bg-white p-8 rounded-2xl shadow-xl">{[['nome','Nome'],['whatsapp','WhatsApp'],['tipo','Tipo de situação trabalhista'],['horario','Melhor horário para contato']].map(([k,ph])=><input key={k} placeholder={ph} className="w-full border border-coffee/20 rounded-xl px-4 py-3" value={(form as any)[k]} onChange={e=>setForm({...form,[k]:e.target.value})} />)}<textarea placeholder="Mensagem" className="w-full border border-coffee/20 rounded-xl px-4 py-3 min-h-28" value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})}/><button className="btn-primary w-full">Iniciar conversa no WhatsApp</button></motion.form></div></div></section>;
}
