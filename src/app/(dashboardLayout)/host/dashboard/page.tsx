import React from 'react'
import {
  CalendarIcon,
  UsersIcon,
  DollarSignIcon,
  TrendingUpIcon,
  Star,
} from 'lucide-react'
export default function HostOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-(--color-gray)">
              Total Events
            </span>
            <CalendarIcon className="w-5 h-5 text-(--color-primary)" />
          </div>
          <div className="text-3xl font-bold text-(--color-dark)">8</div>
          <div className="text-xs text-(--color-gray) mt-1">
            2 upcoming
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-(--color-gray)">
              Total Participants
            </span>
            <UsersIcon className="w-5 h-5 text-(--color-secondary)" />
          </div>
          <div className="text-3xl font-bold text-(--color-dark)">156</div>
          <div className="text-xs text-green-600 mt-1 flex items-center">
            <TrendingUpIcon className="w-3 h-3 mr-1" />
            +12% this month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-(--color-gray)">
              Total Revenue
            </span>
            <DollarSignIcon className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-(--color-dark)">
            $1,060
          </div>
          <div className="text-xs text-(--color-gray) mt-1">
            $560 pending
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-(--color-gray)">Avg Rating</span>
            <Star className='w-5 h-5 text-yellow-400' />
          </div>
          <div className="text-3xl font-bold text-(--color-dark)">4.9</div>
          <div className="text-xs text-(--color-gray) mt-1">
            From 47 reviews
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-(--color-dark) mb-6">
          Monthly Revenue
        </h2>
        <div className="flex items-end space-x-4 h-64">
          {[
            {
              month: 'Jul',
              value: 320,
            },
            {
              month: 'Aug',
              value: 450,
            },
            {
              month: 'Sep',
              value: 280,
            },
            {
              month: 'Oct',
              value: 560,
            },
            {
              month: 'Nov',
              value: 420,
            },
            {
              month: 'Dec',
              value: 500,
            },
          ].map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full relative group">
                <div
                  className="w-full bg-linear-to-t from-(--color-primary) to-(--color-accent) rounded-t-lg transition-all"
                  style={{
                    height: `${(data.value / 600) * 240}px`,
                  }}
                ></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-(--color-dark) text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${data.value}
                </div>
              </div>
              <div className="text-sm text-(--color-gray) mt-3 font-medium">
                {data.month}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-(--color-dark) mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-(--color-dark)">
                  Sunset Hiking
                </div>
                <div className="text-sm text-(--color-gray)">
                  Dec 28, 5:00 PM
                </div>
              </div>
              <div className="text-sm font-semibold text-(--color-primary)">
                12/15
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-(--color-dark)">
                  Wine Tasting
                </div>
                <div className="text-sm text-(--color-gray)">
                  Jan 3, 7:00 PM
                </div>
              </div>
              <div className="text-sm font-semibold text-(--color-primary)">
                8/12
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-(--color-dark) mb-4">
            Recent Reviews
          </h3>
          <div className="space-y-3">
            <div className="pb-3 border-b border-gray-100">
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-(--color-gray) ml-2">
                  2 days ago
                </span>
              </div>
              <p className="text-sm text-(--color-gray)">
                &quot;Amazing hiking experience!&quot;
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-(--color-gray) ml-2">
                  5 days ago
                </span>
              </div>
              <p className="text-sm text-(--color-gray)">
                &quot;Great host, well organized event.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
