'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    week: '1. Hafta',
    followers: 200,
  },
  {
    week: '2. Hafta', 
    followers: 450,
  },
  {
    week: '3. Hafta',
    followers: 300,
  },
  {
    week: '4. Hafta',
    followers: 600,
  },
]

export default function FollowersChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
        Haftalık Takipçi Analizi
      </h2>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="week" 
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f9fafb', 
                border: '1px solid #d1d5db',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="followers" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              name="Takipçi Sayısı"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Son 4 haftadaki takipçi sayısı değişimi gösterilmektedir.
        </p>
      </div>
    </div>
  )
}