import Department from "./Department";

export const EmployeesConfig = {
  routes: [
    {
      path: "/department",
      exact: true,
      component: Department,
    },
  ],
};
