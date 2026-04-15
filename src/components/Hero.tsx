import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            {t("hero.headline")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("hero.sub")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              {t("hero.cta1")}
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-3.5 rounded-lg border border-border bg-background/60 backdrop-blur-sm font-semibold hover:bg-accent transition-colors text-sm"
            >
              {t("hero.cta2")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
