import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Alternance - Développeur Web',
      company: 'APRIL Marine',
      period: 'Octobre 2024 - Maintenant',
      location: 'Les Sables d\'Olonne, France',
      description: `Développement d'applications web en alternance. Participation au développement et à la maintenance de solutions digitales pour le secteur maritime. Travail en équipe sur des projets innovants et collaboration avec les différents services de l'entreprise.`,
      technologies: ['PHP', 'Symfony', 'JavaScript', 'MySQL', 'Git'],
    },
    {
      title: 'Stage - Développeur Informatique',
      company: 'Addix Informatique',
      period: 'Avril 2024 - Juin 2024',
      location: 'Challans, France',
      description: `Développement d'une API permettant la synchronisation de données entre deux logiciels. Conception et implémentation d'une solution d'intégration robuste. Analyse des besoins métier et proposition de solutions techniques adaptées.`,
      technologies: ['API', 'PHP', 'MySQL', 'Git'],
    },
    {
      title: 'Stage - Développeur Full Stack',
      company: 'Cyberscope',
      period: 'Janvier 2023 - Mars 2023',
      location: 'La Roche-sur-Yon, France',
      description: `Développement d'une application Web BackOffice avec le framework Symfony. Création de fonctionnalités d'administration complètes. Intégration de bonnes pratiques de développement et respect des standards de sécurité.`,
      technologies: ['Symfony', 'PHP', 'MySQL', 'JavaScript', 'Git'],
    },
    {
      title: 'Stage - Développeur Web',
      company: 'Cyberscope',
      period: 'Janvier 2022 - Février 2022',
      location: 'La Roche-sur-Yon, France',
      description: `Développement d'une application Web BackOffice avec le framework Symfony. Découverte du framework et mise en pratique des concepts fondamentaux. Participation au développement de fonctionnalités back-office.`,
      technologies: ['Symfony', 'PHP', 'MySQL', 'HTML/CSS'],
    },
    {
      title: 'Stage - Développeur Web',
      company: 'Leadcode',
      period: 'Mai 2021 - Juin 2021',
      location: 'La Roche-sur-Yon, France',
      description: `Développement d'une application avec le Framework AdonisJS (FrontEnd). Réalisation de tests unitaires et d'intégration pour garantir la qualité du code. Premier contact avec le développement web professionnel.`,
      technologies: ['AdonisJS', 'JavaScript', 'Node.js', 'Testing'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Expériences Professionnelles
          </h2>
          <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6366f1] transform -translate-x-1/2 hidden md:block"></div>

          {/* Expériences */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row flex-col' 
                    : 'md:flex-row-reverse flex-col'
                }`}
              >
                {/* Carte */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-[#1e1e24] border border-white/5 rounded-xl p-6 hover:border-[#6366f1]/30 transition-all duration-300">
                    {/* Titre */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Company & Period */}
                    <div className="mb-4">
                      <p className="text-[#6366f1] font-medium text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {exp.period} | {exp.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                          <motion.span
                              key={i}
                              className="px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] rounded-md text-xs font-medium cursor-pointer"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                              transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Point sur la timeline (centré) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6366f1] rounded-full border-4 border-[#0f0f14] z-10"></div>

                {/* Espace vide de l'autre côté */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
