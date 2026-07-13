import { motion } from "framer-motion";
import {
  TrendingUp,
  Palette,
  Share2,
  Search,
  Video,
  Globe,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Advertisements",
    description:
      "Performance-driven advertising campaigns designed to increase reach and conversions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },

  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Premium branding systems crafted for memorable modern businesses.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },

  {
    icon: Share2,
    title: "Social Media",
    description:
      "Creative strategies that build engagement and digital presence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },

  {
    icon: Search,
    title: "CRM Solutions",
    description:
      "Smart CRM workflows and automation systems that improve customer experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },

  {
    icon: Video,
    title: "Product Videos",
    description:
      "High-quality cinematic videos tailored for digital-first brands.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
  },

  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern responsive websites focused on performance and scalability.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
];

function Services() {
  return (
    <section className="bg-[#f3f3f1] text-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">

        {/* BACKGROUND LINES */}
        <div className="absolute bottom-0 left-0 w-full opacity-70">

          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              d="M0 250L120 280L240 240L360 300L480 220L600 270L720 210L840 290L960 190L1080 260L1200 170L1320 240L1440 200"
              stroke="#25b7f3"
              strokeWidth="2"
            />

            <path
              d="M0 280L140 220L280 300L420 200L560 260L700 180L840 250L980 150L1120 280L1260 190L1440 260"
              stroke="#25b7f3"
              strokeWidth="2"
              opacity="0.7"
            />

          </svg>

        </div>

        {/* TITLE */}
        <div className="relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* IMAGE TEXT */}
            <h1
              className="text-[58px] md:text-[95px] lg:text-[135px] font-black uppercase tracking-[-0.08em] leading-none text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              SERVICES
            </h1>

            {/* DARK OVERLAY */}
            <h1 className="absolute inset-0 text-[58px] md:text-[95px] lg:text-[135px] font-black uppercase tracking-[-0.08em] leading-none text-black opacity-90">
              SERVICES
            </h1>

            {/* LIGHT TEXTURE */}
            <h1
              className="absolute inset-0 text-[58px] md:text-[95px] lg:text-[135px] font-black uppercase tracking-[-0.08em] leading-none text-transparent bg-clip-text opacity-30"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              SERVICES
            </h1>

          </motion.div>

          {/* DOWN ICON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              delay: 0.5,
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-6 flex justify-center"
          >

            <ChevronDown
              size={40}
              className="text-[#1eb7f4]"
              strokeWidth={3}
            />

          </motion.div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 px-6 md:px-10">

        <div className="max-w-[1350px] mx-auto">

          {/* SECTION HEADING */}
          <div className="mb-14">

            <p className="uppercase tracking-[0.28em] text-[10px] text-black/35 mb-4">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] max-w-4xl leading-tight">
              Digital solutions crafted for modern brands.
            </h2>

          </div>

          {/* SERVICES LIST */}
          <div className="border-t border-black/10">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-6 py-8 border-b border-black/10 group cursor-pointer"
              >

                {/* IMAGE */}
                <div className="md:col-span-2">

                  <div className="relative w-full h-28 md:h-24 rounded-2xl overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/35"></div>

                    <div className="absolute inset-0 flex items-center justify-center text-white">

                      <service.icon size={24} />

                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="md:col-span-8">

                  <h3 className="text-2xl md:text-4xl font-bold tracking-[-0.04em] mb-3 group-hover:translate-x-1 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed">
                    {service.description}
                  </p>

                </div>

                {/* BUTTON */}
                <div className="md:col-span-2 flex md:justify-end items-start">

                  <div className="flex items-center gap-2 uppercase tracking-[0.18em] text-[10px] text-black/45 group-hover:text-black transition-all duration-300">

                    Explore

                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </section>
  );
}

export default Services;
