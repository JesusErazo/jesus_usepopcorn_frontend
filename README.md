# About this project

This project has been created with educational purposes only using Feature-Driven Clean Architecture (often called "Vertical Slicing" in the React community) It immediately sets us up for scalability. It keeps related business logic, data types, and UI together, while keeping our global "App" clean.

Example of the structure:

src/
├── components/ <-- Shared/Generic UI (The "Design System")
│ ├── ErrorMessage.tsx
│ ├── Loader.tsx
│ ├── Logo.tsx
│ ├── Main.tsx
│ ├── NavBar.tsx
│ ├── NumResults.tsx
│ ├── Search.tsx
│ └── StarRating.tsx
├── features/ <-- Feature Modules
│ └── movies/
│ ├── api/ <-- Infrastructure (Fetch logic)
│ │ └── movieApi.ts
│ ├── components/ <-- Feature UI (Specific to Movies)
│ │ ├── MovieItem.tsx
│ │ ├── MovieItemStats.tsx
│ │ ├── MovieList.tsx
│ │ └── MovieStats.tsx
│ ├── hooks/ <-- Application Logic (Use cases)
│ │ └── useMovies.ts
│ └── types/ <-- Domain (Interfaces)
│ └── MovieData.ts
└── App.tsx <-- The Composer

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
