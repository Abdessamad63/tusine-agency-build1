import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, Globe, Users, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", key: "stats.brands" },
  { icon: Briefcase, value: "150+", key: "stats.projects" },
  { icon: Award, value: "98%", key: "stats.satisfaction" },
  { icon: Globe, value: "20+", key: "stats.countries" },
];

const Excellence = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 section-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-semibold text-gold">
            {t("excellence.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">{t("excellence.title")}</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{t("excellence.sub")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-gold font-serif">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{t(stat.key)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excellence;
