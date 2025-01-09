// @ts-nocheck
import { items } from "@/fixtures/mock_items";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import jpeg from "@/fixtures/funnyIndex.jpg";

const handlers = [
  http.get("*/data/products.json", () => {
    return HttpResponse.json(items);
  }),
  http.get("https://example.com*", async (_, res, ctx) => {
    const image = await fetch(jpeg).then((res) => res.arrayBuffer());
    return res(ctx.set("Content-Length", image.byteLength.toString()), ctx.set("Content-Type", "image/jpeg"), ctx.body(image));
  }),
];

export const server = setupServer(...handlers);
