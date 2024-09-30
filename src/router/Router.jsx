import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../components/page/errorpage/Errorpage";
import Home from "./../components/page/home/Home";
import ShoppingCard from "./../components/page/shoppingCard/ShoppingCard";
import FoodDetails from "../components/food-details/FoodDetails";
import Login from "../components/page/login/Login";
import Register from "../components/page/register/Register";
import PrivetRoute from "./PrivetRoute";

import ViewProfile from "../components/page/view-profile/ViewProfile";
import AllFoods from "../components/page/all-foods/AllFoods";
import Checkout from "../components/page/Checkout/Checkout";
import Gallery from "../components/page/gallery/Gallery";
import SingleImage from "../components/page/singleImahe/SingleImage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-foods",
        element: (
          <PrivetRoute>
            <AllFoods />
          </PrivetRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivetRoute>
            <Gallery />
          </PrivetRoute>
        ),
      },
      {
        path: "/single-image/:id",
        element: (
          <PrivetRoute>
            <SingleImage />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://savor-every-bite-site.vercel.app/foods/${params.id}`),
      },
      {
        path: "/shopping-card",
        element: (
          <PrivetRoute>
            {" "}
            <ShoppingCard />
          </PrivetRoute>
        ),
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivetRoute>
            <FoodDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://savor-every-bite-site.vercel.app/foods/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `profile`,
        element: (
          <PrivetRoute>
            <ViewProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
