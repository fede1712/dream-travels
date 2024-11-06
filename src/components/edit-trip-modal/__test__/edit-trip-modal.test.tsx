import { Trip } from "@/types/trip.type";
import "@testing-library/jest-dom";
import { EditTripModal } from "../edit-trip-modal";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Edit trip modal component", () => {
  const setIsEditTripModalOpen = jest.fn();
  const setData = jest.fn();
  const trip: Trip = {
    description: "A wonderful trip exploring Cádiz.",
    id: 0,
    itinerary: [{ day: 0, description: "", location: "" }],
    photo_url: "image.jpg",
    status: "todo",
    title: "Cádiz",
  };

  it("should render the modal when open", () => {
    render(
      <EditTripModal
        isEditTripModalOpen={true}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        trip={trip}
      />
    );

    expect(screen.getByText("Edit a trip")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Cádiz")).toBeInTheDocument();
    expect(screen.getByDisplayValue("A wonderful trip exploring Cádiz.")).toBeInTheDocument();
    expect(screen.getByDisplayValue("image.jpg")).toBeInTheDocument();
  });

  it("should close the modal when clicking the close button", () => {
    render(
      <EditTripModal
        isEditTripModalOpen={true}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        trip={trip}
      />
    );

    const closeButton = screen.getByRole("close-button");
    fireEvent.click(closeButton);

    expect(setIsEditTripModalOpen).toHaveBeenCalledWith(false);
  });

  it("should add a new itinerary day when clicking the add button", () => {
    render(
      <EditTripModal
        isEditTripModalOpen={true}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        trip={trip}
      />
    );

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(1);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(1);

    const addButton = screen.getByRole("add-button");
    fireEvent.click(addButton);

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(1);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(1);
  });

  it("should submit the form correctly", () => {
    render(
      <EditTripModal
        isEditTripModalOpen={true}
        setIsEditTripModalOpen={setIsEditTripModalOpen}
        setData={setData}
        trip={trip}
      />
    );

    const titleInput = screen.getByDisplayValue("Cádiz");
    const descriptionInput = screen.getByDisplayValue("A wonderful trip exploring Cádiz.");
    const imageInput = screen.getByDisplayValue("image.jpg");
    const submitButton = screen.getByRole("submit-button");

    userEvent.type(titleInput, "Sevilla");
    userEvent.type(descriptionInput, "A wonderful trip exploring Sevila.");
    userEvent.type(imageInput, "sevilla-image.jpg");

    fireEvent.click(submitButton);

    expect(setData).toHaveBeenCalled();

    expect(setIsEditTripModalOpen).toHaveBeenCalledWith(false);
  });
});
