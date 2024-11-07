import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TripButtons } from "../trip-button";

describe("Trip button component", () => {
  const setIsTripDetailsModalOpen = jest.fn();
  const setIsEditTripModalOpen = jest.fn();
  const setData = jest.fn();
  const tripId = 1;

  it("should render the trip buttons correctly", () => {
    render(
      <TripButtons
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        tripId={tripId}
      />
    );
    expect(screen.getByRole("trip-buttons")).toBeInTheDocument();
    expect(screen.getByRole("trip-details-button")).toBeInTheDocument();
    expect(screen.getByRole("edit-trip-button")).toBeInTheDocument();
    expect(screen.getByRole("delete-trip-button")).toBeInTheDocument();
  });

  it("should call setIsTripDetailsModalOpen on clicking trip details button", () => {
    render(
      <TripButtons
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        tripId={tripId}
      />
    );
    const tripDetailsButton = screen.getByRole("trip-details-button");

    fireEvent.click(tripDetailsButton);

    expect(setIsTripDetailsModalOpen).toHaveBeenCalledWith(true);
  });

  it("should call setIsEditTripModalOpen on clicking edit button", () => {
    render(
      <TripButtons
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        tripId={tripId}
      />
    );
    const tripEditButton = screen.getByRole("edit-trip-button");

    fireEvent.click(tripEditButton);

    expect(setIsEditTripModalOpen).toHaveBeenCalledWith(true);
  });

  it("should call setData on clicking delete button", () => {
    render(
      <TripButtons
        setIsTripDetailsModalOpen={setIsTripDetailsModalOpen}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        tripId={tripId}
      />
    );
    const tripDeleteButton = screen.getByRole("delete-trip-button");

    fireEvent.click(tripDeleteButton);

    expect(setData).toHaveBeenCalled();
  });
});
