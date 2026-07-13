import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    setIsSubmitting(true)

    try {

      const response = await fetch(
        'http://127.0.0.1:8000/api/v1/website-enquiry/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            contact_time: 'Anytime',
          }),
        }
      )

      const data = await response.json()

      if (data.success) {

        alert('Enquiry submitted successfully!')

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })

      } else {

        alert('Submission failed')

      }

    } catch (error) {

      console.error(error)
      alert('Server error')

    }

    setIsSubmitting(false)
  }

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (

    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">
                Exceptional
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Ready to grow your business digitally?
              Connect with our team and let's discuss
              strategies tailored specifically for your brand.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Mail className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Email Address
                  </p>

                  <p className="font-medium text-lg">
                    premwaghmare88560@gmail.com
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Phone Number
                  </p>

                  <p className="font-medium text-lg">
                    +91 8856076018
                  </p>
                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Office Location
                  </p>

                  <p className="font-medium text-lg">
                    WeWork Futura, Magarpatta, Pune
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <form
              onSubmit={handleSubmit}
              className="bg-card/90 backdrop-blur-xl border border-border rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-black/10"
            >

              <div className="space-y-6">

                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-muted border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-muted border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full bg-muted border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-muted border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2"
                >

                  {isSubmitting ? (

                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                  ) : (

                    <>
                      Submit Enquiry
                      <Send className="w-5 h-5" />
                    </>

                  )}

                </button>

              </div>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}