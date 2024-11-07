import "@testing-library/jest-dom";
import { TripsFiltersButtons } from "../trips-filters-buttons";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Trips filters buttons component", () => {
  const setStatus = jest.fn();
  const setSearchTerm = jest.fn();

  it("should render the trips filters buttons component correctly", () => {
    render(<TripsFiltersButtons setStatus={setStatus} status="all" setSearchTerm={setSearchTerm} />);

    expect(screen.getByRole("trips-filters-buttons")).toBeInTheDocument();
    expect(screen.getByRole("show-all-trips-button")).toBeInTheDocument();
    expect(screen.getByRole("show-todo-trips-button")).toBeInTheDocument();
    expect(screen.getByRole("show-done-trips-button")).toBeInTheDocument();
  });

  it("should call setStatus function with all status correctly", () => {
    render(<TripsFiltersButtons setStatus={setStatus} status="all" setSearchTerm={setSearchTerm} />);

    const showAllTripsButton = screen.getByRole("show-all-trips-button");

    fireEvent.click(showAllTripsButton);

    expect(setStatus).toHaveBeenCalledWith("all");
    expect(setSearchTerm).toHaveBeenCalledWith("");
  });

  it("should call setStatus function with todo status correctly", () => {
    render(<TripsFiltersButtons setStatus={setStatus} status="all" setSearchTerm={setSearchTerm} />);

    const showTodoTripsButton = screen.getByRole("show-todo-trips-button");

    fireEvent.click(showTodoTripsButton);

    expect(setStatus).toHaveBeenCalledWith("todo");
    expect(setSearchTerm).toHaveBeenCalledWith("");
  });

  it("should call setStatus function with done status correctly", () => {
    render(<TripsFiltersButtons setStatus={setStatus} status="all" setSearchTerm={setSearchTerm} />);

    const showDoneTripsButton = screen.getByRole("show-done-trips-button");

    fireEvent.click(showDoneTripsButton);

    expect(setStatus).toHaveBeenCalledWith("done");
    expect(setSearchTerm).toHaveBeenCalledWith("");
  });
});
