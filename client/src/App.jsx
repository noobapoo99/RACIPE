import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout/Layout";
import HomePage from "./routes/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
