import Image from 'next/image'
import { CTAButtons } from './cta-buttons'

export function RitualSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ancient Mediterranean Ritual Boosts Metabolism
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover the powerful natural compounds from ancient Mediterranean civilizations that have been scientifically proven to support liver health and boost metabolism. This time-tested wisdom forms the foundation of Liv Pure's revolutionary formula.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">Key Benefits of This Ancient Ritual:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#008BC7] font-bold">•</span>
                  <span>Enhances natural liver purification processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#008BC7] font-bold">•</span>
                  <span>Supports healthy metabolism and fat burning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#008BC7] font-bold">•</span>
                  <span>Promotes natural detoxification</span>
                </li>
              </ul>
            </div>
            <CTAButtons />
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eX3JqN9kQPP7p8THsnq0216mHXwncY.png"
              alt="Ancient Mediterranean Ritual Process"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

