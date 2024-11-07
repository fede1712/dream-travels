import "@testing-library/jest-dom";
import { ItineraryForm } from "../itinerary-form";
import { render, screen } from "@testing-library/react";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";

describe("Itinerary form component", () => {
  const setActualTrip = jest.fn();
  const actualTrip = filteredTripsMock[0];

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
