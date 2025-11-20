import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/about/AboutSection'
import InfoGridSection from '@/components/info/InfoGridSection'
// import ProductsSection from '@/components/productssection/ProductsSection'
import PricingSection from '@/components/pricing/PricingSection'
import Footer from '@/components/footer/Footer'
import Testimonials from '@/components/testimonials/testimonials'
import Made from '@/components/made/Made'
import Shape from '@/components/shape/shape'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <AboutSection />
      <InfoGridSection />
      <Testimonials />
      <Made />
      <PricingSection />
      <Shape />
      <Footer />
    </div>
  )
}
