import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TripDetailsModal } from "../trip-details-modal";

describe("Trip details modal component", () => {
  const setIsTripDetailsModalOpen = jest.fn();
  const todoTrip = {
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

  const doneTrip = {
    id: 1,
    title: "Trip title",
    description: "Trip description",
    photo_url: "trip-image-url",
    status: "done",
    itinerary: [
      { day: 1, location: "Location 1", description: "Description 1" },
      { day: 2, location: "Location 2", description: "Description 2" },
    ],
  };
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
    expect(screen.getByText("Trip title")).toBeInTheDocument();
    expect(screen.getByText("Trip description")).toBeInTheDocument();
    expect(screen.getByText("Day 1: Location 1")).toBeInTheDocument();
    expect(screen.getByText("Day 2: Location 2")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByAltText("Trip title")).toBeInTheDocument();
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
    expect(screen.getByText("Trip title")).toBeInTheDocument();
    expect(screen.getByText("Trip description")).toBeInTheDocument();
    expect(screen.getByText("Day 1: Location 1")).toBeInTheDocument();
    expect(screen.getByText("Day 2: Location 2")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByAltText("Trip title")).toBeInTheDocument();
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
