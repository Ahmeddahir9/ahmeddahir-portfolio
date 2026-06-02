'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'Node.js', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'REST APIs', 'Git', 'AWS'
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Learn about my journey and expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Ahmed Dahir"
                className="relative rounded-2xl w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building web applications that solve real-world problems. I love creating user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My expertise spans modern JavaScript frameworks, cloud infrastructure, and agile development practices. I'm committed to continuous learning and staying updated with the latest technologies.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
