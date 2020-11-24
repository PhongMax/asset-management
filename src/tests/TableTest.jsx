import React from "react";
import OftadehLayout from "../components/OftadehLayout/OftadehLayout";
// import Campus from "../pages/CrudPages/Campus/Campus";
// import Organization from "../pages/CrudPages/Organization/Organization";
// import CalculationUnit from "../pages/CrudPages/CalculationUnit/CalculationUnit";
import Product from "../pages/CrudPages/Product/Product";
// import Category from "../pages/CrudPages/Category/Category";
// import Department from "../pages/CrudPages/Department/Department";
// import TypePlace from "../pages/CrudPages/TypePlace/TypePlace";

import UserForm from "../pages/CrudPages/User/UserForm";
function TableTest(props) {
  return (
    <OftadehLayout>
      {/* <Campus />
      <Department />
       <Organization />
       <CalculationUnit />
       <Category /> */}
      {/* <Product /> */}
      <UserForm />
      {/* <TypePlace /> */}
    </OftadehLayout>
  );
}

export default TableTest;
