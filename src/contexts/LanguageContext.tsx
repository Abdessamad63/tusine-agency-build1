import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr" | "ar";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Navbar
  "nav.services": { en: "Services", fr: "Services", ar: "الخدمات" },
  "nav.process": { en: "Process", fr: "Processus", ar: "المنهجية" },
  "nav.portfolio": { en: "Portfolio", fr: "Portfolio", ar: "الأعمال" },
  "nav.pricing": { en: "Pricing", fr: "Tarifs", ar: "الأسعار" },
  "nav.testimonials": { en: "Testimonials", fr: "Témoignages", ar: "آراء العملاء" },
  "nav.contact": { en: "Contact", fr: "Contact", ar: "تواصل" },
  "nav.faq": { en: "FAQ", fr: "FAQ", ar: "الأسئلة" },

  // Hero
  "hero.headline": {
    en: "We Build Websites That Convert Visitors Into Customers",
    fr: "Nous Créons des Sites Web Qui Convertissent les Visiteurs en Clients",
    ar: "نبني مواقع تحوّل الزوار إلى عملاء",
  },
  "hero.sub": {
    en: "Trusted by 150+ brands across 20+ countries. Premium digital solutions for businesses that want to grow.",
    fr: "La confiance de plus de 150 marques dans plus de 20 pays. Des solutions digitales premium.",
    ar: "موثوق من أكثر من 150 علامة تجارية في أكثر من 20 دولة. حلول رقمية متميزة.",
  },
  "hero.cta1": { en: "Get Your Free Website Audit", fr: "Obtenez Votre Audit Gratuit", ar: "احصل على تدقيق مجاني" },
  "hero.cta2": { en: "View Our Work", fr: "Voir Nos Réalisations", ar: "شاهد أعمالنا" },

  // Excellence
  "excellence.badge": { en: "+5 Years of Excellence", fr: "+5 Ans d'Excellence", ar: "+5 سنوات من التميز" },
  "excellence.title": { en: "Proven Track Record", fr: "Un Bilan Éprouvé", ar: "سجل حافل بالنجاح" },
  "excellence.sub": {
    en: "Since 2021, we've been delivering premium digital solutions worldwide.",
    fr: "Depuis 2021, nous livrons des solutions digitales premium dans le monde entier.",
    ar: "منذ 2021، نقدم حلولاً رقمية متميزة حول العالم.",
  },

  // Stats
  "stats.brands": { en: "Brands Trusted Us", fr: "Marques Nous Font Confiance", ar: "علامة تجارية تثق بنا" },
  "stats.projects": { en: "Projects Delivered", fr: "Projets Livrés", ar: "مشروع منجز" },
  "stats.satisfaction": { en: "Client Satisfaction", fr: "Satisfaction Client", ar: "رضا العملاء" },
  "stats.countries": { en: "Countries Served", fr: "Pays Desservis", ar: "دولة نخدمها" },

  // Highlights
  "highlights.title": { en: "Why Businesses Choose Us", fr: "Pourquoi Les Entreprises Nous Choisissent", ar: "لماذا تختارنا الشركات" },
  "highlights.fast.title": { en: "Fast Delivery", fr: "Livraison Rapide", ar: "تسليم سريع" },
  "highlights.fast.desc": { en: "We deliver projects on time, every time. Your business can't wait.", fr: "Nous livrons à temps, à chaque fois.", ar: "نسلّم المشاريع في الوقت المحدد، دائمًا." },
  "highlights.design.title": { en: "Modern Design", fr: "Design Moderne", ar: "تصميم عصري" },
  "highlights.design.desc": { en: "Clean, premium designs that make your brand stand out.", fr: "Des designs premium qui distinguent votre marque.", ar: "تصاميم نظيفة ومتميزة تميز علامتك." },
  "highlights.support.title": { en: "Ongoing Support", fr: "Support Continu", ar: "دعم مستمر" },
  "highlights.support.desc": { en: "We don't disappear after launch. Ongoing support is included.", fr: "Nous ne disparaissons pas après le lancement.", ar: "لا نختفي بعد الإطلاق. الدعم المستمر مضمون." },
  "highlights.cta": { en: "Start Your Project", fr: "Démarrez Votre Projet", ar: "ابدأ مشروعك" },

  // Services
  "services.title": { en: "Our Services", fr: "Nos Services", ar: "خدماتنا" },
  "services.web_design": { en: "Web Design", fr: "Design Web", ar: "تصميم الويب" },
  "services.web_design.desc": { en: "Beautiful, user-focused designs that captivate your audience.", fr: "Des designs magnifiques centrés sur l'utilisateur.", ar: "تصاميم جميلة تركز على المستخدم." },
  "services.web_dev": { en: "Web Development", fr: "Développement Web", ar: "تطوير الويب" },
  "services.web_dev.desc": { en: "Fast, secure, scalable websites built with modern tech.", fr: "Sites rapides, sécurisés et évolutifs.", ar: "مواقع سريعة وآمنة وقابلة للتطوير." },
  "services.ecommerce": { en: "E-Commerce", fr: "E-Commerce", ar: "التجارة الإلكترونية" },
  "services.ecommerce.desc": { en: "Online stores that drive sales and delight customers.", fr: "Des boutiques en ligne qui génèrent des ventes.", ar: "متاجر إلكترونية تزيد المبيعات." },
  "services.branding": { en: "Brand Identity", fr: "Identité de Marque", ar: "هوية العلامة" },
  "services.branding.desc": { en: "Logos, colors, and brand systems that tell your story.", fr: "Logos, couleurs et systèmes de marque.", ar: "شعارات وألوان وأنظمة علامة تجارية." },
  "services.seo": { en: "SEO & Marketing", fr: "SEO & Marketing", ar: "تحسين محركات البحث" },
  "services.seo.desc": { en: "Get found online. We optimize your presence for growth.", fr: "Soyez trouvé en ligne. Nous optimisons votre présence.", ar: "كن مرئيًا على الإنترنت." },
  "services.video": { en: "Video Editing", fr: "Montage Vidéo", ar: "تحرير الفيديو" },
  "services.video.desc": { en: "Professional video editing for social media and ads.", fr: "Montage vidéo professionnel pour les réseaux sociaux.", ar: "تحرير فيديو احترافي." },

  // Process
  "process.title": { en: "How We Work", fr: "Comment Nous Travaillons", ar: "كيف نعمل" },
  "process.discover": { en: "Discover", fr: "Découvrir", ar: "اكتشاف" },
  "process.discover.desc": { en: "We learn about your business, goals, and audience.", fr: "Nous découvrons votre entreprise et vos objectifs.", ar: "نتعرف على عملك وأهدافك." },
  "process.design": { en: "Design", fr: "Concevoir", ar: "تصميم" },
  "process.design.desc": { en: "We craft stunning visuals and intuitive user experiences.", fr: "Nous créons des visuels et expériences intuitives.", ar: "نصنع تجارب بصرية مذهلة." },
  "process.deliver": { en: "Deliver", fr: "Livrer", ar: "تسليم" },
  "process.deliver.desc": { en: "We launch your project and provide ongoing support.", fr: "Nous lançons votre projet avec un support continu.", ar: "نطلق مشروعك مع دعم مستمر." },

  // Portfolio
  "portfolio.title": { en: "Our Work", fr: "Nos Réalisations", ar: "أعمالنا" },

  // Testimonials
  "testimonials.title": { en: "What Our Clients Say", fr: "Ce Que Disent Nos Clients", ar: "ماذا يقول عملاؤنا" },

  // Pricing
  "pricing.title": { en: "Our Packages", fr: "Nos Forfaits", ar: "باقاتنا" },
  "pricing.starter": { en: "Starter", fr: "Débutant", ar: "المبتدئ" },
  "pricing.professional": { en: "Professional", fr: "Professionnel", ar: "المحترف" },
  "pricing.enterprise": { en: "Enterprise", fr: "Entreprise", ar: "المؤسسات" },
  "pricing.cta": { en: "Get Started", fr: "Commencer", ar: "ابدأ الآن" },
  "pricing.popular": { en: "Most Popular", fr: "Le Plus Populaire", ar: "الأكثر شعبية" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", fr: "Questions Fréquentes", ar: "الأسئلة الشائعة" },

  // Contact
  "contact.title": { en: "Let's Work Together", fr: "Travaillons Ensemble", ar: "لنعمل معًا" },
  "contact.sub": { en: "Ready to grow your business? Get in touch today.", fr: "Prêt à développer votre entreprise ? Contactez-nous.", ar: "مستعد لتنمية عملك؟ تواصل معنا اليوم." },

  // Founder
  "founder.title": { en: "Founded by Abdessamad El Ouajri", fr: "Fondé par Abdessamad El Ouajri", ar: "تأسست بواسطة عبد الصمد الوجري" },
  "founder.desc": {
    en: "As the Owner and Founder of Tusine, Abdessamad El Ouajri brings a bold vision of making premium digital solutions accessible to businesses worldwide. His mission is to empower brands with modern, high-converting websites and impactful digital strategies that drive real growth.",
    fr: "En tant que propriétaire et fondateur de Tusine, Abdessamad El Ouajri porte une vision audacieuse : rendre les solutions digitales premium accessibles aux entreprises du monde entier. Sa mission est de doter les marques de sites modernes et de stratégies digitales percutantes.",
    ar: "بصفته المؤسس والمالك لتوزين، يحمل عبد الصمد الوجري رؤية جريئة لجعل الحلول الرقمية المتميزة في متناول الشركات حول العالم. مهمته تمكين العلامات التجارية بمواقع حديثة واستراتيجيات رقمية فعالة.",
  },
  "founder.since": { en: "Serving clients since 2021", fr: "Au service des clients depuis 2021", ar: "نخدم العملاء منذ 2021" },

  // Footer
  "footer.rights": { en: "All rights reserved.", fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },
  "footer.since": { en: "Since 2021", fr: "Depuis 2021", ar: "منذ 2021" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
