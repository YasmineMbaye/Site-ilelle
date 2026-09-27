/*import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;*/
import { type RouteConfig } from "@react-router/dev/routes";
import FrontofficeController from "./controller/FrontofficeController";

export default[ ...FrontofficeController] satisfies RouteConfig;
