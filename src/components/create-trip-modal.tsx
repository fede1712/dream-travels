"use client";
import { useEffect, useState } from "react";
import { ItineraryForm } from "./itinerary-form";
import { Trip } from "@/types/trip.type";

export const CreateTripModal = ({
  isCreateTripModalOpen,
  setIsCreateTripModalOpen,
  setData,
  trips,
}: {
  isCreateTripModalOpen: boolean;
  setIsCreateTripModalOpen: (isCreateTripModalOpen: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<Trip[]>>;
  trips: Trip[];
}) => {
  const [newTrip, setNewTrip] = useState<Trip>({
    id: 0,
    status: "todo",
    title: "",
    description: "",
    photo_url: "",
    itinerary: [],
  });

  const [itineraryDaysForm, setItineraryDaysForm] = useState<JSX.Element[]>([
    <ItineraryForm itineraryDaysFormLength={0} key={0} actualTrip={newTrip} setActualTrip={setNewTrip} />,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewTrip((prevTrip) => ({
      ...prevTrip,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const maxId = trips.reduce((max, trip) => (trip.id > max ? trip.id : max), 0);
    const newId = maxId + 1;
    const tripWithId = { ...newTrip, id: newId };

    setData((prevData) => [...prevData, tripWithId]);

    setIsCreateTripModalOpen(false);
  };

  const addItineraryDay = () => {
    setNewTrip((prevTrip) => ({
      ...prevTrip,
      itinerary: [...prevTrip.itinerary, { day: prevTrip.itinerary.length + 1, location: "", description: "" }],
    }));

    setItineraryDaysForm((prevElements) => [
      ...prevElements,
      <ItineraryForm
        key={itineraryDaysForm.length}
        itineraryDaysFormLength={itineraryDaysForm.length + 1}
        actualTrip={newTrip}
        setActualTrip={setNewTrip}
      />,
    ]);
  };

  useEffect(() => {
    if (!isCreateTripModalOpen) {
      setItineraryDaysForm([
        <ItineraryForm itineraryDaysFormLength={0} key={0} actualTrip={newTrip} setActualTrip={setNewTrip} />,
      ]);
      setNewTrip({
        id: 0,
        status: "todo",
        title: "",
        description: "",
        photo_url: "",
        itinerary: [],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              required
              onChange={handleChange}
              type="text"
              id="title"
              placeholder="Italy"
              className="border border-gray-300 rounded-full p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              required
              onChange={handleChange}
              id="description"
              placeholder="Discover the wonders of the Roman empire..."
              className="border border-gray-300 rounded-2xl p-2 w-full h-32"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="photo_url">
              Image
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="photo_url"
              placeholder="Image URL"
              className="border border-gray-300 rounded-full p-2 w-full"
            />
          </div>
          <label className="text-sm mb-2 flex justify-between items-center" htmlFor="itinerary">
            <p>Day by day itinerary</p>
            <button type="button" onClick={addItineraryDay}>
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
            <ItineraryForm
              key={idx}
              itineraryDaysFormLength={idx + 1}
              actualTrip={newTrip}
              setActualTrip={setNewTrip}
            />
          ))}

          <button type="submit" className="bg-black text-white rounded-full px-10 py-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
