'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Users,Layers } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices."
    },
    
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects on time and exceed expectations."
    },
    {
    icon: <Layers className="w-8 h-8" />, 
    title: "Modern Stack",
    description: "Building with modern technologies like React, Next.js, Node.js, and Tailwind CSS."
  }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate and versatile full-stack developer with hands-on experience in building dynamic, responsive, and scalable web applications using the MERN stack. With a strong foundation in programming languages like C, C++, SQL, and JavaScript, I craft efficient and optimized code to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                My journey in web development started 1 years ago, and I&apos;ve been 
                fortunate to work with amazing teams on projects
              </p>
              <p className="mb-4">
               I specialize in building modern web applications using React, Node.js, PostgreSQL, Docker, and AWS. I&apos;m always eager to explore new technologies like Next.js and TypeScript, and I thrive on tackling fresh challenges.


              </p>
              <p>
                I believe that great software is built by great teams, and I&apos;m 
                passionate about fostering collaborative environments where 
                everyone can do their best work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2 text-blue-600">{feature.title}</h3>

                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;