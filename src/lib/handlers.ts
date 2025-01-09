import { items } from "@/fixtures/mock_items";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  http.get("*/data/products.json", () => {
    return HttpResponse.json(items);
  }),
];

export const server = setupServer(...handlers);
