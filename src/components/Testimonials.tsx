import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed K.", role: "CEO", company: "ShopMaroc", country: "🇲🇦", quote: { en: "Tusine transformed our online presence. Sales increased by 120% in 3 months.", fr: "Tusine a transformé notre présence en ligne. +120% de ventes en 3 mois.", ar: "غيّرت توزين وجودنا الرقمي. زادت المبيعات 120% في 3 أشهر." } },
  { name: "James W.", role: "Founder", company: "DigitalPeak", country: "🇺🇸", quote: { en: "Professional, fast, and creative. Our new brand identity is stunning.", fr: "Professionnels, rapides et créatifs. Notre nouvelle identité est superbe.", ar: "محترفون وسريعون ومبدعون. هويتنا الجديدة رائعة." } },
  { name: "Sophie M.", role: "Marketing Director", company: "LuxeParisienne", country: "🇫🇷", quote: { en: "The best investment we made. Our website now converts 3x more.", fr: "Le meilleur investissement. Notre site convertit 3x plus.", ar: "أفضل استثمار قمنا به. موقعنا يحقق 3 أضعاف التحويلات." } },
  { name: "Fatima Z.", role: "Store Owner", company: "ZStyle", country: "🇲🇦", quote: { en: "They understood our vision perfectly and delivered beyond expectations.", fr: "Ils ont parfaitement compris notre vision et dépassé nos attentes.", ar: "فهموا رؤيتنا بشكل مثالي وتجاوزوا توقعاتنا." } },
];

const Testimonials = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 section-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("testimonials.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
                "{item.quote[language]}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}, {item.company}</div>
                </div>
                <span className="text-lg">{item.country}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
