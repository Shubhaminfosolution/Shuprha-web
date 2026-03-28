import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const logo = "/logo.png";

const footerLinks = {
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Services: ['Digital Marketing', 'Branding', 'Social Media', 'SEO'],
  Resources: ['Case Studies', 'Guides', 'Documentation', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/shuprha', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">

          {/* Logo Section */}
          <div className="col-span-2">
            <div className='logo-container footer'>
              <img className='logo' src={logo} alt="logo" />
            </div>

            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Transforming brands through innovative digital marketing strategies since 2026. Think Digital, Think Shuprha.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center 
                             text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">

                {links.map((link) => {
                  const path = "/" + link.toLowerCase().replace(/ /g, '-')

                  return (
                    <li key={link}>
                      <Link
                        to={path}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                })}

              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section (Clean + Centered) */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm tracking-wide">
            © 2026 Shuprha. All rights reserved.
          </p>
        </div>

      </div>

      {/* Back to top */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg hover:bg-accent/90 transition z-40"
      >
        <ArrowUpRight className="w-5 h-5 -rotate-45" />
      </motion.a>
    </footer>
  )
}