'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-secondary/50 border-t border-slate-700 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-white">Ahmed Dahir</h3>
            <p className="text-slate-400 text-sm">Full-stack developer creating beautiful and functional web experiences.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <div className="space-y-2">
              <p><a href="mailto:ahmed@example.com" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Email</a></p>
              <p><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">GitHub</a></p>
              <p><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">LinkedIn</a></p>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Ahmed Dahir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
