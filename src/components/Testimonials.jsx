import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVenture Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Elevate transformed our digital presence completely. Our conversion rates increased by 340% within the first quarter. Their team is incredibly responsive and strategic.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Marketing Director',
    company: 'GlobalRetail',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The ROI we\'ve seen from working with Elevate has been phenomenal. They don\'t just execute; they think strategically about our long-term growth.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Founder',
    company: 'Startup Labs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'As a startup, we needed a partner who understood our constraints and ambitions. Elevate delivered beyond our expectations on every single campaign.',
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Loved by{' '}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-3xl p-8 hover-lift"
            >
              <Quote className="w-10 h-10 text-accent/20 mb-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
