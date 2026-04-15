import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import {
  EShopDemo,
  RestaurantDemo,
  TechSolutionsDemo,
  FashionDemo,
  HealthClinicDemo,
  StartupDemo,
} from "./DemoWebsites";

const projects = [
  { name: "E-Shop Casablanca", category: "E-Commerce", result: "+120% Sales", image: portfolio1, Demo: EShopDemo },
  { name: "RestaurantPro", category: "Web Design", result: "+85% Bookings", image: portfolio2, Demo: RestaurantDemo },
  { name: "TechSolutions", category: "SaaS Platform", result: "+300% Visibility", image: portfolio3, Demo: TechSolutionsDemo },
  { name: "FashionBoutique", category: "E-Commerce", result: "+150% Revenue", image: portfolio4, Demo: FashionDemo },
  { name: "HealthClinic", category: "Web Development", result: "+90% Traffic", image: portfolio5, Demo: HealthClinicDemo },
  { name: "StartupLaunch", category: "Digital Marketing", result: "+200% Leads", image: portfolio6, Demo: StartupDemo },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 section-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          {t("portfolio.title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveProject(i)}
              className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer premium-hover premium-press"
            >
              <div className="h-32 md:h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-serif text-sm md:text-base font-semibold mt-1">{project.name}</h3>
                <div className="mt-2 text-lg font-bold text-foreground">{project.result}</div>
                <span className="text-[10px] text-muted-foreground mt-1 block">Click to preview →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inline Preview Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-muted rounded-lg px-3 py-1 text-xs text-muted-foreground font-mono">
                    {projects[activeProject].name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Demo Website Content */}
              <div className="overflow-y-auto flex-1">
                {(() => {
                  const DemoComponent = projects[activeProject].Demo;
                  return <DemoComponent />;
                })()}
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-gold">{projects[activeProject].category}</span>
                  <span className="text-xs text-muted-foreground mx-2">•</span>
                  <span className="text-xs font-bold text-foreground">{projects[activeProject].result}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Built by Tusine</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
