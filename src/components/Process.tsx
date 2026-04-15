import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Compass, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, key: "discover", num: "01" },
  { icon: PenTool, key: "design", num: "02" },
  { icon: Rocket, key: "deliver", num: "03" },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 section-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("process.title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`text-center ${i === 2 ? "col-span-2 md:col-span-1 flex flex-col items-center" : ""}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center mx-auto mb-4 shadow-md">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="text-xs font-semibold text-gold mb-1">{step.num}</div>
              <h3 className="font-serif text-xl font-semibold mb-2">{t(`process.${step.key}`)}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">{t(`process.${step.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
