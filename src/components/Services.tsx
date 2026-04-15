import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MonitorSmartphone, Code, ShoppingCart, Fingerprint, Search, Video } from "lucide-react";

const services = [
  { icon: MonitorSmartphone, key: "web_design" },
  { icon: Code, key: "web_dev" },
  { icon: ShoppingCart, key: "ecommerce" },
  { icon: Fingerprint, key: "branding" },
  { icon: Search, key: "seo" },
  { icon: Video, key: "video" },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 section-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <motion.div
              key={svc.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{t(`services.${svc.key}`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(`services.${svc.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
