import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              Développeur Full Stack
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/lchaboissier', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/luca-chaboissier/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:lucachaboissier@outlook.fr', label: 'Email' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#1a1a1f] border border-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-[#6366f1] hover:border-[#6366f1]/30 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center sm:text-left">
            © {currentYear} Luca Chaboissier. Tous droits réservés.
          </p>
          <p className="text-gray-400 flex items-center gap-1.5">
            Conçu avec <Heart className="text-[#6366f1]" size={16} fill="currentColor" /> et React
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
