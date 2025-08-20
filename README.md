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

## Rationale Behind Choosing Next.js Over SPA Model

### Project Overview

This project involves building a web application that fetches data from a Star Wars API. It supports fetching single elements and allows searching within the data. The application follows the Backend-For-Frontend (BFF) pattern, enabling the frontend to receive only the required data fields, optimizing performance and reducing complexity.

---

### Key Decisions and Rationale

#### 1. Choosing Next.js instead of SPA React

Next.js was selected as the framework for this project rather than a standard Single Page Application (SPA) using React. The reasons include:

##### a. Server-Side Rendering (SSR) for SEO

- **SEO Requirements**: The Star Wars app benefits from good search engine indexing because users may search for characters, planets, or movies via search engines.
- **SSR Advantage**: Next.js provides built-in server-side rendering, meaning pages are pre-rendered on the server before reaching the client. This results in:
  - Better SEO because crawlers receive fully rendered HTML content.
  - Improved performance for initial page loads.
- **SPA Limitation**: A React SPA bundles a mostly empty HTML page with JavaScript which hydrates client-side to fetch and display content. This can delay when crawlers or users see the actual page content, hurting SEO.

##### b. Simplified Data Fetching and BFF Integration

- Next.js offers API routes and capabilities such as `getServerSideProps` or `getStaticProps` to fetch and pass required data to pages during rendering.
- This aligns well with the **BFF pattern**, where the backend aggregates and filters API data before delivering it to the frontend.
- With Next.js, this data fetching occurs server-side, hiding backend complexity from the client and delivering only necessary fields.

##### c. Enhanced User Experience via Faster Time-To-Content

- SSR helps display meaningful content to users faster by reducing the time to first meaningful paint.
- This is critical for user experience in a search-based app where quick feedback is expected.

##### d. Built-in Routing and File-based Structure

- Next.js provides automatic routing based on the file system, which streamlines development for pages like `/character/[id]` or `/search`.
- This reduces boilerplate code and is more scalable than setting up routes manually in a React SPA.

In summary, Next.js was chosen to provide an SEO-friendly, performant, and maintainable solution for data application that leverages server-side rendering and a clean BFF architecture.
