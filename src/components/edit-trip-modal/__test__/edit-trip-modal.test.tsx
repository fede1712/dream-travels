import "@testing-library/jest-dom";
import { EditTripModal } from "../edit-trip-modal";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { filteredTripsMock } from "@/mocks/filtered-trips.mock";

describe("Edit trip modal component", () => {
  const setIsEditTripModalOpen = jest.fn();
  const setData = jest.fn();
  const trip = filteredTripsMock[0];

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
    expect(screen.getByDisplayValue("Trip 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Description 1")).toBeInTheDocument();
    expect(screen.getByDisplayValue("image-trip-1.jpg")).toBeInTheDocument();
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

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(2);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(2);

    const addButton = screen.getByRole("add-button");
    fireEvent.click(addButton);

    expect(screen.getAllByRole("intinerary-location")).toHaveLength(3);
    expect(screen.getAllByRole("intinerary-description")).toHaveLength(3);
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

    const titleInput = screen.getByDisplayValue("Trip 1");
    const descriptionInput = screen.getByDisplayValue("Description 1");
    const imageInput = screen.getByDisplayValue("image-trip-1.jpg");
    const form = screen.getByRole("form");

    userEvent.type(titleInput, "Sevilla");
    userEvent.type(descriptionInput, "A wonderful trip exploring Sevila.");
    userEvent.type(imageInput, "sevilla-image.jpg");

    fireEvent.submit(form);

    expect(setData).toHaveBeenCalled();

    expect(setIsEditTripModalOpen).toHaveBeenCalledWith(false);
  });
});
