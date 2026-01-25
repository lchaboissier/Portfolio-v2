import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            À propos de moi
          </h2>
          <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="gap-12 items-start mb-16">
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 space-y-4 leading-relaxed"
          >
            <p>
              Développeur de <span className="text-[#6366f1] font-semibold">24 ans</span> passionné par l'informatique,
              je me suis spécialisé dans le développement web dès le BTS SIO (option SLAM). J'y ai acquis des bases solides en{' '}
              <span className="text-[#6366f1] font-semibold">PHP</span> et{' '}
              <span className="text-[#6366f1] font-semibold">Laravel</span>, que j'ai transformées en une véritable maîtrise de{' '}
              <span className="text-[#6366f1] font-semibold">Symfony</span> au fil de mes expériences professionnelles.
            </p>
            <p>
              En parallèle, j'ai exploré diverses technologies <span className="text-[#6366f1] font-semibold">web et mobiles</span> pour
              renforcer ma logique de développement, apprendre à manipuler des{' '}
              <span className="text-[#6366f1] font-semibold">APIs</span> et créer des{' '}
              <span className="text-[#6366f1] font-semibold">interfaces réactives</span>.
            </p>
            <p>
              Bientôt diplômé de mon <span className="text-[#6366f1] font-semibold">Mastère</span>, je suis à la recherche d'un{' '}
              <span className="text-[#6366f1] font-semibold">CDI</span> à partir de{' '}
              <span className="text-[#6366f1] font-semibold">début octobre 2026</span>. Mon objectif est d'intégrer une équipe
              expérimentée pour contribuer à vos projets tout en continuant de perfectionner mon expertise technique à vos côtés.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
