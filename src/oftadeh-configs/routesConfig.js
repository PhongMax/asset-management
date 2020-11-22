import React from "react";
import { Redirect } from "react-router-dom";

import { DashboardPageConfig } from "../pages/dashboard/DashboardPageConfig";
import { AddPostPageConfig } from "../pages/posts/add-post/AddPostPageConfig";
import { AllPostsPageConfig } from "../pages/posts/all-posts/AllPostsPageConfig";
import { LoginPageConfig } from "../pages/auth/login/LoginPageConfig";
import { RegisterPageConfig } from "../pages/auth/register/RegisterPageConfig";
import { Error404PageConfig } from "../pages/errors/404/Error404PageConfig";
import { Error500PageConfig } from "../pages/errors/500/Error500PageConfig";

import { EmployeesConfig } from "../pages/CrudPages/Employees/EmployeesConfig";
import TableTest from "../tests/TableTest";

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...AllPostsPageConfig.routes,
  ...AddPostPageConfig.routes,
  ...LoginPageConfig.routes,
  ...RegisterPageConfig.routes,
  ...Error404PageConfig.routes,
  ...Error500PageConfig.routes,
  ...EmployeesConfig.routes,
];

const routes = [
  ...routeConfigs,
  {
    path: "/test",
    exact: true,
    component: TableTest,
  },
  {
    component: () => <Redirect to="/pages/errors/error-404" />,
  },
];

export default routes;
