import HostReviews from '@/components/modules/Profile/HostReviews'
import ProfileHeader from '@/components/modules/Profile/ProfileHeader'
import EventCard from '@/components/shared/EventCard'
import { getMyProfile } from '@/services/profile/getMyProfile'
import { IEvent } from '@/types/event.interface'

export default async function ProfilePage() {
  const data = await getMyProfile()
  const { events,  reviews, ...profile } = data.data
  console.log("reviews", reviews)
  return (
    <div className="min-h-screen bg-(--color-light-gray)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Profile Header */}
        <ProfileHeader profile={profile} currentUserId={profile.id} />

        {/* Host reviews */}
        {reviews?.length > 0 &&
          <HostReviews HostReviews={reviews} />}

        {/* Events */}
        <div>
          {events
            && <>
              <h2 className="text-2xl font-bold text-(--color-dark) mb-6">
                {!(profile.role === "ADMIN") && (
                  profile.role === "USER" ? "Events Joined" : "Events Hosted"
                )}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event: IEvent) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </>}
        </div>
      </div>
    </div>
  )
}
