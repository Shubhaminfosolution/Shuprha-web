import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const services = [
  {
    title: "Content Creation",
    desc: "High-quality posts, reels & creatives that grab attention.",
    emoji: "🎬"
  },
  {
    title: "Growth Strategy",
    desc: "Data-driven strategies to grow your audience organically.",
    emoji: "📈"
  },
  {
    title: "Engagement Boost",
    desc: "Increase likes, shares, and real audience interaction.",
    emoji: "🔥"
  }
]

const SocialMedia = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-background text-foreground">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Social Media{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Growth
          </span>
        </motion.h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We turn your social media into a powerful growth engine.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 
                       border border-white/10 backdrop-blur-xl hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{s.emoji}</div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-300 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* INSTAGRAM CTA */}
      <div className="text-center">
        <motion.h2 className="text-3xl font-bold mb-4">
          See Our Work on Instagram
        </motion.h2>

        <p className="text-gray-300 mb-6">
          Follow us to explore real campaigns, client results, and creative content.
        </p>

        <a
          href="https://instagram.com/shuprha" // 👉 replace with your real page
          target="_blank"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 
                     text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          <Instagram size={18} />
          Visit Instagram
        </a>
      </div>

    </div>
  )
}

export default SocialMedia