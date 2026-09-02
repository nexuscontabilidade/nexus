import { MotionConfig } from 'framer-motion'

import BackgroundDecoration from './components/ui/BackgroundDecoration'
import ScrollProgressBar from './components/ui/ScrollProgressBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import ServicesGrid from './components/sections/ServicesGrid'
import RegimesSection from './components/sections/RegimesSection'
import StorySection from './components/sections/StorySection'
import ValuesGrid from './components/sections/ValuesGrid'
import ProcessTimeline from './components/sections/ProcessTimeline'
import ContactSection from './components/sections/ContactSection'
import FAQSection from './components/sections/FAQSection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-ink-950 font-body text-mist-100 overflow-x-hidden selection:bg-signal selection:text-ink-950">
        <BackgroundDecoration />
        <ScrollProgressBar />
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <ServicesGrid />
          <RegimesSection />
          <StorySection />
          <ValuesGrid />
          <ProcessTimeline />
          <ContactSection />
          <FAQSection />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </MotionConfig>
  )
}
