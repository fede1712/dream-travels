import { Trip } from "@/types/trip.type";
import { CreateTripModal } from "../create-trip-modal";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Create trip modal component", () => {
  const setIsCreateTripModalOpen = jest.fn();
  const setData = jest.fn();
  const trips: Trip[] = [];

  it("should render the modal when open", () => {
    render(
      <CreateTripModal
        isCreateTripModalOpen={true}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
        setData={setData}
        trips={trips}
      />
    );

    expect(screen.getByText("Create a trip")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Italy")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Discover the wonders of the Roman empire...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
  });

  it("should close the modal when clicking the close button", () => {
    render(
      <CreateTripModal
        isCreateTripModalOpen={true}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
        setData={setData}
        trips={trips}
      />
    );

    const closeButton = screen.getByRole("close-button");
    fireEvent.click(closeButton);

    expect(setIsCreateTripModalOpen).toHaveBeenCalledWith(false);
  });

  it("should add a new itinerary day when clicking the add button", () => {
    render(
      <CreateTripModal
        isCreateTripModalOpen={true}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
        setData={setData}
        trips={trips}
      />
    );

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(1);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(1);

    const addButton = screen.getByRole("add-button");
    fireEvent.click(addButton);

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(2);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(2);
  });

  it("should submit the form correctly", () => {
    render(
      <CreateTripModal
        isCreateTripModalOpen={true}
        setIsCreateTripModalOpen={setIsCreateTripModalOpen}
        setData={setData}
        trips={trips}
      />
    );

    const titleInput = screen.getByPlaceholderText("Italy");
    const descriptionInput = screen.getByPlaceholderText("Discover the wonders of the Roman empire...");
    const imageInput = screen.getByPlaceholderText("Image URL");
    const submitButton = screen.getByRole("submit-button");

    userEvent.type(titleInput, "Cádiz");
    userEvent.type(descriptionInput, "A wonderful trip exploring Cádiz.");
    userEvent.type(imageInput, "cadiz-image.jpg");

    fireEvent.click(submitButton);

    expect(setData).toHaveBeenCalled();

    expect(setIsCreateTripModalOpen).toHaveBeenCalledWith(false);
  });
});
