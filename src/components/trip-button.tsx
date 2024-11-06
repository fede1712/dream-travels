import { Trip } from "@/types/trip.type";

export const TripButtons = ({
  setIsTripDetailsModalOpen,
  setData,
  tripId,
}: {
  setIsTripDetailsModalOpen: (isTripDetailsModalOpen: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
  tripId: number;
}) => {
  const handleDelete = () => setData((prevData: Trip[]) => prevData.filter((t) => t.id !== tripId));

  return (
    <div className="flex gap-10 justify-between mt-10">
      <button className="underline" onClick={() => setIsTripDetailsModalOpen(true)}>
        See trip details
      </button>

      <div className="flex gap-10 underline">
        <button className="underline">Edit</button>
        <button className="text-[#C93957] underline" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
