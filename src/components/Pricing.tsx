import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    key: "starter",
    features: {
      en: ["5-page website", "Responsive design", "Basic SEO", "1 revision round", "2-week delivery"],
      fr: ["Site 5 pages", "Design responsive", "SEO basique", "1 tour de révision", "Livraison 2 semaines"],
      ar: ["موقع 5 صفحات", "تصميم متجاوب", "SEO أساسي", "جولة مراجعة واحدة", "تسليم أسبوعين"],
    },
  },
  {
    key: "professional",
    popular: true,
    features: {
      en: ["10-page website", "Premium design", "Advanced SEO", "E-commerce ready", "3 revision rounds", "Priority support"],
      fr: ["Site 10 pages", "Design premium", "SEO avancé", "E-commerce prêt", "3 tours de révision", "Support prioritaire"],
      ar: ["موقع 10 صفحات", "تصميم متميز", "SEO متقدم", "جاهز للتجارة", "3 جولات مراجعة", "دعم أولوي"],
    },
  },
  {
    key: "enterprise",
    features: {
      en: ["Unlimited pages", "Custom design system", "Full SEO strategy", "E-commerce + CRM", "Unlimited revisions", "Dedicated manager", "12-month support"],
      fr: ["Pages illimitées", "Système design custom", "Stratégie SEO complète", "E-commerce + CRM", "Révisions illimitées", "Manager dédié", "Support 12 mois"],
      ar: ["صفحات غير محدودة", "نظام تصميم مخصص", "استراتيجية SEO كاملة", "تجارة + CRM", "مراجعات غير محدودة", "مدير مخصص", "دعم 12 شهر"],
    },
  },
];

const Pricing = () => {
  const { t, language } = useLanguage();

  return (
    <section id="pricing" className="py-20 section-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("pricing.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-xl p-6 md:p-8 relative ${
                pkg.popular
                  ? "bg-foreground text-background shadow-2xl scale-105"
                  : "glass-card"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-background text-xs font-semibold">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold mb-6">{t(`pricing.${pkg.key}`)}</h3>
              <ul className="space-y-3 mb-8">
                {pkg.features[language].map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 text-gold`} />
                    <span className={pkg.popular ? "text-background/80" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                  pkg.popular
                    ? "bg-gold text-background"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {t("pricing.cta")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
