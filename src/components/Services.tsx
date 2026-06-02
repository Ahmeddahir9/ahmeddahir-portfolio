'use client'

import { motion } from 'framer-motion'
import { HiCode, HiCog, HiRocketLaunch, HiAdjustmentsHorizontal } from 'react-icons/hi2'

const Services = () => {
  const services = [
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
    },
    {
      icon: HiRocketLaunch,
      title: 'Performance Optimization',
      description: 'Fast, efficient applications that provide exceptional user experience.',
    },
    {
      icon: HiAdjustmentsHorizontal,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with user needs in mind.',
    },
    {
      icon: HiCog,
      title: 'API Development',
      description: 'Robust backend systems and RESTful/GraphQL APIs for your applications.',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl card-hover group"
                variants={item}
              >
                <div className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
