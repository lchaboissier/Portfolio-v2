import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Smartexpo',
      description: 'Exposition des modèles de smartphones. Projet académique L3 CDA.',
      type: 'Application Web',
      image: './projects/smartexpo.png',
      technologies: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'Bootstrap', 'SQL'],
      liveUrl: 'https://lchaboissier.github.io/smartexpo',
      codeUrl: 'https://github.com/lchaboissier/smartexpo',
    },
    {
      title: 'Keywatch',
      description: 'Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.',
      type: 'Application Web',
      image: './projects/keywatch.png',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
      liveUrl: 'https://lchaboissier.github.io/keywatch',
      codeUrl: 'https://github.com/lchaboissier/keywatch',
    },
    {
      title: 'Pixel',
      description: 'Site Web regroupant l\'ensemble des jeux-vidéos. Projet académique LP AMIO.',
      type: 'Application Web',
      image: './projects/pixel.png',
      technologies: ['HTML', 'CSS', 'PHP', 'Symfony', 'SQL', 'Docker'],
      liveUrl: 'https://lchaboissier.github.io/pixel',
      codeUrl: 'https://github.com/lchaboissier/pixel',
    },
    {
      title: 'Foodeat',
      description: 'Application mobile regroupant la liste des recettes de cuisine à l\'aide d\'une API. Projet académique LP AMIO.',
      type: 'Application Mobile',
      image: './projects/foodeat.png',
      technologies: ['Swift', 'API'],
      liveUrl: 'https://lchaboissier.github.io/foodeat',
      codeUrl: 'https://github.com/lchaboissier/foodeat',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Projets
          </h2>
          <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                    className="bg-[#1e1e24] border border-white/5 rounded-xl overflow-hidden h-full flex flex-col group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Image bannière */}
                  <div className="relative w-full h-48 overflow-hidden bg-[#1a1a20]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e24] via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-grow border-t border-white/5 group-hover:border-[#6366f1]/30 transition-colors duration-200">
                    {/* Type d'application */}
                    <span className="inline-block px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] rounded-full text-xs font-semibold mb-4 w-fit">
                    {project.type}
                  </span>

                    {/* Titre */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                          <motion.span
                              key={i}
                              className="px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded-md text-xs font-medium border border-[#6366f1]/20 cursor-pointer"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                              transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                      ))}
                    </div>

                    {/* Boutons */}
                    <div className="flex gap-3">
                      <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6366f1] text-white rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: '#5558e3' }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                      >
                        <ExternalLink size={16} />
                        Voir le site
                      </motion.a>
                      <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-[#6366f1] text-[#6366f1] rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                      >
                        <Github size={16} />
                        Code source
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
