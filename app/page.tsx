import ScrollyCanvas from '@/components/ScrollyCanvas'
import Overlay from '@/components/Overlay'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main style={{ background: '#121212', minHeight: '100vh' }}>
      <Navigation />

      {/* 600vh scroll-linked canvas section */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Content sections below the canvas */}
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
