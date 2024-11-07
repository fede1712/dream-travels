import { Trip } from "@/types/trip.type";

export const TripButtons = ({
  setIsTripDetailsModalOpen,
  setIsEditTripModalOpen,
  setData,
  tripId,
}: {
  setIsTripDetailsModalOpen: (isTripDetailsModalOpen: boolean) => void;
  setIsEditTripModalOpen: (isEditTripModalOpen: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
  tripId: number;
}) => {
  const handleDelete = () => setData((prevData: Trip[]) => prevData.filter((t) => t.id !== tripId));

  return (
    <div className="flex gap-10 justify-between mt-10" role="trip-buttons">
      <button className="underline" onClick={() => setIsTripDetailsModalOpen(true)} role="trip-details-button">
        See trip details
      </button>

      <div className="flex gap-10 underline">
        <button className="underline" onClick={() => setIsEditTripModalOpen(true)} role="edit-trip-button">
          Edit
        </button>
        <button className="text-[#C93957] underline" onClick={handleDelete} role="delete-trip-button">
          Delete
        </button>
      </div>
    </div>
  );
};
