'use client'

import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiUser } from 'react-icons/hi2'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn best practices for building production-ready applications with Next.js and React.',
      author: 'Ahmed Dahir',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'The Future of Web Performance Optimization',
      excerpt: 'Exploring cutting-edge techniques to optimize web application performance in 2024.',
      author: 'Ahmed Dahir',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'React Hooks Deep Dive: Advanced Patterns',
      excerpt: 'Master advanced React Hooks patterns to write cleaner and more efficient React code.',
      author: 'Ahmed Dahir',
      date: 'Jan 5, 2024',
      readTime: '10 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    },
  ]

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">Tips, insights, and best practices</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass rounded-xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <HiCalendar />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                  Read More
                  <HiArrowRight />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
