import "@testing-library/jest-dom";
import { SearchBar } from "../search-bar";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Search bar component", () => {
  const setSearchTerm = jest.fn();
  it("should render the search bar component correctly", () => {
    render(<SearchBar setSearchTerm={setSearchTerm} />);

    expect(screen.getByRole("search-input")).toBeInTheDocument();
  });

  it("should work search button", () => {
    render(<SearchBar setSearchTerm={setSearchTerm} />);

    const searchButton = screen.getByRole("search-button");

    fireEvent.click(searchButton);

    expect(setSearchTerm).toHaveBeenCalled();
  });

  it("should work on enter key", () => {
    render(<SearchBar setSearchTerm={setSearchTerm} />);

    const searchInput = screen.getByRole("search-input");

    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(setSearchTerm).toHaveBeenCalled();
  });
});
