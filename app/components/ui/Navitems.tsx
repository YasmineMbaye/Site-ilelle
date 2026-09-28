import { NavLink } from "react-router";
import type { NavigationProps } from "~/models/type";

export default function Navitems({
  pageProps, border,borderbold, color
}: {
  pageProps: NavigationProps, border:string, borderbold:string; color?:string
}) {
  return (
    <NavLink
      to={pageProps.url}
      className={  ({ isActive }) =>
        `   ${
          isActive && `  border-t-0 border-l-0 border-r-0 ${border || ""} ${borderbold || ""} ${color || ""}`
        }`
      }
    >
      {pageProps.name}
    </NavLink>
  );
}
