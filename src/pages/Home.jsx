import Hero from '../components/sections/Hero'
import StatsSection from '../components/sections/StatsSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import DifferentialsGrid from '../components/sections/DifferentialsGrid'
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel'
import CTASection from '../components/sections/CTASection'
import { homeDifferentials } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesGrid variant="preview" />
      <DifferentialsGrid
        eyebrow="Por que a Nexus"
        title="A Diferença Nexus"
        items={homeDifferentials}
        bg="bg-ink-950"
      />
      <TestimonialsCarousel />
      <CTASection variant="home" />
    </>
  )
}
