'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types/index';

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Aptitude Portal',
      description: 'Fully deployed a modern Aptitude Test Portal on AWS to replace outdated Google Forms for the TNP (Training & Placement) cell. Used S3, CloudFront, Route53, EC2, and CodeBuild; built RESTful APIs, integrated real-time features with Socket.io, and managed backend with Node.js and PostgreSQL.',  
      image: 'https://my-images-csi.s3.ap-south-1.amazonaws.com/images-personal/APTITUDE+PORTAL+(1).jpg',
      technologies: [
    "React.js",
    "Redux",
    "Node.js",
    "Socket.io",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "AWS S3",
    "AWS CloudFront",
    "AWS Route53",
    "AWS EC2",
    "AWS CodeBuild"
  ],
      githubUrl: 'https://github.com/jaypatelll1/csi-aptitude-portal',
      liveUrl: 'https://phronesis.csiace.com',
      featured: true
    },
    {
      id: '2',
      title: 'Seatr',
      description: 'Built SeatR, a restaurant discovery and booking platform at a hackathon, enabling users to find restaurants',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQFDeCM9Xr38yw/profile-treasury-image-shrink_800_800/B56Zfe4mZNGoAc-/0/1751791078888?e=1754938800&v=beta&t=kEI9EGNMEL4MRf5audlB_xcdxvbJ4Qr8umSaCEd87Ns',
      technologies: ['React', 'Node.js', 'MongoDB','Google Map', 'Express'],
      githubUrl: 'https://github.com/jaypatelll1/vision',
      featured: true
    },
    {
      id: '3',
      title: 'VisionInvest',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features.',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQEo8l3SqcH_Ow/profile-treasury-image-shrink_800_800/B56Zh2VI.DH0Ag-/0/1754331915145?e=1754938800&v=beta&t=L2_aQs4itTWlwXXfS8XNX3UzR_ebvaJlTu1SMLienPw',
     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: '4',
      title: '3dingeniousstudio.com',
      description:'Deployed a PHP website on AWS using Docker and Nginx, hosted on EC2 with Route53 for domain management. Achieved a scalable and reliable production setup.',
      image: 'https://www.3dingeniousstudio.com/assets/bg/2.jpg',
      technologies: ['Docker', 'Amazon EC2', 'Amazon Route 53', 'Nginx', 'AWS CLI','Linux'],
      liveUrl: 'https://www.3dingeniousstudio.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents 
            a unique challenge and showcases different aspects of my skill set.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;