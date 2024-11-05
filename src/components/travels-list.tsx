"use client";
import { getDreamsTravelsData } from "@/lib/getDreamsTravelsData";
import { Travel } from "@/types/travel.type";
import { TravelComponent } from "./travel-component";
import { TavelsFiltersButtons } from "./travel-filters-buttons";
import { useEffect, useState } from "react";
import { SearchBar } from "./search-bar";
import { Skeleton } from "./skeleton";

export const TravelsList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState<"all" | "todo" | "done">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = data.filter((trip: Travel) => {
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
        <TavelsFiltersButtons setStatus={setStatus} status={status} setSearchTerm={setSearchTerm} />
        {filteredTrips.length > 0 ? (
          filteredTrips.map((travel: Travel, idx: number) => <TravelComponent travel={travel} key={idx} />)
        ) : (
          <Skeleton />
        )}
      </div>
    </>
  );
};
