import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-10">{t("contact.sub")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212765878464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl glass-card hover:shadow-xl transition-shadow font-medium text-sm"
            >
              <MessageCircle className="w-5 h-5 text-gold" />
              WhatsApp
            </a>
            <a
              href="mailto:tusineagency@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl glass-card hover:shadow-xl transition-shadow font-medium text-sm"
            >
              <Mail className="w-5 h-5 text-gold" />
              tusineagency@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/abdessamad-el-ouajri-941a7a3b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl glass-card hover:shadow-xl transition-shadow font-medium text-sm"
            >
              <Linkedin className="w-5 h-5 text-gold" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
