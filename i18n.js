// =====================================================
// TRADUÇÕES DO SITE — Português / Inglês
// Para editar um texto, muda a linha correspondente aqui.
// Não precisas de tocar no index.html para mudar palavras.
//
// PACOTES / PREÇOS: as chaves "plan.*" e "extras.*" controlam
// tudo o que aparece nos 3 cartões de preços e nos extras.
// Para mudar um preço, quantidade ou benefício, edita só o
// valor à direita dos dois pontos (mantém as aspas).
// =====================================================

const translations = {
  pt: {
    "meta.title": "Pedro Fernandes — Fotografia & Vídeo",
    "meta.description": "Pedro Fernandes — fotografia e vídeo de lifestyle, viagem, casamentos e desporto.",

    "nav.portfolio": "Portefólio",
    "nav.about": "Sobre",
    "nav.quote": "Orçamento",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Fotografia & Vídeo — Lifestyle · Viagem · Casamentos · Desporto",
    "hero.title": "Cada instante<br>tem <em>um único</em><br>fotograma.",
    "hero.sub": "Sou o Pedro. Passo a vida entre estradas, cerimónias e bancadas — a apanhar o momento que não se repete.",
    "hero.cta": "Ver trabalhos ↓",

    "portfolio.title": "Portefólio",
    "portfolio.note": "Desliza para explorar",

    "work.1.title": "Vida em Trânsito",
    "work.1.desc": "Uma série sobre viver fora da mala — estradas, fronteiras e o quarto que muda todas as semanas.",
    "work.2.title": "Sim, Aceito",
    "work.2.desc": "Um casamento ao ar livre contado pelos detalhes: as mãos, o silêncio antes do \"sim\", o primeiro abraço.",
    "work.3.title": "Último Lance",
    "work.3.desc": "Os segundos finais de um jogo decisivo — tensão, suor e a explosão do apito final.",
    "work.4.title": "Manhã Devagar",
    "work.4.desc": "Retratos de rotina — café, luz de janela, e os pequenos rituais que ninguém mostra no feed.",
    "work.5.title": "Ao Nascer do Dia",
    "work.5.desc": "Uma viagem de carrinha pela costa — madrugadas, paragens improvisadas e o oceano como constante.",
    "work.6.title": "Espaços que Vendem",
    "work.6.desc": "Fotografia de imóveis pensada para destacar luz, amplitude e detalhe — imagens que aceleram a venda.",

    "tag.lifestyle": "Lifestyle",
    "tag.viagem": "Viagem",
    "tag.casamento": "Casamento",
    "tag.desporto": "Desporto",
    "cta.instagram": "Ver no Instagram →",
    "cta.quote": "Pedir orçamento →",

    "tab.lifestyle": "Lifestyle & Viagem",
    "tab.casamentos": "Casamentos",
    "tab.desporto": "Desporto",
    "tab.imobiliaria": "Imobiliária",

    "about.title": "Sobre mim",
    "about.p1": "Chamo-me Pedro da Silva Fernandes. Divido o meu trabalho entre quatro mundos que, no fundo, são só um: pessoas em momentos que não voltam a acontecer — numa estrada, num altar, num campo, ou numa manhã qualquer em casa.",
    "about.p2": "Gosto de trabalhar sem guião. Prefiro esperar pelo instante certo a montá-lo, e é essa procura que me leva de viagens de mochila às costas a casamentos ao ar livre e a bancadas cheias de gente a gritar por um golo.",

    /* ---------- PACOTES / PREÇOS ---------- */
    "pricing.title": "Pacotes & Preços",
    "pricing.note": "Para empresas e marcas",
    "pricing.lead": "Conteúdo profissional de fotografia e vídeo para redes sociais, pensado para empresas e marcas. Escolhe o pacote certo para o teu negócio.",

    "plan.basic.name": "Basic",
    "plan.basic.tagline": "Conteúdo essencial para pequenos negócios que querem começar a comunicar nas redes sociais.",
    "plan.basic.price": "250",
    "plan.basic.f1": "Até 2 horas de captação",
    "plan.basic.f2": "15 fotografias profissionais editadas",
    "plan.basic.f3": "1 vídeo vertical Instagram/TikTok",
    "plan.basic.f4": "Vídeo até 30 segundos",
    "plan.basic.f5": "Edição profissional",
    "plan.basic.f6": "1 ronda de alterações",
    "plan.basic.f7": "Entrega em 5–7 dias úteis",
    "plan.basic.f8": "Formato otimizado para redes sociais",
    "plan.basic.cta": "Escolher Basic",

    "plan.pro.badge": "Mais Popular",
    "plan.pro.name": "Pro",
    "plan.pro.tagline": "A melhor relação qualidade/preço para empresas que querem criar conteúdo com regularidade.",
    "plan.pro.price": "450",
    "plan.pro.f1": "Até 4 horas de captação",
    "plan.pro.f2": "30 fotografias profissionais editadas",
    "plan.pro.f3": "3 vídeos verticais Instagram/TikTok",
    "plan.pro.f4": "Vídeos até 45 segundos cada",
    "plan.pro.f5": "Edição profissional",
    "plan.pro.f6": "2 rondas de alterações",
    "plan.pro.f7": "Entrega em 5–7 dias úteis",
    "plan.pro.f8": "Formatos otimizados para redes sociais",
    "plan.pro.cta": "Escolher Pro",

    "plan.custom.name": "Custom",
    "plan.custom.tagline": "Solução 100% personalizada para marcas, empresas e clientes com necessidades específicas.",
    "plan.custom.from": "Desde",
    "plan.custom.price": "600",
    "plan.custom.intro": "Personaliza o que precisares:",
    "plan.custom.c1": "Horas de captação",
    "plan.custom.c2": "Nº de fotografias",
    "plan.custom.c3": "Nº de vídeos",
    "plan.custom.c4": "Vertical ou horizontal",
    "plan.custom.c5": "Conteúdo para anúncios",
    "plan.custom.c6": "Fotografia de produto",
    "plan.custom.c7": "Entrevistas",
    "plan.custom.c8": "Campanhas de marca",
    "plan.custom.c9": "Cobertura de eventos",
    "plan.custom.cta": "Personalizar projeto",

    "pricing.footnote": "Ao escolher um pacote, o pedido é enviado com o plano já associado — não precisas de o voltar a indicar.",

    "extras.title": "Serviços adicionais",
    "extras.e1": "Vídeo vertical adicional",
    "extras.e2": "Vídeo horizontal adicional",
    "extras.e3": "10 fotografias adicionais",
    "extras.e4": "Hora adicional de captação",
    "extras.e5": "Entrega urgente",
    "extras.e6": "Fotografia de produto",
    "extras.e6price": "desde €100",
    "extras.e7": "Vídeo publicitário / Ad",
    "extras.e7price": "desde €150",
    "extras.e8": "Deslocações fora da zona habitual",

    "quote.title": "Pedido de orçamento",
    "quote.note": "Resposta em 48 horas",

    /* ---------- MODAL DE PEDIDO ---------- */
    "modal.field.name": "Nome",
    "modal.field.email": "Email",
    "modal.field.phone": "Telefone",
    "modal.field.company": "Empresa / Marca (opcional)",
    "modal.field.date": "Data pretendida",
    "modal.field.location": "Localização do projeto",
    "modal.field.type": "Tipo de projeto",
    "modal.field.description": "Descrição do projeto",

    "modal.type.placeholder": "Escolhe uma opção",
    "modal.type.social": "Conteúdo para redes sociais",
    "modal.type.photo": "Fotografia",
    "modal.type.video": "Vídeo",
    "modal.type.photovideo": "Fotografia + Vídeo",
    "modal.type.ad": "Publicidade / Ad",
    "modal.type.product": "Produto",
    "modal.type.event": "Evento",
    "modal.type.other": "Outro",

    "modal.plan.line": "Plano selecionado: {name} — €{price}",
    "modal.custom.line": "Projeto personalizado — orçamento a partir de €{price}",

    "modal.submit.default": "Enviar pedido",
    "modal.submit.custom": "Solicitar orçamento",
    "modal.submit.sending": "A enviar...",
    "modal.cancel": "Cancelar",

    "modal.success.title": "Pedido enviado com sucesso!",
    "modal.success.body": "Obrigado pelo seu interesse. Vou analisar o seu pedido e entrar em contacto consigo brevemente para confirmar disponibilidade e os próximos passos.",
    "modal.success.signal": "Após a confirmação da disponibilidade, será solicitado um sinal de 50% (€{signal}) para reservar a data.",
    "modal.success.close": "Fechar",

    "modal.error": "Algo correu mal ao enviar o pedido. Tenta novamente ou escreve para pedrosilvasp458@gmail.com.",
    "modal.error.notConfigured": "O formulário ainda não está ligado ao teu email — segue o COMO-EDITAR.md para o ativar.",

    "form.error.required": "Campo obrigatório.",
    "form.error.email": "Introduz um email válido.",
    "form.error.phone": "Introduz um telefone válido.",

    "contact.title": "Vamos falar",
    "contact.sub": "Tens um projeto em mente? Conta-me a tua ideia.",

    "footer.text": "© 2026 Pedro Fernandes. Feito fotograma a fotograma."
  },

  en: {
    "meta.title": "Pedro Fernandes — Photography & Video",
    "meta.description": "Pedro Fernandes — lifestyle, travel, wedding and sports photography and video.",

    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.quote": "Get a Quote",
    "nav.contact": "Contact",

    "hero.eyebrow": "Photography & Video — Lifestyle · Travel · Weddings · Sport",
    "hero.title": "Every moment<br>has <em>one single</em><br>frame.",
    "hero.sub": "I'm Pedro. I split my life between open roads, ceremonies and stadium stands — catching the moment that won't happen twice.",
    "hero.cta": "See the work ↓",

    "portfolio.title": "Portfolio",
    "portfolio.note": "Swipe to explore",

    "work.1.title": "Life in Transit",
    "work.1.desc": "A series about living out of a bag — roads, borders, and a bedroom that changes every week.",
    "work.2.title": "I Do",
    "work.2.desc": "An outdoor wedding told through the details: hands, the silence before \"I do\", the first embrace.",
    "work.3.title": "Last Play",
    "work.3.desc": "The final seconds of a decisive match — tension, sweat, and the explosion of the final whistle.",
    "work.4.title": "Slow Morning",
    "work.4.desc": "Portraits of routine — coffee, window light, and the small rituals nobody shows on the feed.",
    "work.5.title": "At Daybreak",
    "work.5.desc": "A van trip along the coast — early mornings, unplanned stops, and the ocean as a constant.",
    "work.6.title": "Spaces that Sell",
    "work.6.desc": "Real estate photography built to highlight light, space and detail — images that speed up the sale.",

    "tag.lifestyle": "Lifestyle",
    "tag.viagem": "Travel",
    "tag.casamento": "Wedding",
    "tag.desporto": "Sport",
    "cta.instagram": "See on Instagram →",
    "cta.quote": "Get a quote →",

    "tab.lifestyle": "Lifestyle & Travel",
    "tab.casamentos": "Weddings",
    "tab.desporto": "Sport",
    "tab.imobiliaria": "Real Estate",

    "about.title": "About me",
    "about.p1": "My name is Pedro da Silva Fernandes. I split my work between four worlds that are really just one: people in moments that won't happen again — on a road, at an altar, on a field, or on an ordinary morning at home.",
    "about.p2": "I like working without a script. I'd rather wait for the right moment than stage it, and that search is what takes me from backpacking trips to outdoor weddings to stands full of people screaming for a goal.",

    /* ---------- PACKAGES / PRICING ---------- */
    "pricing.title": "Packages & Pricing",
    "pricing.note": "For businesses and brands",
    "pricing.lead": "Professional photography and video content for social media, built for businesses and brands. Pick the package that fits your business.",

    "plan.basic.name": "Basic",
    "plan.basic.tagline": "Essential content for small businesses starting to show up on social media.",
    "plan.basic.price": "250",
    "plan.basic.f1": "Up to 2 hours of shooting",
    "plan.basic.f2": "15 professionally edited photos",
    "plan.basic.f3": "1 vertical video for Instagram/TikTok",
    "plan.basic.f4": "Video up to 30 seconds",
    "plan.basic.f5": "Professional editing",
    "plan.basic.f6": "1 round of revisions",
    "plan.basic.f7": "Delivery in 5–7 business days",
    "plan.basic.f8": "Format optimised for social media",
    "plan.basic.cta": "Choose Basic",

    "plan.pro.badge": "Most Popular",
    "plan.pro.name": "Pro",
    "plan.pro.tagline": "The best value for businesses that want to create content regularly.",
    "plan.pro.price": "450",
    "plan.pro.f1": "Up to 4 hours of shooting",
    "plan.pro.f2": "30 professionally edited photos",
    "plan.pro.f3": "3 vertical videos for Instagram/TikTok",
    "plan.pro.f4": "Videos up to 45 seconds each",
    "plan.pro.f5": "Professional editing",
    "plan.pro.f6": "2 rounds of revisions",
    "plan.pro.f7": "Delivery in 5–7 business days",
    "plan.pro.f8": "Formats optimised for social media",
    "plan.pro.cta": "Choose Pro",

    "plan.custom.name": "Custom",
    "plan.custom.tagline": "A fully tailored solution for brands, businesses and clients with specific needs.",
    "plan.custom.from": "From",
    "plan.custom.price": "600",
    "plan.custom.intro": "Customise what you need:",
    "plan.custom.c1": "Shooting hours",
    "plan.custom.c2": "Number of photos",
    "plan.custom.c3": "Number of videos",
    "plan.custom.c4": "Vertical or horizontal",
    "plan.custom.c5": "Ad content",
    "plan.custom.c6": "Product photography",
    "plan.custom.c7": "Interviews",
    "plan.custom.c8": "Brand campaigns",
    "plan.custom.c9": "Event coverage",
    "plan.custom.cta": "Customise project",

    "pricing.footnote": "When you pick a package, your request is sent with the plan already attached — no need to select it again.",

    "extras.title": "Additional services",
    "extras.e1": "Extra vertical video",
    "extras.e2": "Extra horizontal video",
    "extras.e3": "10 extra photos",
    "extras.e4": "Extra hour of shooting",
    "extras.e5": "Rush delivery",
    "extras.e6": "Product photography",
    "extras.e6price": "from €100",
    "extras.e7": "Advertising video / Ad",
    "extras.e7price": "from €150",
    "extras.e8": "Travel outside usual area",

    "quote.title": "Get a quote",
    "quote.note": "Reply within 48 hours",

    /* ---------- REQUEST MODAL ---------- */
    "modal.field.name": "Name",
    "modal.field.email": "Email",
    "modal.field.phone": "Phone",
    "modal.field.company": "Company / Brand (optional)",
    "modal.field.date": "Preferred date",
    "modal.field.location": "Project location",
    "modal.field.type": "Project type",
    "modal.field.description": "Project description",

    "modal.type.placeholder": "Choose an option",
    "modal.type.social": "Social media content",
    "modal.type.photo": "Photography",
    "modal.type.video": "Video",
    "modal.type.photovideo": "Photography + Video",
    "modal.type.ad": "Advertising / Ad",
    "modal.type.product": "Product",
    "modal.type.event": "Event",
    "modal.type.other": "Other",

    "modal.plan.line": "Selected plan: {name} — €{price}",
    "modal.custom.line": "Custom project — quote from €{price}",

    "modal.submit.default": "Send request",
    "modal.submit.custom": "Request a quote",
    "modal.submit.sending": "Sending...",
    "modal.cancel": "Cancel",

    "modal.success.title": "Request sent successfully!",
    "modal.success.body": "Thanks for your interest. I'll review your request and get back to you shortly to confirm availability and next steps.",
    "modal.success.signal": "Once availability is confirmed, a 50% deposit (€{signal}) will be requested to secure the date.",
    "modal.success.close": "Close",

    "modal.error": "Something went wrong sending your request. Please try again or email pedrosilvasp458@gmail.com.",
    "modal.error.notConfigured": "The form isn't connected to your email yet — follow COMO-EDITAR.md to activate it.",

    "form.error.required": "This field is required.",
    "form.error.email": "Enter a valid email address.",
    "form.error.phone": "Enter a valid phone number.",

    "contact.title": "Let's talk",
    "contact.sub": "Have a project in mind? Tell me your idea.",

    "footer.text": "© 2026 Pedro Fernandes. Made frame by frame."
  }
};

// Aplica o idioma escolhido a todos os elementos marcados com data-i18n
function applyLanguage(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.hasAttribute('data-i18n-attr')) {
        el.setAttribute(el.getAttribute('data-i18n-attr'), translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('site-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site-lang') || 'pt';
  applyLanguage(saved);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const current = localStorage.getItem('site-lang') || 'pt';
    applyLanguage(current === 'pt' ? 'en' : 'pt');
  });
});
