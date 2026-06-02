'use client'

import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Stripe integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e7bc3c43?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with real-time analytics and custom reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Node.js', 'GraphQL'],
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Modern social platform with messaging, notifications, and user interactions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      link: '#',
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating marketing content and copywriting.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8f13b72c3d94d27a6?w=500&h=300&fit=crop',
      tags: ['Next.js', 'OpenAI API', 'Vercel', 'Supabase'],
      link: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness app with workout tracking and progress analytics.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Google Fit API'],
      link: '#',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">A selection of projects I've worked on</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl overflow-hidden card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                <a
                  href={project.link}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <HiArrowTopRightOnSquare className="text-white text-4xl" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
