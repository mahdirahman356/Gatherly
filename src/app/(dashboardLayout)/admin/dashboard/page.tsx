import {
  UsersIcon,
  ShieldIcon,
  CalendarIcon,
} from 'lucide-react'
const AdminOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[(--color-gray)]">
              Total Users
            </span>
            <UsersIcon className="w-5 h-5 text-[(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)]">
            1,247
          </div>
          <div className="text-xs text-green-600 mt-1">+45 this week</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[(--color-gray)]">
              Active Hosts
            </span>
            <ShieldIcon className="w-5 h-5 text-[(--color-secondary)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)]">89</div>
          <div className="text-xs text-[(--color-gray)] mt-1">
            12 pending approval
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[(--color-gray)]">
              Total Events
            </span>
            <CalendarIcon className="w-5 h-5 text-[(--color-accent)]" />
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)]">342</div>
          <div className="text-xs text-red-600 mt-1">3 flagged</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[(--color-gray)]">
              Platform Revenue
            </span>
            <span className="text-green-600">$</span>
          </div>
          <div className="text-3xl font-bold text-[(--color-dark)]">
            $45.2K
          </div>
          <div className="text-xs text-[(--color-gray)] mt-1">
            This month
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-[(--color-dark)] mb-6">
          Platform Growth
        </h2>
        <div className="flex items-end space-x-3 h-64">
          {[
            {
              month: 'Jul',
              users: 850,
              events: 180,
            },
            {
              month: 'Aug',
              users: 920,
              events: 210,
            },
            {
              month: 'Sep',
              users: 980,
              events: 240,
            },
            {
              month: 'Oct',
              users: 1050,
              events: 280,
            },
            {
              month: 'Nov',
              users: 1150,
              events: 310,
            },
            {
              month: 'Dec',
              users: 1247,
              events: 342,
            },
          ].map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex space-x-1">
                <div
                  className="flex-1 bg-[var(--color-primary)] rounded-t-lg"
                  style={{
                    height: `${(data.users / 1300) * 240}px`,
                  }}
                ></div>
                <div
                  className="flex-1 bg-[var(--color-secondary)] rounded-t-lg"
                  style={{
                    height: `${(data.events / 1300) * 240}px`,
                  }}
                ></div>
              </div>
              <div className="text-xs text-[var(--color-gray)] mt-3 font-medium">
                {data.month}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[var(--color-primary)] rounded mr-2"></div>
            <span className="text-sm text-[var(--color-gray)]">Users</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[var(--color-secondary)] rounded mr-2"></div>
            <span className="text-sm text-[(--color-gray)]">Events</span>
          </div>
        </div>
      </div>

      {/* Quick Actions & Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-dark)] mb-4">
            Pending Actions
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-[var(--color-dark)]">
                  Host Applications
                </div>
                <div className="text-sm text-[var(--color-gray)]">
                  Awaiting approval
                </div>
              </div>
              <div className="text-lg font-bold text-[var(--color-primary)]">
                12
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div>
                <div className="font-medium text-[var(--color-dark)]">
                  Flagged Events
                </div>
                <div className="text-sm text-[var(--color-gray)]">
                  Requires review
                </div>
              </div>
              <div className="text-lg font-bold text-red-600">3</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium text-[var(--color-dark)]">
                  User Reports
                </div>
                <div className="text-sm text-[var(--color-gray)]">
                  Pending investigation
                </div>
              </div>
              <div className="text-lg font-bold text-[var(--color-accent)]">
                7
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-dark)] mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-dark)]">
                  New host approved
                </div>
                <div className="text-xs text-[var(--color-gray)]">
                  5 minutes ago
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-dark)]">
                  Event flagged for review
                </div>
                <div className="text-xs text-[var(--color-gray)]">
                  1 hour ago
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[var(--color-dark)]">
                  45 new user signups
                </div>
                <div className="text-xs text-[var(--color-gray)]">Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview
