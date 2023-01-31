import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./features/components/Footer";
import { NavBar } from "./features/components/NavBar";
import { AllItems } from "./features/items/AllItems";
import { SingleItem } from "./features/items/SingleItem";
import { Root } from "./features/components/Root";
import { SignIn } from "./features/components/SignIn";
import Bag from "./features/components/Bag";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: ":itemId",
    element: <SingleItem />,
  },
  {
    path: "men",
    element: <AllItems typeOfItem="men" />,
  },
  {
    path: "men/:itemId",
    element: <SingleItem />,
  },
  {
    path: "women",
    element: <AllItems typeOfItem="women" />,
  },
  {
    path: "women/:itemId",
    element: <SingleItem />,
  },
  {
    path: "jewelery",
    element: <AllItems typeOfItem="jewelery" />,
  },
  {
    path: "jewelery/:itemId",
    element: <SingleItem />,
  },
  {
    path: "sign_in",
    element: <SignIn />,
  },
  {
    path: "cart",
    element: <Bag />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
