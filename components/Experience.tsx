'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Role {
  title: string
  company: string
  period: string
  type: string
  highlights: string[]
}

const roles: Role[] = [
  {
    title: 'Software Engineer II',
    company: 'MoonDive',
    period: 'Aug 2024 - Present',
    type: 'AI Applications',
    highlights: [
      'Leading AI application development using LLMs, RAG pipelines, and vector search',
      'Architecting scalable systems with Next.js, Node.js, and MongoDB',
      'Deploying AI workloads across Azure and AWS infrastructure',
      'Won All-Rounder 2025 award and SuperArea.ai client excellence award',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'MoonDive',
    period: 'Aug 2023 - Aug 2024',
    type: 'Full Stack Development',
    highlights: [
      'Built and shipped multiple client-facing SaaS products',
      'Developed AI-powered features using LLM APIs and vector databases',
      'Implemented N8N workflows for automation and data pipelines',
      'Won All-Rounder 2024 award',
    ],
  },
]

const skills = [
  'LLM', 'RAG', 'Pinecone', 'Next.js', 'Node.js',
  'MongoDB', 'Docker', 'Azure', 'AWS', 'N8N', 'TypeScript', 'React',
]

const education = [
  {
    degree: 'BTech, Mechanical Engineering',
    institution: 'ABES Engineering College',
    period: '2018 - 2021',
  },
  {
    degree: 'Diploma, Mechanical Engineering',
    institution: 'Galgotia College',
    period: '2015 - 2018',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ background: '#121212', padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '80px' }}
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
            EXPERIENCE
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
            Mechanical to
            <br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>self-taught engineer.</span>
          </h2>
          <p
            style={{
              marginTop: '20px',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            Started with a mechanical engineering background, pivoted to software and AI through self-teaching and relentless building.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

          {/* Timeline */}
          <div>
            <div style={{ position: 'relative', paddingLeft: '28px' }}>
              {/* Timeline line */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'rgba(255,255,255,0.08)',
                }}
              />

              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  style={{ marginBottom: '56px', position: 'relative' }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-33px',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: i === 0 ? '#7c3aed' : 'rgba(255,255,255,0.2)',
                      border: i === 0 ? '2px solid #a78bfa' : '1px solid rgba(255,255,255,0.15)',
                    }}
                  />

                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: i === 0 ? '#7c3aed' : 'rgba(255,255,255,0.3)',
                      marginBottom: '8px',
                    }}
                  >
                    {role.period}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: 'white',
                      letterSpacing: '-0.02em',
                      marginBottom: '4px',
                    }}
                  >
                    {role.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '16px',
                    }}
                  >
                    {role.company} - {role.type}
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.45)',
                          lineHeight: 1.6,
                          paddingLeft: '16px',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: '#7c3aed',
                          }}
                        >
                          -
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills + Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '20px',
                }}
              >
                SKILLS
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.04 }}
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.65)',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      padding: '6px 14px',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '20px',
                }}
              >
                EDUCATION
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {education.map((edu, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '4px',
                      }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {edu.institution}, {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '20px',
                }}
              >
                RECOGNITION
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'All-Rounder 2025, MoonDive',
                  'All-Rounder 2024, MoonDive',
                  'SuperArea.ai Client Excellence Award',
                ].map((award, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: '#7c3aed', fontSize: '16px' }}>*</span>
                    {award}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
