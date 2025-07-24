import "./App.css";
import MainLayer from "./MainLayer/MainLayer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",

      element: <MainLayer />,
      children: [
        { index: true, element: <About /> },
        { path: "/about", element: <About /> },
        { path: "/Portfolio", element: <Portfolio /> },
        { path: "/Contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
