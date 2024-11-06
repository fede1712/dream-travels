import { Itinerary, Trip } from "@/types/trip.type";

export const ItineraryForm = ({
  itineraryDaysFormLength,
  actualTrip,
  setActualTrip,
  itinerary,
}: {
  itineraryDaysFormLength: number;
  actualTrip?: Trip;
  setActualTrip?: (actualTrip: Trip) => void;
  itinerary?: Itinerary;
}) => {
  const handleChange = (field: string, value: string) => {
    if (setActualTrip && actualTrip) {
      const updatedItinerary = [...actualTrip.itinerary];
      updatedItinerary[itineraryDaysFormLength - 1] = {
        ...updatedItinerary[itineraryDaysFormLength - 1],
        [field]: value,
      };
      setActualTrip({ ...actualTrip, itinerary: updatedItinerary });
    }
  };

  const optionsDays = Array.from({ length: itineraryDaysFormLength }, (_, i) => i + 1);

  return (
    <div className="mb-4">
      <div className="grid grid-cols-6 bg-[#F3F3F3] rounded-2xl p-4 gap-4">
        <select
          required
          name="day"
          id="day"
          className="col-span-2 rounded-2xl p-2 text-black h-fit"
          onChange={(e) => handleChange("day", e.target.value)}
          value={itinerary?.day || ""}
        >
          {optionsDays.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="col-span-4 grid grid-cols-2 gap-2">
          <input
            required
            type="text"
            placeholder="Location"
            className="rounded-2xl w-full col-span-4 p-2 text-black"
            value={actualTrip?.itinerary[itineraryDaysFormLength - 1]?.location ?? ""}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <textarea
            required
            placeholder="Description"
            className="rounded-2xl w-full col-span-4 p-2 text-black h-52"
            value={actualTrip?.itinerary[itineraryDaysFormLength - 1]?.description ?? ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
