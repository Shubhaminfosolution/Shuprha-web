import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const logo = "/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Businesses', path: '/businesses' },
  { name: 'Why Us', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 backdrop-blur-lg bg-black/60 border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="logo-container">
          <img
            src={logo}
            alt="logo"
            className="brightness-110 contrast-125"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-sm font-medium 
                           drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]
                           hover:text-primary hover:scale-105 
                           transition-all duration-200"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium 
                           drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]
                           hover:text-primary hover:scale-105 
                           transition-all duration-200"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2.5 rounded-full text-sm font-medium 
                       hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden bg-black/80 backdrop-blur-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white text-lg transition"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white text-lg transition"
                  >
                    {link.name}
                  </a>
                )
              )}

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <button className="text-sm text-gray-400 hover:text-white">
                  Login
                </button>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-3 rounded-full text-sm font-medium text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}