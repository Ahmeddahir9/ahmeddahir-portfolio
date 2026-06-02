'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <CTA />
    </motion.div>
  )
}
