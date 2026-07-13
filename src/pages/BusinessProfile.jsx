import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const businessData = {
  "golden-super-shine": {
    name: "Golden Super Shine",
    category: "Car Washing • Home Cleaning",

    heroImage:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop",

    logo:
      "https://cdn-icons-png.flaticon.com/512/995/995016.png",

    description:
      "Premium cleaning services for homes and vehicles with trusted professionals and modern equipment.",

    services: [
      "Car Washing",
      "Deep Home Cleaning",
      "Office Cleaning",
      "Sofa Cleaning",
    ],
  },

  hysteresis: {
    name: "Hysteresis",
    category: "Education",

    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

    logo:
      "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",

    description:
      "Future-focused educational institute helping students with professional growth and career guidance.",

    services: [
      "Career Guidance",
      "Professional Courses",
      "Workshops",
      "Mentorship",
    ],
  },

  "hindavi-swarajya": {
    name: "Hindavi Swarajya Tours & Travels",
    category: "Tours & Travel Solutions",
  
    heroImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
  
    logo:
      "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  
    description:
      "Hindavi Swarajya Tours & Travels provides premium travel experiences with customized tour packages, comfortable transportation and reliable fleet solutions designed for memorable journeys.",
  
    services: [
      "Customized Tour Packages",
      "Luxury Travel",
      "Fleet Services",
      "Family & Group Tours",
    ],
  },

  "trimit-rachna": {
    name: "Trimit Rachna",
    category: "Commercial Interior Design",

    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",

    logo:
      "https://cdn-icons-png.flaticon.com/512/942/942748.png",

    description:
      "Creative commercial interior design solutions for offices, showrooms and premium business spaces.",

    services: [
      "Commercial Interiors",
      "Office Design",
      "Consultancy",
      "Space Planning",
    ],
  },

  "her-highnest": {
    name: "Her Highnest",
    category: "Women Housing Solutions",
  
    heroImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
  
    logo:
      "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  
    description:
      "Her Highnest provides safe, comfortable and affordable housing solutions specially designed to empower women with secure living spaces.",
  
    services: [
      "Women Property Consultant",
      "Secure Housing",
      "Women Empowerment",
      ,
    ],
  },
};

const BusinessProfile = () => {
  const { id } = useParams();

  const business = businessData[id];

  const [showForm, setShowForm] = useState(false);

  if (!business) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center text-2xl">
        Business not found.
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen">

        <img
          src={business.heroImage}
          alt={business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-24">

          {/* LOGO */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            src={business.logo}
            alt={business.name}
            className="w-24 h-24 object-cover rounded-2xl mb-8 bg-white p-3"
          />

          {/* CATEGORY */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.35em] text-sm text-white/60 mb-5"
          >
            {business.category}
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] leading-[0.9] font-semibold tracking-tight max-w-5xl"
          >
            {business.name}
          </motion.h1>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 md:px-10 py-32 border-b border-white/10">

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-6">
              About
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold leading-[1]">
              Built with quality and trust.
            </h2>

          </div>

          <div>

            <p className="text-white/65 text-xl leading-relaxed">
              {business.description}
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-10 py-32">

        <div className="max-w-[1600px] mx-auto">

          <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-12">
            Services
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {business.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[30px] border border-white/10 bg-white/[0.03]"
              >

                <h3 className="text-3xl font-semibold">
                  {service}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-10 pb-32">

        <div className="max-w-[1600px] mx-auto rounded-[40px] border border-white/10 p-10 md:p-20 bg-white/[0.03]">

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">

            <div>

              <p className="uppercase tracking-[0.35em] text-white/40 text-xs mb-5">
                Enquiry
              </p>

              <h2 className="text-4xl md:text-7xl leading-[0.95] font-semibold max-w-4xl">
                Ready to work with {business.name}?
              </h2>

            </div>

            <button
              onClick={() => setShowForm(true)}
              className="px-10 py-5 rounded-full bg-white text-black hover:scale-105 transition-all duration-300 uppercase tracking-[0.2em] text-sm"
            >
              Submit Enquiry
            </button>

          </div>

        </div>

      </section>

      {/* ENQUIRY FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">

          <div className="w-full max-w-2xl rounded-[30px] border border-white/10 bg-[#0d0d0d] p-6 md:p-10 relative my-10">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white text-3xl leading-none"
            >
              ×
            </button>

            {/* HEADING */}
            <div className="mb-8">

              <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-4">
                Enquiry Form
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Submit Enquiry
              </h2>

            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* NAME */}
              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none text-sm md:text-base focus:border-white/30 transition-all"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none text-sm md:text-base focus:border-white/30 transition-all"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none text-sm md:text-base focus:border-white/30 transition-all"
                />

              </div>

              {/* DESCRIPTION */}
              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Describe your enquiry"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none text-sm md:text-base focus:border-white/30 transition-all"
                />

              </div>

              {/* CONTACT TIME */}
              <div>

                <label className="block text-sm text-white/60 mb-3">
                  Preferred Contact Time
                </label>

                <input
                  type="text"
                  placeholder="When can we contact you?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none text-sm md:text-base focus:border-white/30 transition-all"
                />

              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.01] transition-all duration-300 mt-4"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>
      )}

      {/* BACK BUTTON */}
      <div className="px-6 md:px-10 pb-20">

        <Link
          to="/businesses"
          className="text-white/60 hover:text-white uppercase tracking-[0.2em] text-sm"
        >
          ← Back to Businesses
        </Link>

      </div>

    </div>
  );
};

export default BusinessProfile;