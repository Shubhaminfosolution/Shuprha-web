import { motion } from 'framer-motion'

const Branding = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-background text-foreground text-center">

      <motion.h1 className="text-6xl font-extrabold mb-8">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Branding
        </span>
      </motion.h1>

      <p className="text-gray-300 max-w-2xl mx-auto mb-16">
        Build a strong identity that connects emotionally with your audience.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {["Brand Identity", "Brand Strategy"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                       border border-white/10 backdrop-blur-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">{item}</h3>
            <p className="text-gray-300">
              Craft a powerful and memorable brand presence.
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default Branding