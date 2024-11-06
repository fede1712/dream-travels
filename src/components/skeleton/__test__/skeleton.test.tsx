import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "../skeleton";

describe("Skeleton component", () => {
  it("should render the skeleton component correctly", () => {
    render(<Skeleton />);

    expect(screen.getByRole("skeleton")).toBeInTheDocument();
  });
});
