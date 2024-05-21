import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Blog from "./Components/blog/Blog";
import ContactUs from "./Components/contactUsPage/ContactUs";
import AboutUs from "./Components/aboutUsPage/AboutUs";
import AllPages from "./Components/AllPages/AllPages";
import Checkout from "./Components/Checkout/Checkout";
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy/PrivacyAndPolicy";
import Blogone from "./Components/blog/Blogone";
import Blogtwo from "./Components/blog/Blogtwo";
import Blogfour from "./Components/blog/Blogfour";
import Blogthree from "./Components/blog/Blogthree";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AllPages />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/privacy&policy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/blog/blogone",
        element: <Blogone />,
      },
      {
        path: "/blog/blogtwo",
        element: <Blogtwo />,
      },
      {
        path: "/blog/blogthree",
        element: <Blogthree />,
      },
      {
        path: "/blog/blogfour",
        element: <Blogfour />,
      },

    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
