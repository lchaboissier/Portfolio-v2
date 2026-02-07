import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Langages',
      skills: [
        { name: 'PHP', logo: 'https://cdn.simpleicons.org/php' },
        { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
        { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
        { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
        { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
        { name: 'C#', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
        { name: 'C', logo: 'https://cdn.simpleicons.org/c' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
        { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
        { name: 'Svelte', logo: 'https://cdn.simpleicons.org/svelte' },
        { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5' },
        { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
        { name: 'Symfony', logo: 'https://cdn.simpleicons.org/symfony' },
        { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel' },
        { name: 'CodeIgniter', logo: 'https://cdn.simpleicons.org/codeigniter' },
        { name: 'AdonisJS', logo: 'https://cdn.simpleicons.org/adonisjs' },
        { name: 'API Platform', logo: 'https://api-platform.com/images/logos/Logo_Circle%20webby%20blue.svg' },
        { name: 'Deno', logo: 'https://cdn.simpleicons.org/deno' },
      ],
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', logo: 'https://cdn.simpleicons.org/react' },
        { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter' },
        { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift' },
        { name: 'Kotlin', logo: 'https://cdn.simpleicons.org/kotlin' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql' },
        { name: 'SQLite', logo: 'https://images.icon-icons.com/2699/PNG/512/sqlite_logo_icon_169724.png' },
        { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase' },
        { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' },
        { name: 'MongoDB', logo: 'https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg' },
      ],
    },
    {
      title: 'CSS Frameworks',
      skills: [
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
        { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap' },
      ],
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', logo: 'https://cdn.simpleicons.org/git' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
        { name: 'Podman', logo: 'https://icon.icepanel.io/Technology/svg/Podman.svg' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github' },
      ],
    },
    {
      title: 'Autres',
      skills: [
        { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino' },
        { name: 'Raspberry Pi', logo: 'https://cdn.simpleicons.org/raspberrypi' },
        { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite' },
        { name: 'npm', logo: 'https://cdn.simpleicons.org/npm' },
        { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
        { name: 'Insomnia', logo: 'https://cdn.simpleicons.org/insomnia' },
        { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira' },
        { name: 'Gravitee', logo: 'https://www.gravitee.io/hubfs/Background_logo.svg' },
      ],
    },
  ];

  return (
      <section id="skills" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#0f0f14]">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Titre de section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Compétences techniques
            </h2>
            <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
          </motion.div>

          {/* Grille de compétences */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  {/* Titre de catégorie */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                    {category.title}
                  </h3>

                  {/* Cartes de compétences */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {category.skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{
                              y: -8,
                              scale: 1.05,
                              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                            }}
                            transition={{
                              duration: 0.2,
                              ease: "easeOut"
                            }}
                            className="bg-gray-100 dark:bg-[#1e1e24] border border-gray-200 dark:border-white/5 rounded-xl p-6 text-center hover:border-[#6366f1]/30 transition-colors duration-200 cursor-pointer w-36 h-36 flex flex-col items-center justify-center"
                        >
                          {/* Icône officielle */}
                          <div className="mb-3 flex items-center justify-center h-16">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-16 h-16 object-contain"
                            />
                          </div>

                          {/* Nom en bas */}
                          <div className="text-gray-900 dark:text-white font-medium text-sm">
                            {skill.name}
                          </div>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}