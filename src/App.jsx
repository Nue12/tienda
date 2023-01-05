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
import { MenClothing } from "./features/components/MenClothing";
import { Test } from "./features/items/test";
import { Test2 } from "./features/items/test2";
import WomenClothing from "./features/components/WomenClothing";
import Electronic from "./features/components/Electronic";
import Jewelery from "./features/components/Jewelery";
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
    path: "men",
    element: <MenClothing />,
  },
  {
    path: "women",
    element: <WomenClothing />,
  },
  {
    path: "electronics",
    element: <Electronic />,
  },
  {
    path: "jewelery",
    element: <Jewelery />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
