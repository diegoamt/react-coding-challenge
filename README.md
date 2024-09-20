This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install project dependencies:
```bash
npm i
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

Run unit tests:
```bash
npm run test
```

Run Storybook to see components:
```bash
npm run storybook
```

## Implementation Details

Tech Stack:
- [Next.js](https://nextjs.org)
- [Tailwind](https://tailwindcss.com)
- [StorybookJS](https://storybook.js.org/)
- [Testing Library](https://testing-library.com/)

Features:
- Server side rendering without cache for Products using the API https://fakestoreapi.com/products
- Add and Remove items on the Shopping Cart: Cart state is handled using React Context and Local Storage.
- Local pagination to show more Products.
- Search by keyword: This search is only performed using product titles. To perform a search you need to click the search icon (button) or pressing ENTER.
- StorybookJS to show components UI.
- Responsive Design.
- A11y: Semantic HTML, aria labels, headings order, and more.
- Web performance: lazy loading for Images.
