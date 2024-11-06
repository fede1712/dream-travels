"use client";
import { Trip } from "@/types/trip.type";
import { TripButtons } from "./trip-button";
import { TripDetailsModal } from "./trip-details-modal";
import { useState } from "react";

export const TripComponent = ({
  trip,
  setData,
}: {
  trip: Trip;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
}) => {
  const [isTripDetailsModalOpen, setIsTripDetailsModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 justify-between border border-[#D8D8D8] rounded-2xl gap-10 mx-32 mb-10">
        <img src={trip.photo_url} alt={trip.title} className="h-full object-cover rounded-l-2xl" />
        <div className="px-10 py-10">
          <h2 className="text-[24px] leading-[30px]">{trip.title}</h2>
          <p className="text-[16px] leading-[24px] mt-4">{trip.description}</p>
          <TripButtons setIsTripDetailsModalOpen={setIsTripDetailsModalOpen} setData={setData} tripId={trip.id} />
        </div>
      </div>
      <TripDetailsModal
        setData={setData}
        trip={trip}
        isTripDetailsModalOpen={isTripDetailsModalOpen}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
      />
    </>
  );
};
