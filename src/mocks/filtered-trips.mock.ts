export const filteredTripsMock = [
  {
    id: 1,
    title: "Trip 1",
    description: "Description 1",
    status: "todo",
    photo_url: "image-trip-1.jpg",
    itinerary: [
      { day: 1, location: "Itinerary Location 1", description: "Itinerary description 1" },
      { day: 2, location: "Itinerary Location 2", description: "Itinerary description 2" },
    ],
  },
  {
    id: 2,
    title: "Trip 2",
    description: "Description 2",
    status: "done",
    photo_url: "image-trip-2.jpg",
    itinerary: [
      { day: 1, location: "Itinerary Location 1", description: "Itinerary description 1" },
      { day: 2, location: "Itinerary Location 2", description: "Itinerary description 2" },
    ],
  },
];
