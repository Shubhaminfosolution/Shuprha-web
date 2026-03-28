import { motion } from 'framer-motion'

const services = [
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google and drive organic traffic.",
    img: "seo analytics dashboard marketing"
  },
  {
    title: "Paid Advertising",
    desc: "Run high-converting ad campaigns with maximum ROI.",
    img: "facebook ads marketing campaign"
  },
  {
    title: "Funnel Strategy",
    desc: "Convert visitors into loyal customers with smart funnels.",
    img: "sales funnel business growth"
  }
]

const DigitalMarketing = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-background text-foreground">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Digital{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Marketing
          </span>
        </motion.h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Performance-driven strategies that scale your business online.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 
                       bg-white/5 backdrop-blur-xl transition-all duration-300 
                       hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]"
          >
            {/* IMAGE */}
            <div className="h-52 overflow-hidden">
              <img
                src={`https://source.unsplash.com/600x400/?${s.img}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default DigitalMarketing