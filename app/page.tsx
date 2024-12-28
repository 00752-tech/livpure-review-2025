import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { FAQSection } from '@/components/faq-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="benefits">
        <BenefitsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </div>
  )
}
