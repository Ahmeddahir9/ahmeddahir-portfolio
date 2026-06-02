'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      text: 'Ahmed delivered our MVP in record time. His attention to detail and communication throughout the project was exceptional.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      text: 'Working with Ahmed was a game-changer for our project. The quality of code and his problem-solving skills are top-notch.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'E-commerce Owner',
      text: 'Ahmed transformed our outdated website into a modern, high-performing platform. Our sales increased by 45% after the redesign.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What my clients have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass rounded-xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
