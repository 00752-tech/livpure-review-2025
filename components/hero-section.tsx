import Image from 'next/image'
import { CTAButtons } from './cta-buttons'

export function HeroSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OAiWpZj0mY8rGmBjjCNqQwDlLlBd1g.png"
              alt="Liv Pure supplement bottle with natural ingredients"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Natural Weight Loss Supplement
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Liv Pure is a revolutionary natural supplement designed to support optimal liver function and promote healthy weight management. Our unique blend of powerful ingredients works synergistically to enhance your body's natural fat-burning processes.
            </p>
            <CTAButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

