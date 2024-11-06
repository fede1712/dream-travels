"use client";
import { CreateTripModal } from "@/components/create-trip-modal/create-trip-modal";
import { Hero } from "@/components/hero/hero";
import { Nav } from "@/components/nav/nav";
import { Skeleton } from "@/components/skeleton/skeleton";
import { TripsList } from "@/components/trips-list/trips-list";
import { getDreamsTravelsData } from "@/lib/getDreamsTravelsData";
import { Trip } from "@/types/trip.type";
import { useEffect, useState, Suspense } from "react";

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
      <main className="flex flex-col items-center justify-center gap-10 m-auto md:px-12 sm:max-w-sm md:max-w-4xl xl:max-w-7xl">
        <Hero />
        <Suspense fallback={<Skeleton />}>
          <TripsList
            setData={setData}
            filteredTrips={filteredTrips}
            setSearchTerm={setSearchTerm}
            status={status}
            setStatus={setStatus}
          />
        </Suspense>
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
