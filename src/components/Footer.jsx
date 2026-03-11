import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Services: ['Digital Marketing', 'Branding', 'Social Media', 'SEO'],
  Resources: ['Case Studies', 'Guides', 'Documentation', 'Support'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-accent">S</span>HUPRHA
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Transforming brands through innovative digital marketing strategies since 2018. Think Digital, Think Shuprha.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Shuprha. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/25 hover:bg-accent/90 transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-5 h-5 -rotate-45" />
      </motion.a>
    </footer>
  )
}
