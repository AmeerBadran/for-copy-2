import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Contact from "../pages/Contact";
//import ProtectedRoute from "../components/HOC/withProtect";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../components/HOC/AdminLayout";
import Employee from "../pages/Employee";
//import PersistLogin from "../components/HOC/PersistLogin";
//import NotProtectdRoute from "../components/HOC/withNotProtect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // children: [
    //   {
    //     element: <PersistLogin />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
    ],
    //},
    //],
  },
  {
    path: "/admin",
    //element: <ProtectedRoute element={<Admin />} />,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "employees",
        element: <Employee />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: () => <h1>Page Not Found</h1>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
