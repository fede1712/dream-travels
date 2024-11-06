"use client";
import { CreateTripModal } from "@/components/create-trip-modal";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { TripsList } from "@/components/trips-list";
import { useState } from "react";

export default function Home() {
  const [isCreateTripModalOpen, setIsCreateTripModalOpen] = useState(false);

  return (
    <>
      <Nav setIsCreateTripModalOpen={setIsCreateTripModalOpen} />
      <main className="flex flex-col items-center justify-center gap-10">
        <Hero />
        <TripsList />
      </main>
      <CreateTripModal
        isCreateTripModalOpen={isCreateTripModalOpen}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
      />
    </>
  );
}
