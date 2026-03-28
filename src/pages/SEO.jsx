import { motion } from 'framer-motion'

const SEO = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-background text-center text-foreground">

      <motion.h1 className="text-6xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          SEO Services
        </span>
      </motion.h1>

      <p className="text-gray-300 mb-16">
        Rank higher. Get traffic. Grow faster.
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {["On-Page SEO", "Off-Page SEO", "Technical SEO"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SEO