import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Founder = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 section-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">{t("founder.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("founder.desc")}</p>
          <p className="text-sm text-muted-foreground mt-4">{t("founder.since")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
