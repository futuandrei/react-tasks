import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/appRoutes.jsx";

function App() {
  // tells to render RouterProvider component
  // pass router object to it (comes from appRoutes)
  // RouterProvider initializes React Router system for your app.
  return <RouterProvider router={router} />;
}

export default App;
