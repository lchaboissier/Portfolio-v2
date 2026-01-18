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
        { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
        { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
        { name: 'C#', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
        { name: 'C', logo: 'https://cdn.simpleicons.org/c/A8B9CC' },
        { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
        { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
        { name: 'Blazor', logo: 'https://cdn.simpleicons.org/blazor/512BD4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'Symfony', logo: 'https://cdn.simpleicons.org/symfony/000000' },
        { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
        { name: 'AdonisJS', logo: 'https://cdn.simpleicons.org/adonisjs/5A45FF' },
        { name: 'API REST', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
        { name: 'API Platform', logo: 'https://api-platform.com/images/logos/Logo_Circle%20webby%20blue.svg' },
      ],
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
        { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift/F05138' },
        { name: 'Android Studio', logo: 'https://cdn.simpleicons.org/android/3DDC84' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'SQLite', logo: 'https://images.icon-icons.com/2699/PNG/512/sqlite_logo_icon_169724.png' },
        { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
        { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'MongoDB', logo: 'https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg' },
      ],
    },
    {
      title: 'CSS Frameworks',
      skills: [
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
      ],
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
      ],
    },
    {
      title: 'Autres',
      skills: [
        { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino/00979D' },
        { name: 'CodeIgniter', logo: 'https://cdn.simpleicons.org/codeigniter/EF4223' },
        { name: 'Vite', logo: 'https://cdn.simpleicons.org/vite/646CFF' },
        { name: 'npm', logo: 'https://cdn.simpleicons.org/npm/CB3837' },
      ],
    },
  ];

  return (
      <section id="skills" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Titre de section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Compétences Techniques
            </h2>
            <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
          </motion.div>

          {/* Grille de compétences style Léo */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  {/* Titre de catégorie */}
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    {category.title}
                  </h3>

                  {/* Cartes de compétences */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {category.skills.map((skill, skillIndex) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05
                            }}
                            whileHover={{
                              y: -8,
                              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                            }}
                            className="bg-[#1e1e24] border border-white/5 rounded-xl p-6 text-center hover:border-[#6366f1]/30 transition-all duration-300 cursor-pointer w-36 h-36 flex flex-col items-center justify-center"
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
                          <div className="text-white font-medium text-sm">
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