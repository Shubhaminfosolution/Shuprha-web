import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">

        <img
          src="/hero-bg.jpeg"
          alt="Digital marketing agency illustration"
          className="w-full h-full object-cover object-center"
        />

        {/* LIGHTER PREMIUM OVERLAYS */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25" />

      </div>

      {/* PREMIUM GLOW EFFECTS */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center max-w-5xl mx-auto">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >

            <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-3 rounded-full text-sm font-medium tracking-wide">

              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

              Your Growth Partner

            </span>

          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[110px] font-semibold tracking-tight leading-[0.95] mb-8 text-white"
          >

            Think Digital,
            <br />

            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Think Shuprha
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/75 mb-14 max-w-3xl mx-auto leading-relaxed"
          >

            We craft exceptional digital experiences and data-driven
            strategies that help brands grow, engage and lead in
            the modern world.

          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >

            {/* PRIMARY BUTTON */}
            <Link
  to="/contact"
  className="group bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-2xl"
>

  Start Your Journey

  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

</Link>

            {/* SECONDARY BUTTON */}
            <Link
  to="/businesses"
  className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors px-6 py-4"
>

  <span className="w-14 h-14 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-500/10 transition-all">

    <Play className="w-5 h-5 ml-0.5" />

  </span>

  <span className="font-medium tracking-wide">
    Explore Our Work
  </span>

</Link>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />

        </div>

      </motion.div>

    </section>
  )
}