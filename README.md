# Node + Express + TypeScript Boilerplate

This is a minimal and scalable boilerplate for Node projects, set up with TypeScript, ESLint, Prettier, .editorconfig and others packages to ensure a clean and efficient development workflow.

## Getting Started

First, run the development server:

```bash
git clone git@github.com:Jbuenoss/Node-Express-Typescript-Boilerplate.git
npm install
```
Then, you can run the project locally in development mode with live reload by executing:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies
This boilerplate uses several dependencies to enhance functionality, improve performance, and simplify development. Below is an overview of each package:

- **express:** A minimalist and flexible web framework for building APIs and web applications in Node.js.
- **morgan:** HTTP request logger middleware that helps with debugging and monitoring incoming API requests.
- **winston:** A powerful logging library that supports multiple transports (console, files, external services, etc.).
- **zod:** A TypeScript-first schema validation library used to validate and parse API request payloads.
- **dotenv:** Loads environment variables from a .env file, keeping configuration details separate from the codebase.
- **@types/cookie-parser:** Type definitions for cookie-parser, used when working with TypeScript.
- **@compression:** Middleware for enabling Gzip compression, improving performance by reducing response sizes.
- **@cookie-parser:** Middleware for parsing cookies attached to client requests, making it easier to handle authentication and session management.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS), allowing the server to handle requests from different origins.



## DevDependencies

- **eslint:** A widely used JavaScript/TypeScript linter to enforce code consistency and detect issues.
- **prettier:** A code formatter that ensures consistent styling across the project.
- **ts-node-dev:** A development tool that runs TypeScript files directly and automatically restarts the server on file changes.
- **typescript:** The TypeScript compiler for writing strongly typed JavaScript.
- **@eslint/js:** ESLint core package for JavaScript linting.
- **typescript-eslint:** Integrates ESLint with TypeScript to provide linting support for TypeScript code.
- **@types/compression:** TypeScript definitions for compression.
- **@types/cors:** TypeScript definitions for cors.
- **@types/express:** TypeScript definitions for express.
- **@types/morgan:** TypeScript definitions for morgan.
- **@types/node:** TypeScript definitions for Node.js core modules.
  

## Formatting

To automatically format your code, use:

```bash
npm run format
```

## License

MIT License.
