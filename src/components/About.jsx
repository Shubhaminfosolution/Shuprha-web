import { motion } from 'framer-motion'
import { CheckCircle2, Rocket, Target, Lightbulb } from 'lucide-react'

const highlights = [
  'Data-driven strategy development',
  'Dedicated team of industry experts',
  'Transparent reporting & analytics',
  'Continuous optimization & support',
]

const values = [
  { icon: Rocket, title: 'Innovation', desc: 'Cutting-edge solutions' },
  { icon: Target, title: 'Results', desc: 'Goal-oriented approach' },
  { icon: Lightbulb, title: 'Creativity', desc: 'Fresh perspectives' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              We're Not Just an Agency,{' '}
              <span className="gradient-text">We're Your Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Shuprha is a passionate team of digital marketing enthusiasts dedicated to helping 
              businesses thrive in the digital landscape. As a growing startup, we bring fresh 
              perspectives, innovative strategies, and relentless dedication to every project.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-accent/25">
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-blue-500/10 to-background" />
                <img
                  src="/about-team.jpg"
                  alt="Our team"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating mission card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 max-w-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Our Mission</p>
                    <p className="text-muted-foreground text-sm">Empowering brands to reach their full digital potential</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values row */}
            <div className="grid grid-cols-3 gap-4 mt-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <value.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-lg font-bold">{value.title}</p>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
