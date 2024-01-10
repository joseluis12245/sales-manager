import { SalesManagerRoute } from "../types/modules";
import { Summary } from "./Summary/Summary";

export const Modules: SalesManagerRoute[] = [
    {
      name: "Summary",
      path: "/summary",
      component: Summary,
    },
    {
      name: "User",
      path: "/user",
      component: undefined,
    },
    {
      name: "Profile",
      path: "/profile",
      component: undefined,
    },
  ];