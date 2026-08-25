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
    "work.7.title": "Lifestyle em movimento",
    "work.7.desc": "Um olhar sobre o dia a dia — pessoas, lugares e a luz certa no momento certo.",
    "work.8.title": "Histórias do quotidiano",
    "work.8.desc": "Momentos simples filmados com atenção ao detalhe e ao ritmo.",
    "work.9.title": "Marca em movimento",
    "work.9.desc": "Conteúdo pensado para redes sociais — dinâmico, curto e com identidade.",
    "work.10.title": "Diário de viagem",
    "work.10.desc": "Estradas, paisagens e o que acontece pelo caminho.",
    "work.11.title": "Natureza e trilhos",
    "work.11.desc": "De mochila às costas, entre montanhas e caminhos por descobrir.",

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
    "about.p1": "O meu nome é Pedro Fernandes, videógrafo e filmmaker.",
    "about.p2": "Gosto de transformar momentos, pessoas, marcas e ideias em imagens que fazem alguém parar para olhar. Comecei por explorar o vídeo através daquilo que me inspira — viagens, desporto, experiências e histórias do dia a dia — e foi dessa vontade de criar que nasceu o meu trabalho profissional.",
    "about.p3": "Hoje trabalho com marcas, empresas e pessoas que querem mostrar aquilo que fazem de uma forma diferente. Desde vídeos de produto e conteúdo para redes sociais, a desporto, casamentos, imobiliário e projetos completamente personalizados, adapto cada produção àquilo que o cliente quer transmitir.",
    "about.p4": "Não acredito que exista uma fórmula única para fazer um bom vídeo. Cada projeto tem a sua própria identidade, e o meu objetivo é encontrar a forma certa de a contar através da imagem.",
    "about.p5": "Tu trazes a ideia. Eu trato de a transformar em vídeo.",

    /* ---------- PACOTES / PREÇOS ---------- */
    "pricing.title": "Pacotes & Preços",
    "pricing.note": "Para empresas e marcas",
    "pricing.lead": "Planos mensais de fotografia e vídeo para redes sociais, pensados para empresas e marcas. Conteúdo novo todos os meses, sem contratos complicados.",

    /* "/mês" aparece a seguir aos 3 preços. Se algum dia deixarem
       de ser mensais, muda esta linha (ou apaga o <span class="price-period">
       do index.html no pacote em questão). */
    "plan.period": "/mês",

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
    "plan.custom.cta": "Pedir orçamento personalizado",

    "pricing.footnote": "Escolhe um pacote e o formulário abaixo já aparece com o plano selecionado.",

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
    "quote.lead": "Conta-me os detalhes do teu projeto e envio-te uma proposta personalizada por email.",
    "quote.name": "Nome completo",
    "quote.email": "Email",
    "quote.phone": "Telefone (opcional)",
    "quote.plan": "Pacote pretendido",
    "quote.plan.placeholder": "Seleciona um pacote",
    "quote.plan.basic": "Basic — €250",
    "quote.plan.pro": "Pro — €450",
    "quote.plan.custom": "Custom — Desde €600",
    "quote.type": "Tipo de projeto",
    "quote.other": "Outro",
    "quote.date": "Data prevista do evento (opcional)",
    "quote.message": "Conta-me sobre o projeto",
    "quote.submit": "Enviar pedido",
    "quote.sending": "A enviar...",
    "quote.success": "Pedido enviado! Vou responder-te por email em breve.",
    "quote.error": "Algo correu mal. Tenta novamente ou escreve para pedrosilvasp458@gmail.com.",
    "quote.notConfigured": "O formulário ainda não está ligado ao teu email — segue o COMO-EDITAR.md para o ativar.",

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
    "work.7.title": "Lifestyle in motion",
    "work.7.desc": "A look at everyday life — people, places, and the right light at the right moment.",
    "work.8.title": "Everyday stories",
    "work.8.desc": "Simple moments filmed with an eye for detail and rhythm.",
    "work.9.title": "Brands in motion",
    "work.9.desc": "Content built for social media — short, dynamic and full of character.",
    "work.10.title": "Travel diary",
    "work.10.desc": "Roads, landscapes, and whatever happens along the way.",
    "work.11.title": "Nature and trails",
    "work.11.desc": "Backpack on, between mountains and paths waiting to be found.",

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
    "about.p1": "My name is Pedro Fernandes, videographer and filmmaker.",
    "about.p2": "I like turning moments, people, brands and ideas into images that make someone stop and look. I started exploring video through what inspires me — travel, sport, experiences and everyday stories — and my professional work grew out of that urge to create.",
    "about.p3": "Today I work with brands, businesses and people who want to show what they do in a different way. From product videos and social media content to sport, weddings, real estate and fully bespoke projects, I shape each production around what the client wants to say.",
    "about.p4": "I don't believe there's a single formula for a good video. Every project has its own identity, and my job is to find the right way to tell it through images.",
    "about.p5": "You bring the idea. I'll turn it into video.",

    /* ---------- PACKAGES / PRICING ---------- */
    "pricing.title": "Packages & Pricing",
    "pricing.note": "For businesses and brands",
    "pricing.lead": "Monthly photography and video plans for social media, built for businesses and brands. Fresh content every month, no complicated contracts.",

    "plan.period": "/month",

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
    "plan.custom.cta": "Request a custom quote",

    "pricing.footnote": "Pick a package and the form below already shows it selected.",

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
    "quote.lead": "Tell me about your project and I'll send you a personalised quote by email.",
    "quote.name": "Full name",
    "quote.email": "Email",
    "quote.phone": "Phone (optional)",
    "quote.plan": "Package",
    "quote.plan.placeholder": "Select a package",
    "quote.plan.basic": "Basic — €250",
    "quote.plan.pro": "Pro — €450",
    "quote.plan.custom": "Custom — From €600",
    "quote.type": "Project type",
    "quote.other": "Other",
    "quote.date": "Expected event date (optional)",
    "quote.message": "Tell me about the project",
    "quote.submit": "Send request",
    "quote.sending": "Sending...",
    "quote.success": "Request sent! I'll get back to you by email soon.",
    "quote.error": "Something went wrong. Please try again or email pedrosilvasp458@gmail.com.",
    "quote.notConfigured": "The form isn't connected to your email yet — follow COMO-EDITAR.md to activate it.",

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
