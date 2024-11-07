import { Itinerary, Trip } from "@/types/trip.type";
import CountdownTimer from "../countdown-timer/countdown-timer";

export const RandomTripModal = ({
  randomTrip,
  isRandomTripModalOpen,
  setIsRandomTripModalOpen,
}: {
  randomTrip: Trip | null;
  isRandomTripModalOpen: boolean;
  setIsRandomTripModalOpen: (isTripDetailsModalOpen: boolean) => void;
}) => {
  if (!isRandomTripModalOpen) return null;

  return (
    <div
      className="fixed px-2 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      role="trip-details-modal"
    >
      <div className="bg-white rounded-2xl shadow-lg sm:w-7/12 max-h-[90vh] overflow-y-auto my-10">
        <div className="relative">
          <img
            src={randomTrip?.photo_url}
            alt={randomTrip?.title}
            className="w-full max-h-80 object-cover object-top rounded-t-2xl"
          />
          <button
            onClick={() => setIsRandomTripModalOpen(false)}
            className="rounded-full p-2 text-black absolute top-4 right-4"
            role="close-trip-details-modal"
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
          <h2 className="text-[32px]">{randomTrip?.title}</h2>
          <CountdownTimer />
          <p>{randomTrip?.description}</p>
          <span className="border h-0.5 w-full rounded-full bg-[#D8D8D8] my-10" />
          <h3 className="text-[24px] leading-[30px]">Itinerary</h3>
          <div className="max-w-2xl mx-auto p-6">
            <div className="relative">
              <div className="absolute left-[1%] sm:left-[0.5%] top-4 h-[calc(100%-2rem)] border-[0.5px] border-l-2  border-black" />
              <div className="space-y-8" role="itinerary-item">
                {randomTrip?.itinerary.map((itinerary: Itinerary, idx: number) => (
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
