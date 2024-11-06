"use client";
import { CreateTripModal } from "@/components/create-trip-modal";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { TripsList } from "@/components/trips-list";
import { getDreamsTravelsData } from "@/lib/getDreamsTravelsData";
import { Trip } from "@/types/trip.type";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCreateTripModalOpen, setIsCreateTripModalOpen] = useState(false);
  const [data, setData] = useState<Trip[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<"all" | "todo" | "done">("all");

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
      <Nav setIsCreateTripModalOpen={setIsCreateTripModalOpen} />
      <main className="flex flex-col items-center justify-center gap-10">
        <Hero />
        <TripsList
          setData={setData}
          filteredTrips={filteredTrips}
          setSearchTerm={setSearchTerm}
          status={status}
          setStatus={setStatus}
        />
      </main>
      <CreateTripModal
        isCreateTripModalOpen={isCreateTripModalOpen}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
        setData={setData}
        trips={filteredTrips}
      />
    </>
  );
}
