import "@testing-library/jest-dom/vitest";

import { beforeAll, vi } from "vitest";

import { server } from "./handlers";
import { cleanup } from "@testing-library/react";

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

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };

  server.listen({
    // This tells MSW to throw an error whenever it
    // encounters a request that doesn't have a
    // matching request handler.
    onUnhandledRequest: "error",
  });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
