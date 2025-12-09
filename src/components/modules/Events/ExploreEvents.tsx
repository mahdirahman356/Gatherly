/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/modules/Events/SearchBar";
import { ViewToggle } from "@/components/modules/Events/ViewToggle";
import { FilterSidebar } from "@/components/modules/Events/FilterSidebar";
import { IEvent } from "@/types/event.interface";
import EventCard from "@/components/shared/EventCard";

export default function ExploreEvents({ events }: { events: IEvent[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchTerm") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("type") || "All Categories"
  );
  const [selectedDate, setSelectedDate] = useState(
    searchParams.get("date") || "Any Date"
  );
  const [selectedLocation, setSelectedLocation] = useState(
    searchParams.get("location") || "All Locations"
  );

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("searchTerm", searchQuery);
    if (selectedCategory !== "All Categories")
      params.set("type", selectedCategory);
    if (selectedDate !== "Any Date") params.set("date", selectedDate);
    if (selectedLocation !== "All Locations")
      params.set("location", selectedLocation);

    router.push(`/events?${params.toString()}`, {
         scroll: false,
    });
  }, [searchQuery, selectedCategory, selectedDate, selectedLocation]);

  const handleClearFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedDate("Any Date");
    setSelectedLocation("All Locations");
    setSearchQuery("");
    router.push("/events");
  };

  return (
    <div className="min-h-screen bg-(--color-light-gray)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Explore Events</h1>
          <p className="text-gray-500">
            Find your next adventure and connect with people
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-500">
            Showing <b>{events.length}</b> events
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-80">
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              selectedLocation={selectedLocation}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
              onLocationChange={setSelectedLocation}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              selectedLocation={selectedLocation}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
              onLocationChange={setSelectedLocation}
              onClearFilters={handleClearFilters}
              isMobileOpen
              onMobileClose={() => setMobileFiltersOpen(false)}
            />
          )}

          {/* Events View */}
          <div className="flex-1">
            {events.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                No events found.
              </p>
            ) : viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} viewMode="grid" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} {...event} viewMode="list" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
