# VirtoCommerce XAPI Angular Integration

This project demonstrates how to connect a modern Angular application to the VirtoCommerce XAPI using GraphQL.

## Features

- **GraphQL Integration**: Built with [Apollo Angular](https://the-guild.dev/graphql/apollo-angular) to communicate with VirtoCommerce XAPI.
- **Optimistic Updates**: Provides immediate UI feedback for mutations (e.g., Approving/Rejecting orders) by updating the local cache before the server response confirms the change.
- **End-to-End Type Safety**: Uses [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate TypeScript types and Apollo services directly from GraphQL operations.
- **Modern Angular**: Utilizes Standalone Components and Signals.
- **API Mocking**: Includes [MSW (Mock Service Worker)](https://mswjs.io/) for development and testing without a live backend.

## Getting Started

### Prerequisites
- Node.js 18+
- NPM

### Installation

```bash
npm install
```

### Commands

- **Start Development Server**:
  ```bash
  npm start
  ```
- **Generate GraphQL Types**:
  Regenerate TypeScript interfaces and Apollo services after modifying `.graphql` files.
  ```bash
  npm run generate
  ```
- **Build**:
  ```bash
  npm run build
  ```

## Project Structure

- **`src/app/graphql/`**: Core GraphQL configuration.
  - `operations/`: GraphQL queries and mutations (`.graphql` files).
  - `services/`: Angular services wrapping Apollo operations (handling optimistic updates).
  - `types/`: Generated TypeScript types.
- **`codegen.ts`**: Configuration for GraphQL Code Generator.
