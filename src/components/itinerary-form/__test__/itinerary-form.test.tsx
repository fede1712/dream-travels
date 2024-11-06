import "@testing-library/jest-dom";
import { ItineraryForm } from "../itinerary-form";
import { render, screen } from "@testing-library/react";
import { Trip } from "@/types/trip.type";

describe("Itinerary form component", () => {
  const setActualTrip = jest.fn();
  const actualTrip: Trip = {
    id: 1,
    title: "Cádiz",
    description: "A wonderful trip exploring Cádiz.",
    photo_url: "cadiz-image.jpg",
    status: "todo",
    itinerary: [{ day: 1, location: "Cádiz", description: "A wonderful trip exploring Cádiz." }],
  };

  it("should render the itinerary form correctly", () => {
    render(
      <ItineraryForm
        itineraryDaysFormLength={1}
        actualTrip={actualTrip}
        setActualTrip={setActualTrip}
        itinerary={{ day: 1, location: "Cádiz", description: "A wonderful trip exploring Cádiz." }}
      />
    );

    expect(screen.getByRole("select-day")).toBeInTheDocument();
    expect(screen.getByRole("intinerary-location")).toBeInTheDocument();
    expect(screen.getByRole("intinerary-description")).toBeInTheDocument();
  });
});
