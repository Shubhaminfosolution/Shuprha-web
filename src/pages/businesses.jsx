import { motion } from 'framer-motion';
import { Sparkles, Brain, ShoppingCart, Briefcase, Globe } from 'lucide-react';

const Businesses = () => {
  const businesses = [
    {
      name: 'Golden Super Shine',
      services: 'Car Washing • Home Cleaning',
      description: 'Premium cleaning services for cars and homes with high customer satisfaction.',
      icon: <Sparkles size={28} />,
      link: 'https://example.com' // 🔁 replace with real link
    },
    {
      name: 'Hysteresis',
      services: 'Education',
      description: 'Professional cleaning solutions for homes and offices.',
      icon: <Brain size={28} />,
      link: 'https://hysteresis.in/'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-background text-foreground">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Businesses We’ve{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent">
            Helped Grow
          </span>
        </motion.h1>

        <p className="text-muted text-lg max-w-3xl mx-auto">
          Real businesses. Real growth. Here are some of the brands we’ve worked with.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {businesses.map((b, i) => (
          <motion.a
            key={i}
            href={b.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl 
                       hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 
                       hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] block"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 
                            bg-gradient-to-br from-blue-500/10 via-transparent to-transparent blur-xl"></div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 
                            group-hover:scale-110 group-hover:bg-primary/20 transition">
              <div className="text-primary group-hover:rotate-6 transition">
                {b.icon}
              </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
              {b.name}
            </h3>

            {/* Services */}
            <p className="text-primary text-sm mb-3">
              {b.services}
            </p>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-4">
              {b.description}
            </p>

            {/* Visit Hint */}
            <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition">
              Visit Website →
            </span>

          </motion.a>
        ))}

      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-28 text-center">
        <motion.h2 className="text-4xl font-bold mb-6">
          Want Your Business Here? 🚀
        </motion.h2>

        <p className="text-muted mb-8">
          Let’s scale your business and make you our next success story.
        </p>

        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full 
                     font-semibold text-lg hover:scale-105 transition shadow-lg shadow-blue-500/20"
        >
          Work With Us
        </a>
      </div>

    </div>
  );
};

export default Businesses;