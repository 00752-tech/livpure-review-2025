'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export function Footer() {
  const navigation = {
    main: [
      { name: 'Benefits', href: '#benefits' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'FAQ', href: '#faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return (
    <footer className="bg-[#1a1f2b] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-200">
              LivPureReview2025.com
            </Link>
            <p className="text-sm leading-6">
              Supporting healthy weight management naturally with clinically researched ingredients. Our mission is to help people maintain optimal liver function and improve their quality of life through science-backed natural solutions.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">NAVIGATION</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">LEGAL</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimers Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 space-y-8">
          <div className="text-xs space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Medical Disclaimer:</h4>
              <p>
                The information provided on this website is for general informational purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice. Do not use the information on this website for diagnosing or treating any medical or health condition. If you have or suspect you have a medical problem, promptly contact your professional healthcare provider.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">FDA Disclaimer:</h4>
              <p>
                These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Results Disclaimer:</h4>
              <p>
                Individual results may vary. The testimonials featured on this site are examples of results some people have achieved, but are not intended to represent or guarantee that anyone will achieve the same or similar results.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs">
            © 2025 LivPureReview2025.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

