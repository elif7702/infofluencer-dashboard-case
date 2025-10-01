'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function SettingsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col md:ml-52">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 py-6 pt-20 pl-4 pr-4 md:pl-6 md:pr-16 lg:pl-6 lg:pr-20 xl:pl-8 xl:pr-32">
          <div className="max-w-full mx-auto md:max-w-5xl lg:max-w-4xl xl:max-w-3xl xl:mr-auto xl:ml-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Ayarlar
            </h1>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">
                Ayarlar sayfası burada görünecek.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}