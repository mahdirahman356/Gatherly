"use client"
import { MapPinIcon, CalendarIcon, UsersIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { format } from "date-fns";
import { IEvent } from "@/types/event.interface";
import SaveEventButton from "../modules/Events/SaveEventButton";
import { savedIds } from "@/services/user/evenet.services";

interface EventCardProps extends IEvent {
  viewMode?: "grid" | "list";
}

export default function EventCard({
  id,
  title,
  type,
  date,
  location,
  image,
  maxParticipants,
  host,
  _count,
  viewMode = "grid",
}: EventCardProps) {
  //  Format date & time from backend datetime
  const formattedDate = format(new Date(date), "MMM dd, yyyy");
  const formattedTime = format(new Date(date), "hh:mm a");

  if (viewMode === "list") {
    return (
      <Link href={`/events/${id}`} className="group">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
          <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={500}
              width={500}
            />
            <div className="absolute top-3 left-3">
              <Badge>{type}</Badge>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-(--color-dark) mb-3 group-hover:text-(--color-primary) transition-colors">
                {title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-(--color-gray) mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {formattedDate}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {formattedTime}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  {location}
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-4 h-4 mr-2" />
                  {_count.participants}/{maxParticipants} joined
                </div>
              </div>
            </div>

            {/*  Host Info */}
            <div className="flex items-center pt-4 border-t border-gray-100">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                {host.profile.image ? (
                  <>
                    <Image
                      src={host.profile.image}
                      alt={host.profile.fullName}
                      width={48}
                      height={48}
                      className="object-cover w-8 h-8 rounded-full"
                    />
                  </>
                ) : <span className="text-sm font-semibold text-primary">
                  {host?.profile?.fullName?.charAt(0)?.toUpperCase() || "?"}
                </span>}
              </div>

              <div>
                <div className="text-xs text-(--color-gray)">Hosted by</div>
                <div className="font-semibold text-sm text-(--color-dark)">
                  {host?.profile?.fullName || "Unknown"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  //  GRID VIEW
  return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
        <Link href={`/events/${id}`} className="group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              height={500}
              width={500}
            />
            <div className="absolute top-3 left-3">
              <Badge>{type}</Badge>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-bold text-lg text-(--color-dark) mb-3 group-hover:text-(--color-primary) transition-colors line-clamp-2">
              {title}
            </h3>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                {formattedTime}
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span className="line-clamp-1">{location}</span>
              </div>
              <div className="flex items-center">
                <UsersIcon className="w-4 h-4 mr-2" />
                {_count.participants}/{maxParticipants} joined
              </div>
            </div>
          </div>
        </Link>
        {/* Host and save button */}
        <div className="flex justify-between items-center px-5 mb-4">
          <div className="flex items-center pt-4 border-t border-gray-100">
            <Image
              src={host?.profile?.image || "/avatar.png"}
              alt={host?.profile?.fullName || "Host"}
              className="w-8 h-8 rounded-full object-cover mr-2"
              height={100}
              width={100}
            />
            <div className="text-xs text-gray-600">
              by{" "}
              <span className="font-semibold text-(--color-dark)">
                {host?.profile?.fullName || "Unknown"}
              </span>
            </div>
          </div>
          <SaveEventButton eventId={id}   defaultSaved={savedIds?.includes(id)}/>
        </div>
      </div>
  );
}
