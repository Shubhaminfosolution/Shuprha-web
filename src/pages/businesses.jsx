import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Businesses = () => {

  const businesses = [

    {
      id: "golden-super-shine",
      name: "Golden Super Shine",
      category: "Car Washing • Home Cleaning",

      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop",

      logo:
        "https://cdn-icons-png.flaticon.com/512/995/995016.png",

      shortInfo:
        "Premium cleaning services for homes and vehicles with trusted professionals and modern equipment.",

      services: [
        "Car Washing",
        "Deep Home Cleaning",
        "Office Cleaning",
        "Sofa Cleaning",
      ],

      profileLink: "/business/golden-super-shine",
    },


    {
      id: "hysteresis",
      name: "Hysteresis",
      category: "Education",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

      logo:
        "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",

      shortInfo:
        "Future-focused educational institute helping students with professional growth and career guidance.",

      services: [
        "Career Guidance",
        "Professional Courses",
        "Workshops",
        "Mentorship",
      ],

      profileLink: "/business/hysteresis",
    },


    {
      id: "trimit-rachna",
      name: "Trimit Rachna",
      category: "Commercial Interior Design",

      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",

      logo:
        "https://cdn-icons-png.flaticon.com/512/942/942748.png",

      shortInfo:
        "Creative commercial interior design solutions for offices, showrooms and premium business spaces.",

      services: [
        "Commercial Interiors",
        "Office Design",
        "Consultancy",
        "Space Planning",
      ],

      profileLink: "/business/trimit-rachna",
    },


    {
      id: "hindavi-swarajya",
      name: "Hindavi Swarajya Tours & Travels",
      category: "Tours & Travel Solutions",

      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",

      logo:
        "https://cdn-icons-png.flaticon.com/512/201/201623.png",

      shortInfo:
        "A premium travel brand offering comfortable journeys, customized tour packages and reliable transportation solutions with a modern digital experience.",

      services: [
        "Tour Packages",
        "Luxury Travel",
        "Fleet Management",
        "Customized Trips",
      ],

      profileLink: "/business/hindavi-swarajya",
    },


    {
      id: "her-highnest",
      name: "Her Highnest",
      category: "Women Housing Solutions",

      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",

      logo:
      "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
      shortInfo:
        "Safe and affordable housing solutions designed specially for women with comfort and security.",

      services: [
        "Women Property Consultant",
        "Secure Housing",
        "Women Empowerment",
      ],

      profileLink: "/business/her-highnest",
    },

  ];


  return (

    <div className="bg-black text-white min-h-screen overflow-hidden">


      {/* HERO SECTION */}

      <section className="pt-40 md:pt-52 px-6 md:px-10 pb-24 border-b border-white/10">

        <div className="max-w-[1600px] mx-auto">

          <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-8">
            Selected Businesses
          </p>


          <div className="grid lg:grid-cols-2 gap-20 items-end">

            <div>

              <motion.h1
                initial={{ opacity:0,y:40 }}
                animate={{ opacity:1,y:0 }}
                transition={{ duration:0.7 }}
                className="text-[58px] md:text-[110px] leading-[0.92] tracking-tight font-semibold max-w-5xl"
              >
                Businesses we’ve helped grow.
              </motion.h1>

            </div>


            <div className="flex justify-end">

              <motion.p
                initial={{ opacity:0,y:30 }}
                animate={{ opacity:1,y:0 }}
                transition={{ delay:0.2 }}
                className="text-white/55 text-lg leading-relaxed max-w-md"
              >
                Premium branding, modern websites and digital experiences
                crafted for ambitious businesses.
              </motion.p>

            </div>

          </div>

        </div>

      </section>



      {/* BUSINESS SHOWCASE */}

      <section className="px-6 md:px-10 py-10">

        <div className="max-w-[1600px] mx-auto space-y-36 md:space-y-52">


        {businesses.map((business,index)=>(


          <motion.div
            key={business.id}
            initial={{opacity:0,y:60}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-24 items-center group ${
              index % 2 !== 0
              ? "lg:[&>*:first-child]:order-2"
              : ""
            }`}
          >


            {/* IMAGE */}

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 relative">

              <img
                src={business.image}
                alt={business.name}
                className="w-full h-[420px] md:h-[760px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/20"/>

            </div>



            {/* CONTENT */}

            <div className="flex flex-col justify-center px-2 md:px-8">


              <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center mb-10 overflow-hidden">

                <img
                  src={business.logo}
                  alt={business.name}
                  className="w-14 h-14 object-contain"
                />

              </div>


              <p className="uppercase text-white/35 tracking-[0.35em] text-xs mb-7">
                {business.category}
              </p>


              <h2 className="text-5xl md:text-7xl leading-[0.95] font-semibold tracking-tight mb-8">
                {business.name}
              </h2>


              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
                {business.shortInfo}
              </p>



              <div className="flex flex-wrap gap-4 mb-12">

                {business.services.map((service,idx)=>(

                  <div
                    key={idx}
                    className="px-5 py-2 rounded-full border border-white/10 text-sm text-white/70 bg-white/[0.03]"
                  >
                    {service}
                  </div>

                ))}

              </div>



              <Link
                to={business.profileLink}
                className="group flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-white/75 hover:text-white transition-all duration-300 w-fit"
              >

                <span>
                  View Profile
                </span>


                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />

              </Link>


            </div>


          </motion.div>


        ))}


        </div>

      </section>



      {/* CTA */}

      <section className="px-6 md:px-10 py-32 border-t border-white/10 mt-28">

        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between gap-12 items-start lg:items-end">


          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-white/35 mb-6">
              Start a Project
            </p>


            <h3 className="text-5xl md:text-8xl leading-[0.95] font-semibold tracking-tight max-w-5xl">
              Let’s build something unforgettable.
            </h3>


          </div>


          <Link
            to="/contact"
            className="px-10 py-5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.2em] text-sm"
          >
            Work With Us
          </Link>


        </div>

      </section>


    </div>

  );
};


export default Businesses;