import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Pradnya Ponkshe',
    role: 'Founder',
    company: 'HerHighnest',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content:
      'Shuprha helped us build a stronger digital presence and create solutions that support our brand growth.',
    rating: 5,
  },

  {
    name: 'Gokul Kumar',
    role: 'Founder',
    company: 'Hysteresis',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content:
      'Shuprha understands business challenges and delivers modern digital solutions that help brands scale.',
    rating: 5,
  },

  {
    name: 'Amol Londhe',
    role: 'Founder',
    company: 'Golden Super Shine',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content:
      'The team helped us improve our online presence with premium design and effective digital strategies.',
    rating: 5,
  },

  {
    name: 'Rohit Chavan',
    role: 'Founder',
    company: 'Hindavi Swarajya Tours & Travels',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content:
      'Shuprha helped us build a modern website and digital presence that represents our travel brand professionally.',
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
            Why Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Loved by{' '}
            <span className="gradient-text">
              Industry Leaders
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover how Shuprha helps businesses build a stronger digital presence and achieve growth.
          </p>

        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {testimonials.map((testimonial) => (

            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-3xl p-8 hover-lift"
            >

              <Quote className="w-10 h-10 text-accent/20 mb-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
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
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>

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