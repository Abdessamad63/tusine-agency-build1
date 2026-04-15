import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = ["services", "process", "portfolio", "pricing", "contact"];

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 section-white border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-serif text-2xl font-bold text-gold mb-2">Tusine</div>
            <p className="text-xs text-muted-foreground">{t("footer.since")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${link}`)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/212765878464" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="mailto:tusineagency@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/abdessamad-el-ouajri-941a7a3b0/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tusine. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
