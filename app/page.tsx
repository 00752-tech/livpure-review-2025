import { HeroSection } from '../components/hero-section'
import { BenefitsSection } from '../components/benefits-section'
import { RitualSection } from '../components/ritual-section'
import { DetailedReview } from '../components/detailed-review'
import { FAQSection } from '../components/faq-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="benefits">
        <BenefitsSection />
      </section>
      <RitualSection />
      <section id="reviews">
        <DetailedReview />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </div>
  )
}

