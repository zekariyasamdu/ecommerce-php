import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardLayout } from "../componet/layout/dashboard-layout/DashboardLayout";
import Dashboard from "../componet/pages/dashboard/Dashboard";
import Login from "../componet/pages/login/Login";
import Signup from "../componet/pages/signup/Signup";
import { ProtectedRoute } from "./protected-route";

export default function Route() {
  const auth = null;

  const protectedRoute = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [{ index: true, element: <Dashboard /> }],
        },
      ],
    },
    { path: "*", element: <div>doesn't exit</div> },
  ];

  const onlyUnauthenticated = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  const route = createBrowserRouter([
    ...protectedRoute,
    ...(!auth ? onlyUnauthenticated : []),
  ]);

  return <RouterProvider router={route} />;
}
