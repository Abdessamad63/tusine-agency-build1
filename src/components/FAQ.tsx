import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: { en: "How long does a project take?", fr: "Combien de temps prend un projet ?", ar: "كم يستغرق المشروع؟" },
    a: { en: "Most projects are completed within 1 to 2 weeks, depending on scope.", fr: "La plupart des projets sont terminés en 1 à 2 semaines, selon la portée.", ar: "يتم إنجاز معظم المشاريع خلال أسبوع إلى أسبوعين، حسب النطاق." },
  },
  {
    q: { en: "Do you offer ongoing support?", fr: "Offrez-vous un support continu ?", ar: "هل تقدمون دعمًا مستمرًا؟" },
    a: { en: "Yes! All packages include post-launch support. Enterprise clients get 12 months.", fr: "Oui ! Tous les forfaits incluent un support post-lancement.", ar: "نعم! جميع الباقات تشمل دعم ما بعد الإطلاق." },
  },
  {
    q: { en: "What technologies do you use?", fr: "Quelles technologies utilisez-vous ?", ar: "ما التقنيات التي تستخدمونها؟" },
    a: { en: "We use modern frameworks like React, Next.js, WordPress, Shopify, and custom solutions.", fr: "Nous utilisons React, Next.js, WordPress, Shopify et des solutions sur mesure.", ar: "نستخدم React وNext.js وWordPress وShopify وحلول مخصصة." },
  },
  {
    q: { en: "Can you help with an existing website?", fr: "Pouvez-vous aider avec un site existant ?", ar: "هل يمكنكم المساعدة بموقع موجود؟" },
    a: { en: "Absolutely. We offer redesign, optimization, and maintenance services.", fr: "Absolument. Nous offrons redesign, optimisation et maintenance.", ar: "بالتأكيد. نقدم إعادة تصميم وتحسين وصيانة." },
  },
  {
    q: { en: "Do you work with international clients?", fr: "Travaillez-vous avec des clients internationaux ?", ar: "هل تعملون مع عملاء دوليين؟" },
    a: { en: "Yes, we've served clients in 20+ countries. We communicate in Arabic, French, and English.", fr: "Oui, nous avons servi des clients dans plus de 20 pays.", ar: "نعم، خدمنا عملاء في أكثر من 20 دولة." },
  },
];

const FAQ = () => {
  const { t, language } = useLanguage();

  return (
    <section id="faq" className="py-20 section-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("faq.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">
                  {faq.q[language]}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5">
                  {faq.a[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
