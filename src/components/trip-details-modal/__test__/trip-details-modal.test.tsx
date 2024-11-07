import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TripDetailsModal } from "../trip-details-modal";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";

describe("Trip details modal component", () => {
  const setIsTripDetailsModalOpen = jest.fn();
  const todoTrip = filteredTripsMock[0];
  const doneTrip = filteredTripsMock[1];
  const setData = jest.fn();

  it("should render the trip details modal component correctly with status todo", () => {
    render(
      <TripDetailsModal
        isTripDetailsModalOpen={true}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setData={setData}
        trip={todoTrip}
      />
    );

    expect(screen.getByRole("trip-details-modal")).toBeInTheDocument();
    expect(screen.getByRole("close-trip-details-modal")).toBeInTheDocument();
    expect(screen.getByRole("mark-as-completed-button")).toBeInTheDocument();
    expect(screen.getByRole("itinerary-item")).toBeInTheDocument();
    expect(screen.getByText("Trip 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Day 1: Itinerary Location 1")).toBeInTheDocument();
    expect(screen.getByText("Day 2: Itinerary Location 2")).toBeInTheDocument();
    expect(screen.getByText("Itinerary description 1")).toBeInTheDocument();
    expect(screen.getByText("Itinerary description 2")).toBeInTheDocument();
    expect(screen.getByAltText("Trip 1")).toBeInTheDocument();
  });

  it("should render the trip details modal component correctly with status done", () => {
    render(
      <TripDetailsModal
        isTripDetailsModalOpen={true}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setData={setData}
        trip={doneTrip}
      />
    );

    expect(screen.getByRole("trip-details-modal")).toBeInTheDocument();
    expect(screen.getByRole("close-trip-details-modal")).toBeInTheDocument();
    expect(screen.getByRole("mark-as-incomplete-button")).toBeInTheDocument();
    expect(screen.getByRole("itinerary-item")).toBeInTheDocument();
    expect(screen.getByText("Trip 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByText("Day 1: Itinerary Location 1")).toBeInTheDocument();
    expect(screen.getByText("Day 2: Itinerary Location 2")).toBeInTheDocument();
    expect(screen.getByText("Itinerary description 1")).toBeInTheDocument();
    expect(screen.getByText("Itinerary description 2")).toBeInTheDocument();
    expect(screen.getByAltText("Trip 2")).toBeInTheDocument();
  });

  it("should work close button correctly", () => {
    render(
      <TripDetailsModal
        isTripDetailsModalOpen={true}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setData={setData}
        trip={doneTrip}
      />
    );
    const closeButton = screen.getByRole("close-trip-details-modal");

    fireEvent.click(closeButton);

    expect(setIsTripDetailsModalOpen).toHaveBeenCalledWith(false);
  });

  it("should call changeStatus function correctly if trip status is todo", () => {
    render(
      <TripDetailsModal
        isTripDetailsModalOpen={true}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setData={setData}
        trip={todoTrip}
      />
    );
    const markAsCompletedButton = screen.getByRole("mark-as-completed-button");

    fireEvent.click(markAsCompletedButton);

    expect(setData).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should call changeStatus function correctly if trip status is done", () => {
    render(
      <TripDetailsModal
        isTripDetailsModalOpen={true}
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setData={setData}
        trip={doneTrip}
      />
    );
    const markAsInCompletedButton = screen.getByRole("mark-as-incomplete-button");

    fireEvent.click(markAsInCompletedButton);

    expect(setData).toHaveBeenCalledWith(expect.any(Function));
  });
});
