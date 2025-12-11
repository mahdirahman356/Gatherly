"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IHostRequest, IUserProfile, UserRole } from "@/types/user.interface";
import { AlertCircle, CalendarIcon, EditIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import UpdateUserFormDialog from "./UpdateUserFormDialog";

interface ProfileHeaderProps {
    profile: {
        id: string
        profile: IUserProfile,
        totalEvents: number,
        createdAt: string,
        role: UserRole,
        hostRequest: IHostRequest[]
    },
    currentUserId: string
}

const ProfileHeader = ({ profile, currentUserId }: ProfileHeaderProps) => {
    const { fullName, image, bio, interests, location } = profile.profile
    
    const isOwnProfile = currentUserId === profile.id;
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    };
    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <UpdateUserFormDialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
                profile={profile.profile}
            />
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                {profile?.hostRequest?.[0]?.status
                    && <div className="flex items-start gap-3 mb-8">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div className="flex-1">
                            <h3 className="text-sm text-amber-900">
                                {profile?.hostRequest?.[0]?.status === "PENDING" 
                                && "Your host request is pending approval"}
                                {profile?.hostRequest?.[0]?.status === "REJECTED" 
                                && "Your request was rejected"}
                            </h3>
                        </div>
                    </div>}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <Image
                            src={image ? image : "/images/user.png"}
                            alt={fullName}
                            className="w-32 h-32 rounded-full object-cover shadow-lg"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-(--color-dark) mb-2">
                                    {fullName}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-sm text-(--color-gray) mb-4">
                                    <div className="flex items-center">
                                        <MapPinIcon className="w-4 h-4 mr-1" />
                                        {location}
                                    </div>
                                    <div className="flex items-center">
                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                        Member Since  {format(new Date(profile.createdAt),
                                            "MMM d, yyyy"
                                        )}
                                    </div>
                                </div>
                            </div>

                            {isOwnProfile && (
                                <Button
                                    onClick={handleOpenDialog}
                                    variant="outline"
                                    size="sm"
                                >
                                    <EditIcon className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </Button>
                            )}
                        </div>

                        <p className="text-(--color-gray) mb-6">{bio}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-4 bg-gray-200 rounded-xl">
                                <div className="text-2xl font-bold text-(--color-dark) mb-2">
                                    {profile.totalEvents}
                                </div>
                                <div className="text-xs text-(--color-gray)">
                                    {profile.role === "USER" ? "Events Joined" : "Events Hosted"}
                                </div>
                            </div>
                            {/* Interests */}
                            <div>
                                {interests.length > 0 && <>
                                    <h3 className="font-semibold text-(--color-dark) mb-3">
                                        Interests
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {interests.map((interest, index) => (
                                            <Badge key={index} variant="gray">
                                                {interest}
                                            </Badge>
                                        ))}
                                    </div>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;