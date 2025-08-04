'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="text-lg md:text-xl text-gray-500 font-medium">Hello, I&apos;m</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Harsh Poojary
                            </span>
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Full Stack
                        </span>
                        <br />
                        <span className="text-gray-800">Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        I specialize in building high-performance web applications using modern technologies.
                        Passionate about writing clean, maintainable code and delivering seamless user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            View My Work
                        </motion.button>

                        <a
                            href="https://drive.google.com/file/d/1At906_HnwvVehxwT_CC8g0rh7UGKwwGw/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                            >
                                <Download size={20} />
                                Download CV
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="text-gray-400" size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;