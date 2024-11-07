import "@testing-library/jest-dom";
import { TripComponent } from "../trip-component";
import { render, screen } from "@testing-library/react";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";

describe("Trip component", () => {
  const setData = jest.fn();
  const trip = filteredTripsMock[0];

  it("should render the trip component correctly", () => {
    render(<TripComponent setData={setData} trip={trip} />);

    expect(screen.getByRole("trip-component")).toBeInTheDocument();
    expect(screen.getByText("Trip 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByAltText("Trip 1")).toBeInTheDocument();
  });
});
