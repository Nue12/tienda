import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./features/components/Footer";
import { Hero } from "./features/components/Hero";
import { LinkTo } from "./features/components/linkTo";
import { NavBar } from "./features/components/NavBar";
import { SignIn } from "./features/components/SignIn";
import { AllItems } from "./features/items/AllItems";
import { AlsoWant } from "./features/items/AlsoWant";
import { SingleItem } from "./features/items/SingleItem";
import { Root } from "./features/components/Root";
import { Test } from "./features/items/test";
import { Test2 } from "./features/items/test2";
import WomenClothing from "./features/components/WomenClothing";
import Electronic from "./features/components/Electronic";
import Jewelery from "./features/components/Jewelery";
import SearchItems from "./features/components/SearchItems";
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
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />;
      <Footer />
    </>
  );
}

export default App;
