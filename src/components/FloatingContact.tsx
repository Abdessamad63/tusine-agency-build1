import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Linkedin } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const contacts = [
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/212765878464", color: "bg-green-500" },
    { icon: Mail, label: "Gmail", href: "mailto:tusineagency@gmail.com", color: "bg-red-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdessamad-el-ouajri-941a7a3b0/", color: "bg-blue-500" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-2"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center`}>
                  <c.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">{c.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContact;
