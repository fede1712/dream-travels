import { fireEvent, render, screen } from "@testing-library/react";
import { RandomTripButton } from "../random-trip-button";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";

describe("Random trip button component", () => {
  it("should render countdown timer", () => {
    render(<RandomTripButton filteredTrips={filteredTripsMock} />);

    expect(screen.getByText("Don’t know where to go?")).toBeInTheDocument();
    expect(screen.getByText("Get random trip!")).toBeInTheDocument();
  });

  it("should get ramdon trip correctly", () => {
    render(<RandomTripButton filteredTrips={filteredTripsMock} />);

    const getRandomTripButton = screen.getByRole("get-random-trip-button");

    fireEvent.click(getRandomTripButton);

    expect(screen.getByRole("trip-details-modal")).toBeInTheDocument();
  });

  it("should show detail of ramdon trip button correctly", () => {
    render(<RandomTripButton filteredTrips={filteredTripsMock} />);

    expect(screen.getByText("See details of random trip")).toBeInTheDocument();
  });
});
