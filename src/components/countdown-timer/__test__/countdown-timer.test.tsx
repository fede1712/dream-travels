import { render, screen } from "@testing-library/react";
import CountdownTimer from "../countdown-timer";

describe("Countdown timer component", () => {
  it("should render countdown timer", () => {
    render(<CountdownTimer />);

    expect(screen.getByText("Are you ready?")).toBeInTheDocument();
    expect(screen.getByRole("countdown-timer")).toBeInTheDocument();
  });
});
