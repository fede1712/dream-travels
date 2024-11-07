import "@testing-library/jest-dom";
import { TripComponent } from "../trip-component";
import { render, screen } from "@testing-library/react";

describe("Trip component", () => {
  const setData = jest.fn();
  const trip = {
    id: 1,
    title: "Trip title",
    description: "Trip description",
    photo_url: "trip-image-url",
    status: "todo",
    itinerary: [
      { day: 1, location: "Location 1", description: "Description 1" },
      { day: 2, location: "Location 2", description: "Description 2" },
    ],
  };

  it("should render the trip component correctly", () => {
    render(<TripComponent setData={setData} trip={trip} />);

    expect(screen.getByRole("trip-component")).toBeInTheDocument();
    expect(screen.getByText("Trip title")).toBeInTheDocument();
    expect(screen.getByText("Trip description")).toBeInTheDocument();
    expect(screen.getByAltText("Trip title")).toBeInTheDocument();
  });
});
