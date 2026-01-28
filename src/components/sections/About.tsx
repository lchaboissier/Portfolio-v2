import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#0f0f14]">
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            À propos de moi
          </h2>
          <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="gap-12 items-start mb-16">
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed"
          >
            <p>
              J'ai débuté mon parcours de développeur avec le BTS SIO. C'est là que j'ai posé mes premières bases en{' '}
              <span className="text-[#6366f1] font-semibold">PHP</span> et{' '}
              <span className="text-[#6366f1] font-semibold">Laravel</span>, avant de faire de{' '}
              <span className="text-[#6366f1] font-semibold">Symfony</span> ma spécialité au fil de mes expériences en stage et en alternance.
            </p>
            <p>
              Pour avoir une vision complète des projets, je ne me suis pas limité au back-end. J'ai exploré le{' '}
              <span className="text-[#6366f1] font-semibold">développement mobile</span> et la manipulation d'{' '}
              <span className="text-[#6366f1] font-semibold">APIs</span> pour être capable de créer des interfaces modernes et réactives.
            </p>
            <p>
              Actuellement en fin de <span className="text-[#6366f1] font-semibold">Mastère</span>, mon objectif est de transformer ces années d'apprentissage en expertise au sein d'une équipe. Je suis à la recherche d'un{' '}
              <span className="text-[#6366f1] font-semibold">CDI</span> dès{' '}
              <span className="text-[#6366f1] font-semibold">début octobre 2026</span>, pour être prêt à m'investir pleinement dans vos méthodes et vos projets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
