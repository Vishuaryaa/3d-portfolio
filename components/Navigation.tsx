'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.05], [-20, 0])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        translateX: '-50%',
        zIndex: 100,
        opacity,
        y,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(18,18,18,0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '100px',
          padding: '6px 8px',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '100px',
              transition: 'color 0.2s ease, background 0.2s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'white'
              el.style.background = 'rgba(255,255,255,0.06)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'rgba(255,255,255,0.55)'
              el.style.background = 'transparent'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
