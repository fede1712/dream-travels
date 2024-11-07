import { fireEvent, render, screen } from "@testing-library/react";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";
import { RandomTripModal } from "../random-trip-modal";

describe("Random trip modal component", () => {
  const randomTrip = filteredTripsMock[0];
  const setIsRandomTripModalOpen = jest.fn();

  it("should render random trip modal correctly", () => {
    render(
      <RandomTripModal
        isRandomTripModalOpen={true}
        setIsRandomTripModalOpen={setIsRandomTripModalOpen}
        randomTrip={randomTrip}
      />
    );

    expect(screen.getByRole("trip-details-modal")).toBeInTheDocument();
  });

  it("should close modal correctly", () => {
    render(
      <RandomTripModal
        isRandomTripModalOpen={true}
        setIsRandomTripModalOpen={setIsRandomTripModalOpen}
        randomTrip={randomTrip}
      />
    );

    const closeButton = screen.getByRole("close-trip-details-modal");
    fireEvent.click(closeButton);

    expect(setIsRandomTripModalOpen).toHaveBeenCalledWith(false);
    expect(screen.getByText("Trip 1")).toBeInTheDocument();
  });
});
