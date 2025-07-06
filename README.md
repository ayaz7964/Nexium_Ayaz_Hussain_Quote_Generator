# Quote Generator

This is a **Quote Generator** web app built with [Next.js](https://nextjs.org) and [ShadCN UI](https://ui.shadcn.com/).  
It allows you to enter a topic and generates 3 random quotes from a local collection based on your input.

## Live Demo

Check out the live demo here:  
[https://nexium-ayaz-hussain-quote-generator.vercel.app/](https://nexium-ayaz-hussain-quote-generator.vercel.app/)

## Features

- Enter a topic and generate 3 random quotes related to it.
- Uses a local JSON/array of 100+ quotes.
- Clean UI with ShadCN components.
- Deployed on Vercel.




## Getting Started

First, run the development server:

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

## Important Note for Local Development

If you are **cloning this project** to use it on your local system, make sure to:

- **Rename the file:**  
  `src/app/Page.tsx` → `src/app/page.tsx`  
  (The filename must be all lowercase: `page.tsx` for Next.js to recognize it as a route.)

Otherwise, the app will not run locally and you may see a 404 error.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.