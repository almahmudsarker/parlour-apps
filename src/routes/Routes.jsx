import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import ErrorPage from "../error-page";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import Review from "../pages/dashboard/Review";
import MyBooking from "../pages/dashboard/MyBooking";
import Book from "../pages/dashboard/Book";
import Order from "../pages/Admin/Order";
import AddService from "../pages/Admin/AddService";
import MakeAdmin from "../pages/Admin/MakeAdmin";
import ManageService from "../pages/Admin/ManageService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import MyCart from "../pages/dashboard/MyCart";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      {
        path: "/dashboard/my-cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/my-booking",
        element: <MyBooking />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Book />,
      },
      {
        path: "/dashboard/order-list",
        element: <Order />,
      },
      {
        path: "/dashboard/add-service",
        element: <AddService />,
      },
      {
        path: "/dashboard/make-admin",
        element: <MakeAdmin />,
      },
      {
        path: "/dashboard/manage-service",
        element: <ManageService />,
      },
    ],
  },
]);
