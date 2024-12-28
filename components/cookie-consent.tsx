'use client'

import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const declineCookies = () => {
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit LivPureReview2025.com you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 border border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
            onClick={declineCookies}
          >
            Decline
          </button>
          <button
            className="px-4 py-2 bg-[#008BC7] hover:bg-[#0073A8] text-white"
            onClick={acceptCookies}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

