import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Zap, Palette, HeadphonesIcon } from "lucide-react";

const items = [
  { icon: Zap, titleKey: "highlights.fast.title", descKey: "highlights.fast.desc" },
  { icon: Palette, titleKey: "highlights.design.title", descKey: "highlights.design.desc" },
  { icon: HeadphonesIcon, titleKey: "highlights.support.title", descKey: "highlights.support.desc" },
];

const Highlights = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 section-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("highlights.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            {t("highlights.cta")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
