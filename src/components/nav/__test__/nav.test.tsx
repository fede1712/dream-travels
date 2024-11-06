import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Nav } from "../nav";

describe("Nav component", () => {
  const setIsCreateTripModalOpen = jest.fn();

  it("should render the nav component correctly", () => {
    render(<Nav setIsCreateTripModalOpen={setIsCreateTripModalOpen} />);

    expect(screen.getByText("Create new trip")).toBeInTheDocument();
  });

  it("should render the nav component correctly", () => {
    render(<Nav setIsCreateTripModalOpen={setIsCreateTripModalOpen} />);

    const createTripButton = screen.getByRole("create-trip-button");

    fireEvent.click(createTripButton);

    expect(setIsCreateTripModalOpen).toHaveBeenCalledWith(true);
  });
});
