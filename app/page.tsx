import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { RitualSection } from '@/components/ritual-section'
import { VideoSection } from '@/components/video-section'
import { TranscriptSection } from '@/components/transcript-section'
import { DetailedReview } from '@/components/detailed-review'
import { FAQSection } from '@/components/faq-section'
import { InteractiveEducation } from '@/components/interactive-education'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="benefits">
        <BenefitsSection />
      </section>
      <RitualSection />
      <InteractiveEducation />
      <VideoSection />
      <TranscriptSection />
      <section id="reviews">
        <DetailedReview />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </div>
  )
}
