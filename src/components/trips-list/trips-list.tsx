"use client";
import { Trip } from "@/types/trip.type";
import { TripComponent } from "../trip-component/trip-component";
import { TripsFiltersButtons } from "../trips-filters-buttons/trips-filters-buttons";
import { SearchBar } from "../search-bar/search-bar";

export const TripsList = ({
  setData,
  filteredTrips,
  setSearchTerm,
  status,
  setStatus,
}: {
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
  filteredTrips: Trip[];
  setSearchTerm: (searchTerm: string) => void;
  status: "all" | "todo" | "done";
  setStatus: (status: "all" | "todo" | "done") => void;
}) => {
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className="flex flex-col gap-10 mt-10" role="trips-list">
        <TripsFiltersButtons setStatus={setStatus} status={status} setSearchTerm={setSearchTerm} />

        {filteredTrips.map((trip: Trip, idx: number) => (
          <TripComponent trip={trip} key={idx} setData={setData} />
        ))}
      </div>
    </>
  );
};
