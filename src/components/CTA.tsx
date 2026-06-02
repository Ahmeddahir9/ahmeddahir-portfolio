'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto glass rounded-2xl p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you. Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary group">
            Start Your Project
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="mailto:ahmed@example.com" className="btn btn-secondary">
            Send me an Email
          </a>
        </div>
        <p className="text-slate-400 mt-8">Or connect with me on social media</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-2xl text-slate-400 hover:text-blue-400 transition-colors">Twitter</a>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
