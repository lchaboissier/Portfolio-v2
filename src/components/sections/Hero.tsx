import { motion } from 'motion/react';
import { Download, Mail, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-[#1a1a1f] flex items-center justify-center overflow-hidden">
              <img
                  src="assets/profileImage.jpg"
                  alt="Photo de profil de Louis Chaboissier"
                  className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Badge de statut */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block"
        >
          <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-sm font-medium shadow-lg shadow-amber-500/30">
            🚀 À la recherche d'un poste de Développeur à partir d'Octobre 2026 !
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white"
        >
          Luca Chaboissier
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6"
        >
          Alternant Développeur Web
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Développeur Web en alternance, je réalise des applications web fonctionnelles et adaptées aux besoins.
          Spécialisé en <span className="text-[#6366f1] font-semibold">PHP/Symfony</span>,
          j'utilise également des technologies comme <span className="text-[#6366f1] font-semibold">Angular</span>,{' '}
          <span className="text-[#6366f1] font-semibold">Docker</span> ou{' '}
          <span className="text-[#6366f1] font-semibold">React</span> pour répondre aux défis techniques.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-full font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <FileText size={20} />
            Voir mon parcours
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-all duration-200 cursor-pointer"
          >
            <Mail className="inline mr-2" size={20} />
            Me contacter
          </motion.a>

          <motion.a
              href="/cv/CV_Luca_Chaboissier.pdf"
              download="CV_Luca_Chaboissier.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-all duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            Télécharger mon CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
