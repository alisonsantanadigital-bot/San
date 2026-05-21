export const siteConfig = {
  seo: {
    title: "Soloneto Saldanha | Advogado Trabalhista",
    description:
      "Advocacia trabalhista com atendimento humanizado, orientação clara e atuação responsável em questões de trabalho, rescisão, horas extras, vínculo empregatício e direitos trabalhistas.",
    keywords:
      "advogado trabalhista, advocacia trabalhista, direitos trabalhistas, rescisão trabalhista, horas extras, vínculo empregatício, assédio moral no trabalho, Soloneto Saldanha"
  },
  professional: {
    name: "Soloneto Saldanha",
    segment: "Advocacia Trabalhista",
    badge: "Assessoria Jurídica Trabalhista",
    phoneDisplay: "(11) 96933-5179",
    instagramUser: "@solonetosaldanha.adv"
  },
  links: {
    whatsapp: "https://wa.me/5511969335179?text=Olá,%20Dr.%20Soloneto.%20Vim%20pelo%20site%20e%20gostaria%20de%20orientação%20jurídica%20trabalhista.",
    instagram: "https://www.instagram.com/solonetosaldanha.adv/"
  },
  hero: {
    title: "Advocacia Trabalhista com clareza, estratégia e responsabilidade",
    subtitle:
      "Atendimento jurídico para quem precisa entender seus direitos, avaliar riscos e tomar decisões com segurança em questões trabalhistas.",
    ctaPrimary: "Falar com o advogado no WhatsApp",
    ctaSecondary: "Conhecer atuação profissional"
  },
  stats: ["Atendimento humanizado", "Atuação trabalhista", "Comunicação clara", "Orientação responsável"],
  about: {
    title: "Uma atuação jurídica construída sobre clareza, ética e responsabilidade",
    text: [
      "Soloneto Saldanha atua na advocacia trabalhista com foco em oferecer orientação clara, análise cuidadosa e acompanhamento responsável para pessoas que enfrentam dúvidas, conflitos ou decisões importantes na relação de trabalho.",
      "A proposta do atendimento é unir conhecimento técnico, escuta humanizada e comunicação objetiva, para que cada cliente compreenda seu cenário jurídico antes de tomar qualquer decisão."
    ]
  },
  services: [
    { title: "Rescisão trabalhista", description: "Análise de verbas rescisórias, direitos pendentes e possíveis irregularidades no encerramento do contrato de trabalho." },
    { title: "Horas extras", description: "Orientação sobre jornada, banco de horas, controle de ponto e possíveis diferenças trabalhistas." },
    { title: "Vínculo empregatício", description: "Avaliação de situações em que a relação de trabalho pode caracterizar vínculo, mesmo sem registro formal." },
    { title: "Assédio moral no trabalho", description: "Análise responsável de situações de constrangimento, abuso, pressão excessiva ou condutas inadequadas no ambiente profissional." },
    { title: "Verbas trabalhistas", description: "Conferência de pagamentos, férias, décimo terceiro, FGTS, adicionais e demais direitos previstos na legislação." },
    { title: "Defesa e orientação para empresas", description: "Apoio jurídico preventivo e estratégico para empresas que desejam reduzir riscos trabalhistas e agir com segurança." }
  ],
  differentials: [
    "Atendimento direto e humanizado",
    "Explicação simples, sem juridiquês",
    "Análise responsável antes de qualquer medida",
    "Comunicação transparente",
    "Foco em segurança jurídica",
    "Atuação ética conforme as normas da OAB"
  ],
  testimonials: [
    "Depoimento de cliente preservado por sigilo profissional.",
    "Atendimento reconhecido pela clareza nas orientações.",
    "Comunicação objetiva durante todo o acompanhamento."
  ]
};

export const serviceWhatsappLink = (service: string) =>
  `https://wa.me/5511969335179?text=${encodeURIComponent(`Olá, Dr. Soloneto. Vim pelo site e gostaria de falar sobre: ${service}.`)}`;
