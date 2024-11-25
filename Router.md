# Router

- main.jsx (main entry point)
- appRoutes.jsx (routing configuration / / defines routing structure)
- Root.jsx (Root layout)
- App.jsx (Main application)
  Also:
- Router Object (in App.jsx or separate appRoutes.jsx)
- RouterProvider (in App.jsx): React component provided by React Router. Connects router (with router configuration) to your Reac app. Enables navigation and route rendering.

## Main Entry Point (main.jsx):

- This file initializes your React app using `createRoot`.
- It renders the App component, which contains the `RouterProvider` for managing routes.

### How does following works?

```js
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Routing Configuration (appRoutes.jsx):

- This file defines the routing structure using createBrowserRouter from React Router.
- Hierarchy:
  - The root path '/' maps to the Root component.
  - Inside Root, Outlet serves as a placeholder for nested child routes.
  - Child routes include:
  - '/' (home page) → List component.
  - '/about' → About component.
  - An errorElement (ErrorPage) handles navigation errors, such as visiting a non-existent route.

```js
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <List /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
```

## Main Application (App.jsx):

- Contains the RouterProvider that links the router configuration from appRoutes.jsx.

```js
import { RouterProvider } from "react-router-dom"; // Part of react Router Library
import "./App.css";
import { router } from "./routes/appRoutes.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

`<RouterProvider router={router}/>`
This line tells React to render the RouterProvider component and pass the router object (your routing configuration) to it. The RouterProvider then:
