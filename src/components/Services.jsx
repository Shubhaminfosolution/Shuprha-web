import { motion } from 'framer-motion'
import { TrendingUp, Palette, Share2, Search, Video, Globe, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver measurable results. We optimize every touchpoint in your customer journey.',
    features: ['PPC Advertising', 'Email Marketing', 'Analytics & Reporting'],
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Craft a memorable brand that resonates with your audience. From logos to complete brand systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    color: 'from-pink-500/20 to-rose-500/10',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Build an engaged community and amplify your message across all major social platforms.',
    features: ['Content Strategy', 'Community Management', 'Influencer Marketing'],
    color: 'from-violet-500/20 to-purple-500/10',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies. Drive organic traffic that converts.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building'],
    color: 'from-emerald-500/20 to-green-500/10',
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'Captivate your audience with stunning video content. From concept to final cut, we handle it all.',
    features: ['Commercial Ads', 'Social Media Videos', 'Animation'],
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Build powerful, responsive websites that convert visitors into customers. Modern tech, stunning design.',
    features: ['Custom Websites', 'E-commerce', 'Web Applications'],
    color: 'from-teal-500/20 to-cyan-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Solutions That Drive{' '}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive marketing solutions tailored to your unique business needs. 
            We combine creativity with data to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative bg-card border border-border rounded-3xl p-8 cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-accent/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
