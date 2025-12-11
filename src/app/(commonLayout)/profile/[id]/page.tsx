import ProfileHeader from "@/components/modules/Profile/ProfileHeader";
import EventCard from "@/components/shared/EventCard";
import { getMyProfile } from "@/services/profile/getMyProfile";
import { getUserProfile } from "@/services/profile/getUserProfile";
import { IEvent } from "@/types/event.interface";

interface UserProfilePageProps {
    params: { id: string };
}

const UserProfilePage = async ({ params }: UserProfilePageProps) => {
    const { id } = await params;
    const data = await getUserProfile(id)
    const { events, ...profile } = data.data
    const userData = await getMyProfile()
    const currentUserId = userData?.data?.id
    return (
        <div className="min-h-screen bg-(--color-light-gray)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <ProfileHeader profile={profile} currentUserId={currentUserId}/>
                {/* Events */}
                <div>
                    {events
                        && <>
                            <h2 className="text-2xl font-bold text-(--color-dark) mb-6">
                                {profile.role === "USER" ? "Events Joined" : "Events Hosted"}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.map((event: IEvent) => (
                                    <EventCard key={event.id} {...event} />
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;