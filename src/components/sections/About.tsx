import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '15+', label: 'Technologies maîtrisées' },
    { value: '20+', label: 'Projets réalisés' },
    { value: '100%', label: 'Succès ready' },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            À Propos de Moi
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
              Développeur en alternance de <span className="text-[#6366f1] font-semibold">24 ans</span> passionné
              par ar le domaine de l'Informatique, je me spécialise dans le{' '}
              <span className="text-[#6366f1] font-semibold">développement web moderne</span>. J'ai acquis
              une expertise dans la formation{' '}
              <span className="text-[#6366f1] font-semibold">Concepteur Développeur d'Applications (CDA)</span>{' '}
               et cumule plusieurs années d'expérience technique et opérationnelle.
            </p>
            <p>
              Mon parcours m'a permis d'acquérir une solide expertise en{' '}
              <span className="text-[#6366f1] font-semibold">React</span>,{' '}
              <span className="text-[#6366f1] font-semibold">Angular</span>,{' '}
              <span className="text-[#6366f1] font-semibold">Vue.js</span> et{' '}
              <span className="text-[#6366f1] font-semibold">Nuxt.js</span>, ainsi qu'une formation 
              successive en développement Full Stack. Je développe des compétences avancées en{' '}
              <span className="text-[#6366f1] font-semibold">JavaScript</span>,{' '}
              <span className="text-[#6366f1] font-semibold">TypeScript</span> et{' '}
              <span className="text-[#6366f1] font-semibold">Symfony</span>, me permettant de 
              concevoir des applications web modernes, sécurisées et évolutives.
            </p>
            <p>
              Motivé par la{' '}
              <span className="text-[#6366f1] font-semibold">facilité d'adaptation</span>, le{' '}
              <span className="text-[#6366f1] font-semibold">travail en équipe</span> et un esprit{' '}
              <span className="text-[#6366f1] font-semibold">persévérant</span>, je cherche constamment
              à améliorer mes compétences techniques. Mon objectif est de rejoindre une équipe innovante
              idéalement dans le
              domaine, pour contribuer à des projets web ambitieux et impactants.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
