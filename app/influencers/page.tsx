'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function InfluencersPage() {
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
              İnfluencerlar
            </h1>
            
            {/* Influencer Cards */}
            <div className="space-y-4">
              {/* İnfluencer 1 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      AS
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">Ayşe Serin</h3>
                      <p className="text-gray-600">@ayse_serin</p>
                      <p className="text-sm text-gray-500">Lifestyle İçerik Üreticisi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">45.2K</p>
                      <p className="text-sm text-gray-600">Takipçi</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">4.8%</p>
                      <p className="text-sm text-gray-600">Etkileşim</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">Lifestyle</p>
                      <p className="text-sm text-gray-600">Kategori</p>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>

              {/* İnfluencer 2 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      MK
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">Mehmet Kaya</h3>
                      <p className="text-gray-600">@mehmet_tech</p>
                      <p className="text-sm text-gray-500">Teknoloji Uzmanı</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">32.8K</p>
                      <p className="text-sm text-gray-600">Takipçi</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">6.2%</p>
                      <p className="text-sm text-gray-600">Etkileşim</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">Teknoloji</p>
                      <p className="text-sm text-gray-600">Kategori</p>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>

              {/* İnfluencer 3 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      EY
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">Elif Yılmaz</h3>
                      <p className="text-gray-600">@elif_beauty</p>
                      <p className="text-sm text-gray-500">Güzellik & Bakım</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">24.4K</p>
                      <p className="text-sm text-gray-600">Takipçi</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">2.9%</p>
                      <p className="text-sm text-gray-600">Etkileşim</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">Güzellik</p>
                      <p className="text-sm text-gray-600">Kategori</p>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>

              {/* İnfluencer 4 */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      AÖ
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-gray-900">Ali Özkan</h3>
                      <p className="text-gray-600">@ali_fitness</p>
                      <p className="text-sm text-gray-500">Fitness Antrenörü</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">18.9K</p>
                      <p className="text-sm text-gray-600">Takipçi</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">7.1%</p>
                      <p className="text-sm text-gray-600">Etkileşim</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">Fitness</p>
                      <p className="text-sm text-gray-600">Kategori</p>
                    </div>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}