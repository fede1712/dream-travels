"use client";
import { Trip } from "@/types/trip.type";
import { useEffect, useState } from "react";
import { RandomTripModal } from "../random-trip-modal/random-trip-modal";

export const RandomTripButton = ({ filteredTrips }: { filteredTrips: Trip[] }) => {
  const [randomTrip, setRandomTrip] = useState<Trip | null>(null);
  const [isRandomTripModalOpen, setIsRandomTripModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomTrip = () => {
    const randomIndex = Math.floor(Math.random() * filteredTrips.length);
    const selectedTrip = filteredTrips[randomIndex];

    setRandomTrip(selectedTrip);
    setIsRandomTripModalOpen(true);

    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);
    const tripData = { id: selectedTrip.id, targetDate: targetDate.toISOString() };

    localStorage.setItem("randomTrip", JSON.stringify(tripData));
  };

  useEffect(() => {
    if (filteredTrips.length === 0) return;

    const storedTripData = localStorage.getItem("randomTrip");

    if (storedTripData) {
      const { id } = JSON.parse(storedTripData);
      const trip = filteredTrips.find((trip) => trip.id === id);
      if (trip) setRandomTrip(trip);
    }

    setIsLoading(false);
  }, [filteredTrips]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        {isLoading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-400 h-10 w-40"></div>
          </div>
        ) : !randomTrip ? (
          <>
            <h3>Don’t know where to go?</h3>
            <button
              className="bg-black text-white rounded-full py-2 px-4"
              onClick={getRandomTrip}
              role="get-random-trip-button"
            >
              Get random trip!
            </button>
          </>
        ) : (
          <button className="bg-black text-white rounded-full py-2 px-4" onClick={() => setIsRandomTripModalOpen(true)}>
            See details of random trip
          </button>
        )}
      </div>
      <RandomTripModal
        randomTrip={randomTrip}
        isRandomTripModalOpen={isRandomTripModalOpen}
        setIsRandomTripModalOpen={setIsRandomTripModalOpen}
      />
    </>
  );
};
