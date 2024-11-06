"use client";
import { Trip } from "@/types/trip.type";
import { TripButtons } from "../trip-button/trip-button";
import { TripDetailsModal } from "../trip-details-modal/trip-details-modal";
import { useState } from "react";
import { EditTripModal } from "../edit-trip-modal/edit-trip-modal";

export const TripComponent = ({
  trip,
  setData,
}: {
  trip: Trip;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
}) => {
  const [isTripDetailsModalOpen, setIsTripDetailsModalOpen] = useState(false);
  const [isEditTripModalOpen, setIsEditTripModalOpen] = useState(false);

  return (
    <>
      <div className="grid mx-4 sm:grid-cols-2 justify-between border border-[#D8D8D8] rounded-2xl gap-10 sm:mx-20 mb-10">
        <img src={trip.photo_url} alt={trip.title} className="h-full object-cover sm:rounded-l-2xl rounded-t-2xl" />
        <div className="px-10 py-10">
          <h2 className="text-[24px] leading-[30px]">{trip.title}</h2>
          <p className="text-[16px] leading-[24px] mt-4">{trip.description}</p>
          <TripButtons
            setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
            setIsEditTripModalOpen={setIsEditTripModalOpen}
            setData={setData}
            tripId={trip.id}
          />
        </div>
      </div>
      <TripDetailsModal
        trip={trip}
        setData={setData}
        isTripDetailsModalOpen={isTripDetailsModalOpen}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
      />
      <EditTripModal
        trip={trip}
        setData={setData}
        isEditTripModalOpen={isEditTripModalOpen}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
      />
    </>
  );
};
