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
        {/* Footer content */}
        {/* ... (include the full footer content here) ... */}
      </div>
    </footer>
  )
}
