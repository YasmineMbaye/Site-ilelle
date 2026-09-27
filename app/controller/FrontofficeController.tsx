import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/layouts/Frontofficelayout.tsx", [
    index("view/front-office/HomeView.tsx"),
    route("about", "view/front-office/AboutView.tsx")
    
  ]),
] satisfies RouteConfig;