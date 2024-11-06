import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero } from "../hero";

describe("Hero", () => {
  it("should render the Hero component correctly", () => {
    render(<Hero />);

    const heroComponent = screen.getByRole("hero");
    expect(heroComponent).toBeInTheDocument();

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("The places you dream of");

    const paragraphElement = screen.getByText("Let’s live new adventures");
    expect(paragraphElement).toBeInTheDocument();
  });
});
