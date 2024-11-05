"use client";

import { useEffect, useState } from "react";
import { ItineraryForm } from "./itinerary-form";

export const CreateTripModal = ({
  isCreateTripModalOpen,
  setIsCreateTripModalOpen,
}: {
  isCreateTripModalOpen: boolean;
  setIsCreateTripModalOpen: (isCreateTripModalOpen: boolean) => void;
}) => {
  const [itineraryDaysForm, setItineraryDaysForm] = useState<JSX.Element[]>([
    <ItineraryForm itineraryDaysFormLength={0} key={0} />,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreateTripModalOpen(false);
  };

  useEffect(() => {
    if (!isCreateTripModalOpen) {
      setItineraryDaysForm([<ItineraryForm itineraryDaysFormLength={0} key={0} />]);
    }
  }, [isCreateTripModalOpen]);

  if (!isCreateTripModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white mx-10 rounded-2xl p-6 shadow-lg sm:w-5/12 max-h-[90vh] overflow-y-auto my-10">
        <div className="flex justify-between items-center mb-6 bg-white">
          <h2 className="text-[32px]">Create a trip</h2>
          <button onClick={() => setIsCreateTripModalOpen(false)} className="rounded-full p-2 text-black">
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Italy"
              className="border border-gray-300 rounded-full p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              Introduction (max. 240 characters)
            </label>
            <textarea
              id="introduction"
              placeholder="From Rome to Venice..."
              className="border border-gray-300 rounded-2xl p-2 w-full h-24"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Discover the wonders of the Roman empire..."
              className="border border-gray-300 rounded-2xl p-2 w-full h-32"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2 " htmlFor="name">
              Image
            </label>
            <input
              type="text"
              id="image"
              placeholder="Image URL"
              className="border border-gray-300 rounded-full p-2 w-full"
            />
          </div>
          <label className="text-sm mb-2 flex justify-between items-center" htmlFor="name">
            <p>Day by day itinerary</p>
            <button
              type="button"
              onClick={() =>
                setItineraryDaysForm((prevElements) => [
                  ...prevElements,
                  <ItineraryForm itineraryDaysFormLength={itineraryDaysForm.length} key={itineraryDaysForm.length} />,
                ])
              }
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
                  stroke="#121212"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10.5 7V14" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10.5H14" stroke="#121212" strokeWidth="1.41" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </label>
          {itineraryDaysForm.map((_, idx) => (
            <ItineraryForm itineraryDaysFormLength={idx + 1} key={idx} />
          ))}

          <button
            type="submit"
            className="bg-black text-white rounded-full px-10 py-2"
            onClick={() => setIsCreateTripModalOpen(false)}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
