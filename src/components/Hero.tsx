'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import Link from 'next/link'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 inline-block"
          variants={item}
        >
          <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
          variants={item}
        >
          Full Stack Developer & Digital Creator
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          I build beautiful, scalable web applications with modern technologies. Specializing in React, Next.js, and full-stack development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={item}
        >
          <Link href="#contact" className="btn btn-primary group">
            Get Started
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#portfolio" className="btn btn-secondary">
            View My Work
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 text-center"
          variants={item}
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-400 mb-2">50+</h3>
            <p className="text-slate-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-400 mb-2">30+</h3>
            <p className="text-slate-400">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-400 mb-2">5+</h3>
            <p className="text-slate-400">Years Experience</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
