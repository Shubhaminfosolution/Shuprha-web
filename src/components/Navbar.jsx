import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactOverlayRaw } from '../pages/Contactbutton'  // ✅ correct name

const logo = "/logo.png";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Businesses', path: '/businesses' },
  { name: 'Why Us', path: '/why-us' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openContact, setOpenContact] = useState(false) // ✅ NEW

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
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
            <img src={logo} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.path ? (
                <Link key={link.name} to={link.path}>
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* CTA BUTTON (FIXED) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setOpenContact(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2.5 rounded-full"
            >
              Get Started
            </button>
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
            <motion.div className="md:hidden">
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.path ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )}

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setOpenContact(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-blue-500 text-white px-5 py-3 rounded-full"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ✅ CONTACT OVERLAY (IMPORTANT) */}
      <AnimatePresence>
        {openContact && (
          <ContactOverlayRaw onClose={() => setOpenContact(false)} />
        )}
      </AnimatePresence>
    </>
  )
}