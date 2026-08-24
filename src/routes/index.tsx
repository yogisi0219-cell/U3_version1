import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Gallery } from '@/components/Gallery'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { Booking } from '@/components/Booking'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-ink">
      <Nav />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}
