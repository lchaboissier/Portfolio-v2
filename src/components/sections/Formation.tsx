import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Formation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formations = [
    {
      title: 'Mastère Expert en Développement Web',
      school: 'Nantes Ynov Campus',
      period: 'Octobre 2024 - Septembre 2026',
      location: 'Nantes, France',
      level: 'Bac+5',
      status: 'En cours',
      description: `Formation d'excellence en développement web avancé. Spécialisation en architectures modernes, développement full-stack et gestion de projets complexes. Apprentissage des meilleures pratiques du marché et des technologies de pointe.`,
      technologies: ['React', 'Node.js', 'TypeScript', 'Architecture', 'DevOps', 'Cloud'],
    },
    {
      title: 'Licence Informatique - Conception et Développement d\'Applications',
      school: 'Université de Bretagne Occidentale',
      period: 'Septembre 2023 - Juin 2024',
      location: 'Brest (29), France',
      level: 'Bac+3',
      description: `Formation universitaire en informatique avec spécialisation en conception et développement d'applications. Analyse, modélisation, conception et mise en œuvre de solutions informatiques adaptées. Apprentissage des méthodologies de développement et des bonnes pratiques logicielles.`,
      technologies: ['Java', 'UML', 'Base de données', 'Algorithmes', 'Gestion de projet'],
    },
    {
      title: 'Licence Professionnelle : Applications Mobiles et Internet des Objets (LP AMIO)',
      school: 'I.U.T. de Saint-Dié, Saint-Dié-des-Vosges (88)',
      period: 'Septembre 2022 - Juin 2023',
      location: 'Saint-Dié-des-Vosges (88), France',
      level: 'Bac+3',
      description: `Formation spécialisée en développement d'applications mobiles et Internet des Objets. Conception et développement d'applications cross-platform. Intégration avec des objets connectés et gestion des communications IoT.`,
      technologies: ['Android', 'iOS', 'React Native', 'IoT', 'API REST', 'Firebase'],
    },
    {
      title: 'BTS Services Informatiques aux Organisations (Option SLAM)',
      school: 'Lycée Notre-Dame du Roc',
      period: 'Septembre 2020 - Juin 2022',
      location: 'La Roche-sur-Yon (85), France',
      level: 'Bac+2',
      description: `Formation technique en développement informatique avec spécialisation en Solutions Logicielles et Applications Métiers. Développement d'applications de gestion, conception de bases de données et création de solutions logicielles adaptées aux besoins des organisations.`,
      technologies: ['PHP', 'SQL', 'Windows 10', 'Visual Studio', 'Programmation orientée objet'],
    },
    {
      title: 'Baccalauréat Technologique STI2D - Spécialité SIN',
      school: 'Lycée Jean de Lattre de Tassigny',
      period: 'Septembre 2018 - Juin 2020',
      location: 'La Roche-sur-Yon (85), France',
      level: 'Bac',
      description: `Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable avec spécialité Système d'Information et Numérique. Formation aux bases de l'informatique, de l'électronique et des systèmes numériques. Apprentissage de l'anglais technique.`,
      technologies: ['Systèmes embarqués', 'Programmation', 'Électronique', 'Anglais'],
    },
  ];

  return (
      <section id="education" className="py-24 px-6 lg:px-12 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Section title */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Formations
            </h2>
            <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6366f1] transform -translate-x-1/2 hidden md:block"></div>

            {/* Formations */}
            <div className="space-y-12">
              {formations.map((formation, index) => (
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
                    {/* Map */}
                    <div className={`w-full md:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <div className="bg-[#1e1e24] border border-white/5 rounded-xl p-6 hover:border-[#6366f1]/30 transition-all duration-300">
                        {/* Badge niveau + status */}
                        <div className="mb-3 flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] rounded-full text-xs font-semibold">
                        {formation.level}
                      </span>
                          {formation.status && (
                              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                          {formation.status}
                        </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {formation.title}
                        </h3>

                        {/* School & Period */}
                        <div className="mb-4">
                          <p className="text-[#6366f1] font-medium text-sm mb-1">
                            {formation.school}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {formation.period} | {formation.location}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {formation.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {formation.technologies.map((tech, i) => (
                              <span
                                  key={i}
                                  className="px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] rounded-md text-xs font-medium"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6366f1] rounded-full border-4 border-[#0a0a0f] z-10"></div>

                    <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}