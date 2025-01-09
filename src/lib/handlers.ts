// @ts-nocheck
import { items } from "@/fixtures/mock_items";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import jpeg from "@/fixtures/funnyIndex.jpg";
import png from "@/fixtures/funnyIndex.png";

const handlers = [
  http.get("*/data/products.json", () => {
    return HttpResponse.json(items);
  }),
];

export const server = setupServer(...handlers);
