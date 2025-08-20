## Getting Started

```bash
pnpm install
```

Next, copy the `.env.example` to `.env` and fill the env variables.

```bash
pnpm dev
```

## Technology Stack

| Layer         | Technology / Library       | Purpose                                |
| ------------- | -------------------------- | -------------------------------------- |
| Framework     | Next.js                    | SSR, routing, API routes, SEO          |
| Backend API   | Next.js API Routes         | BFF layer to control and optimize data |
| Data Fetching | Native fetch               | Server-side HTTP calls to SWAPI        |
| Styling       | CSS Modules / Tailwind CSS | Component styling                      |
|               |

## QA/Testing Plan

This project uses Vitest as the testing framework to ensure code quality, correctness, and reliability of the Star Wars Next.js application.

### Testing Goals

- Verify correct fetching and rendering of Star Wars data.
- Validate API routes (BFF layer) handle requests and responses as expected.
- Ensure UI components render correctly with expected props.
- Catch regressions early during development.
- Support maintainability and ease of refactoring.
