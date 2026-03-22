'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
}

const projects: Project[] = [
  {
    name: 'HireGoat.ai',
    description: 'AI recruitment platform with smart candidate matching and automated screening.',
    tags: ['LLM', 'RAG', 'Next.js', 'Node.js'],
  },
  {
    name: 'SuperArea.ai',
    description: 'Real estate SaaS with AI-powered property matching and intelligent recommendations.',
    tags: ['AI Matching', 'Next.js', 'MongoDB', 'Pinecone'],
  },
  {
    name: 'Flint App',
    description: 'Dating app with AI compatibility matching - connecting people beyond the swipe.',
    tags: ['AI', 'React Native', 'Node.js', 'TypeScript'],
  },
  {
    name: 'ReportPilot',
    description: 'Agency reporting SaaS that automates client reports and performance insights.',
    tags: ['Next.js', 'MongoDB', 'Docker', 'Azure'],
  },
  {
    name: 'VoiceAI Pro',
    description: 'Voice agent platform enabling natural language interactions at scale.',
    tags: ['Voice AI', 'LLM', 'AWS', 'TypeScript'],
  },
  {
    name: 'ShumaliKashmir.com',
    description: 'Travel site for curated Kashmir experiences with intelligent trip planning.',
    tags: ['Next.js', 'CMS', 'SEO', 'TypeScript'],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '28px',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        borderColor: 'rgba(124,58,237,0.4)',
        boxShadow: '0 0 30px rgba(124,58,237,0.15)',
        y: -4,
      }}
    >
      {/* Subtle gradient orb */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-20%',
          width: '60%',
          paddingBottom: '60%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <h3
        style={{
          fontSize: '1.2rem',
          fontWeight: 900,
          color: 'white',
          marginBottom: '10px',
          letterSpacing: '-0.02em',
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.6,
          marginBottom: '20px',
        }}
      >
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: '#a78bfa',
              background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '6px',
              padding: '4px 10px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section
      id="work"
      style={{
        background: '#0a0a0a',
        padding: '120px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '72px' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: '#7c3aed',
              marginBottom: '16px',
            }}
          >
            SELECTED WORK
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            6 products shipped.
            <br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>All live.</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
