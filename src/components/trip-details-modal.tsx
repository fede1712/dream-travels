import { Trip } from "@/types/trip.type";
import { Itinerary } from "../types/trip.type";

export const TripDetailsModal = ({
  isTripDetailsModalOpen,
  setIsTripDetailsModalOpen,
  trip,
  setData,
}: {
  isTripDetailsModalOpen: boolean;
  setIsTripDetailsModalOpen: (isTripDetailsModalOpen: boolean) => void;
  trip: Trip;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
}) => {
  const changeStatus = (status: string) => {
    const updatedTrip = { ...trip, status: status };
    setData((prevData: Trip[]) => {
      return prevData.map((t) => (t.id === trip.id ? updatedTrip : t));
    });
  };

  if (!isTripDetailsModalOpen) return null;

  return (
    <div className="fixed px-2 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg sm:w-7/12 max-h-[90vh] overflow-y-auto my-10">
        <div className="relative">
          <img
            src={trip.photo_url}
            alt={trip.title}
            className="w-full max-h-80 object-cover object-top rounded-t-2xl"
          />
          <button
            onClick={() => setIsTripDetailsModalOpen(false)}
            className="rounded-full p-2 text-black absolute top-4 right-4"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                fill="#121212"
              />
              <path d="M19 9L9 19" stroke="white" strokeWidth="1.38" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 9L19 19" stroke="white" strokeWidth="1.38" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-5 px-10 py-10">
          <h2 className="text-[32px]">{trip.title}</h2>
          {trip.status === "todo" ? (
            <button className="flex gap-2 w-fit" onClick={() => changeStatus("done")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.25 14.25L9 12"
                  stroke="#898989"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10.5L11.25 14.25"
                  stroke="#898989"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C7.02944 21 3 16.9706 3 12V12C3 7.02944 7.02944 3 12 3V3C16.9706 3 21 7.02944 21 12V12C21 16.9706 16.9706 21 12 21V21Z"
                  stroke="#898989"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#898989]">Mark as completed</p>
            </button>
          ) : (
            <button className="flex gap-2 w-fit" onClick={() => changeStatus("todo")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="12"
                  cy="12"
                  r="9.00375"
                  fill="#67D071"
                  stroke="#67D071"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.44252 12.3392L10.6104 14.5071L10.5964 14.4931L15.4875 9.60205"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#898989]">Complete</p>
            </button>
          )}
          <p>{trip.description}</p>
          <span className="border h-0.5 w-full rounded-full bg-[#D8D8D8] my-10" />
          <h3 className="text-[24px] leading-[30px]">Itinerary</h3>
          <div className="max-w-2xl mx-auto p-6">
            <div className="relative">
              <div className="absolute left-[1%] sm:left-[0.5%] top-4 h-[calc(100%-2rem)] border-[0.5px] border-l-2  border-black" />
              <div className="space-y-8">
                {trip.itinerary.map((itinerary: Itinerary, idx: number) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-black" />

                    <div>
                      <p>
                        Day {idx + 1}: {itinerary.location}
                      </p>
                      <p className="text-gray-600">{itinerary.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
