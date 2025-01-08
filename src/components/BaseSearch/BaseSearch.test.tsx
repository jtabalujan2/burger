import { render, screen, fireEvent } from "@testing-library/react";
import { BaseSearch } from "./BaseSearch";
import { Mock, vi } from "vitest";
import { useRouter } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

describe("BaseSearch", () => {
  const mockPush = vi.fn();
  const searchList = [
    { name: "Burger", id: "1", slug: "burger" },
    { name: "Fries", id: "2", slug: "fries" },
  ];

  beforeEach(() => {
    (useRouter as Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the input with placeholder", () => {
    render(<BaseSearch placeholder="Search..." searchList={searchList} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("displays suggestions when typing", () => {
    render(<BaseSearch placeholder="Search..." searchList={searchList} />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Bur" } });
    expect(screen.getByText("Burger")).toBeInTheDocument();
  });

  it("displays 'No results found.' when no matches", () => {
    render(<BaseSearch placeholder="Search..." searchList={searchList} />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Pizza" } });
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("calls handleSelect and navigates to the correct page on item select", () => {
    render(<BaseSearch placeholder="Search..." searchList={searchList} />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Bur" } });
    fireEvent.click(screen.getByText("Burger"));
    expect(mockPush).toHaveBeenCalledWith("/menu/burger");
  });
});
