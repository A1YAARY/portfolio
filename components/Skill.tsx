'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types/index';

const Skills = () => {
  const skills: Skill[] = [
  // Languages
  { name: 'C', level: 90, category: 'language' },
  { name: 'C++', level: 85, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  { name: 'JavaScript', level: 90, category: 'language' },

  // Frameworks / Libraries
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Express', level: 90, category: 'backend' },
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Bootstrap', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },

  // Databases
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MySQL', level: 85, category: 'backend' },

  // Tools / Platforms
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Postman', level: 80, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Linux', level: 75, category: 'tools' }
];


  const categories = {
    language:'Language',
    frontend: 'Frontend',
    backend: 'Backend', 
    tools: 'Tools & DevOps',
    
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's an overview of the technologies and tools I work with regularly.
            I'm always learning and adding new skills to my toolkit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([key, title], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-6 text-gray-800">{title}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === key)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
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
};

export default Skills;