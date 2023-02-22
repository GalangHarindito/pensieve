import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard"
import DetailDevice from "../pages/dashboard/detail";

export const publicRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "dashboard/detail",
    component: DetailDevice,
  },
];
