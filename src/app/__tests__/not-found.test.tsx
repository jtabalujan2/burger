import { fireEvent, render, screen } from "@testing-library/react";

import NotFound from "../not-found";
import { useRouter } from "next/navigation";
import { Mock } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("NotFound component", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the NotFound component", () => {
    render(<NotFound error={new Error("Test error")} />);
    expect(screen.getByText("Something went wrong! Lets go back home!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
  });

  it("calls router.push when the button is clicked", () => {
    render(<NotFound error={new Error("Test error")} />);
    const button = screen.getByRole("button", { name: /home/i });
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
