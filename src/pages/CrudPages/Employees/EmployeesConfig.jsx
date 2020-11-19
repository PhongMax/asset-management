import Employees from "./Employees";

export const EmployeesConfig = {
  routes: [
    {
      path: "/ke/test",
      exact: true,
      component: Employees,
    },
  ],
};
