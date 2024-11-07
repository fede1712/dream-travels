import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TripsList } from "../trips-list";

describe("Trips list component", () => {
  const setData = jest.fn();
  const filteredTrips = [
    {
      id: 1,
      title: "Trip title 1",
      description: "Trip description 1",
      photo_url: "trip-image-url-1",
      status: "done",
      itinerary: [
        { day: 1, location: "Location 1", description: "Description 1" },
        { day: 2, location: "Location 2", description: "Description 2" },
      ],
    },
    {
      id: 2,
      title: "Trip title 2",
      description: "Trip description 2",
      photo_url: "trip-image-url-2",
      status: "todo",
      itinerary: [
        { day: 1, location: "Location 1", description: "Description 1" },
        { day: 2, location: "Location 2", description: "Description 2" },
      ],
    },
  ];
  const setSearchTerm = jest.fn();
  const setStatu = jest.fn();

  it("should render the trips list component correctly", () => {
    render(
      <TripsList
        filteredTrips={filteredTrips}
        setData={setData}
        setSearchTerm={setSearchTerm}
        status="all"
        setStatus={setStatu}
      />
    );

    expect(screen.getByRole("trips-list")).toBeInTheDocument();
    expect(screen.getByRole("search-input")).toBeInTheDocument();
    expect(screen.getByRole("search-button")).toBeInTheDocument();
    expect(screen.getByRole("trips-filters-buttons")).toBeInTheDocument();
    expect(screen.getByRole("show-all-trips-button")).toBeInTheDocument();
    expect(screen.getByRole("show-todo-trips-button")).toBeInTheDocument();
    expect(screen.getByRole("show-done-trips-button")).toBeInTheDocument();
    expect(screen.getAllByRole("trip-component")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("trip-component")[1]).toBeInTheDocument();
    expect(screen.getByText("Trip title 1")).toBeInTheDocument();
    expect(screen.getByText("Trip title 2")).toBeInTheDocument();
    expect(screen.getByText("Trip description 1")).toBeInTheDocument();
    expect(screen.getByText("Trip description 2")).toBeInTheDocument();
    expect(screen.getAllByRole("trip-buttons")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("trip-buttons")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("trip-details-button")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("edit-trip-button")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("delete-trip-button")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("trip-details-button")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("edit-trip-button")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("delete-trip-button")[1]).toBeInTheDocument();
  });
});
