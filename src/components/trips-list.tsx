"use client";
import { getDreamsTravelsData } from "@/lib/getDreamsTravelsData";
import { Trip } from "@/types/trip.type";
import { TripComponent } from "./trip-component";
import { TripsFiltersButtons } from "./trips-filters-buttons";
import { useEffect, useState } from "react";
import { SearchBar } from "./search-bar";
import { Skeleton } from "./skeleton";

export const TripsList = () => {
  const [data, setData] = useState<Trip[]>([]);
  const [status, setStatus] = useState<"all" | "todo" | "done">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = data.filter((trip: Trip) => {
    const matchesFilter =
      status === "all" ||
      (status === "todo" && trip.status === "todo") ||
      (status === "done" && trip.status === "done");

    const matchesSearchTerm =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearchTerm;
  });

  useEffect(() => {
    const response = getDreamsTravelsData();
    response.then((data) => setData(data));
  }, []);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className="flex flex-col gap-10 mt-10">
        <TripsFiltersButtons setStatus={setStatus} status={status} setSearchTerm={setSearchTerm} />
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip: Trip, idx: number) => <TripComponent trip={trip} key={idx} setData={setData} />)
        ) : (
          <Skeleton />
        )}
      </div>
    </>
  );
};
