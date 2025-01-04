import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
  Geist_Mono: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));
vi.mock("next/navigation");
