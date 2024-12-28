'use client'

import { useEffect } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Benefits', href: '#benefits' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
]

export function Navigation() {
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
    <header className="bg-[#008BC7]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-white">
            <span className="text-xl font-bold">LivPureReview2025.com</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
