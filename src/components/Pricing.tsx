'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,999',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        '1 month of free support',
        'Source code included',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$4,999',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited pages',
        'Advanced animations',
        'Full SEO optimization',
        '3 months of free support',
        'Database integration',
        'Payment gateway setup',
        'Source code included',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex, large-scale solutions',
      features: [
        'Fully custom development',
        'Advanced features & integrations',
        '6 months of free support',
        'Dedicated developer',
        'Performance optimization',
        'Security audit included',
        'Maintenance & updates included',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Choose the perfect plan for your project</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass border-2 border-blue-500 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-primary card-hover'
                  : 'glass card-hover'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400 text-sm">/project</span>}
              </div>
              <button
                className={`w-full btn mb-8 transition-all ${
                  plan.highlighted ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                Get Started
              </button>
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <HiCheck className="text-green-400 text-xl flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-slate-300 text-lg mb-4">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <button className="btn btn-primary">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
