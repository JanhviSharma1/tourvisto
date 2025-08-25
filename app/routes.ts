import { type RouteConfig, layout, route } from "@react-router/dev/routes";
import Dashboard from "./routes/admin/dashboard";

export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
  ]),
] satisfies RouteConfig;
