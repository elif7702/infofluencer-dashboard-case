'use client'

import { useRouter } from 'next/navigation'

interface HeaderProps {
  onToggleSidebar?: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-200 px-6 py-4 fixed top-0 left-0 right-0 z-30 md:left-52">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Menu button (mobile) */}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={onToggleSidebar}
            className="md:hidden mr-3 p-2 rounded-md hover:bg-gray-700 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo */}
          <h1 className="text-xl font-bold text-white">
            İnfluencer Dashboard
          </h1>
        </div>

        {/* Right side - Profile button */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium text-white">Profil</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}