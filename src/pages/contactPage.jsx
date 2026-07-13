import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'

function ContactSection() {
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
      // Split full name
      const nameParts = formData.name.trim().split(' ')
      const first_name = nameParts[0] || ''
      const last_name = nameParts.slice(1).join(' ') || ''

      // 🔥 Send to Django CRM API
      const response = await fetch('http://127.0.0.1:8000/api/v1/leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          first_name,
          last_name,
          email: formData.email,
          phone: formData.phone,
          status: 'new',
          source: 'website',
          company_name: 'Website Lead',
          notes: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      alert('Enquiry submitted successfully!')

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

    } catch (error) {
      console.error(error)
      alert('Something went wrong!')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to elevate your brand? We'd love to hear from you.
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email us at
                  </p>

                  <p className="font-medium">
                    premwaghmare88560@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Call us at
                  </p>

                  <p className="font-medium">
                    +91 8856076018
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Visit us at
                  </p>

                  <p className="font-medium">
                    WeWork Futura, Magarpatta, Pune
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-8 md:p-10"
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
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your full name"
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
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your email"
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
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
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
                    className="w-full bg-muted border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <ContactSection />
      </main>
    </div>
  )
}