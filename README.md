This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Running your Environment

1. Create an .env.local file with the associated keys:

   ```
   BASE_URL="https://example.com"
   ```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

1. Run `yarn test` to keep a live watcher on files changed
2. Run `yarn coverage` to look at test coverage among all files

We use `msw` (mock service worker) to handle all incoming and outgoing api calls

## Vercel

This application is hosted on [Vercel]()
