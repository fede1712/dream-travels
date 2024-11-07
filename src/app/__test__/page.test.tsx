import { render, screen, waitFor } from "@testing-library/react";
import { getDreamsTravelsData } from "@/lib/getDreamsTravelsData";
import Home from "../page";

jest.mock("@/lib/getDreamsTravelsData", () => ({ getDreamsTravelsData: jest.fn() }));

const mockTrips = [
  {
    id: 1,
    title: "Trip 1",
    description: "Description 1",
    status: "todo",
    itinerary: [
      { day: 1, location: "Itinerary Location 1", description: "Itinerary description 1" },
      { day: 2, location: "Itinerary Location 2", description: "Itinerary description 2" },
    ],
  },
  {
    id: 2,
    title: "Trip 2",
    description: "Description 2",
    status: "done",
    itinerary: [
      { day: 1, location: "Itinerary Location 1", description: "Itinerary description 1" },
      { day: 2, location: "Itinerary Location 2", description: "Itinerary description 2" },
    ],
  },
];
describe("Home page", () => {
  beforeEach(() => (getDreamsTravelsData as jest.Mock).mockResolvedValue(mockTrips));

  afterEach(() => jest.clearAllMocks());

  it("renders Nav, Hero, and TripsList components", async () => {
    render(<Home />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("The places you dream of")).toBeInTheDocument();
    expect(screen.getByText("Let’s live new adventures")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole("trips-list")).toBeInTheDocument());
  });

  it("calls getDreamsTravelsData and sets data correctly", async () => {
    render(<Home />);

    await waitFor(() => expect(getDreamsTravelsData).toHaveBeenCalledTimes(1));
    expect(screen.getByText("Trip 1")).toBeInTheDocument();
    expect(screen.getByText("Trip 2")).toBeInTheDocument();
  });
});
