import React from "react";
import OftadehLayout from "../components/OftadehLayout/OftadehLayout";
// import Campus from "../pages/CrudPages/Campus/Campus";
// import Organization from "../pages/CrudPages/Organization/Organization";
// import CalculationUnit from "../pages/CrudPages/CalculationUnit/CalculationUnit";
import Product from "../pages/CrudPages/Product/Product";
// import Category from "../pages/CrudPages/Category/Category";
// import Department from "../pages/CrudPages/Department/Department";
// import TypePlace from "../pages/CrudPages/TypePlace/TypePlace";
function TableTest(props) {
  return (
    <OftadehLayout>
      {/* <Campus />
      <Department />
       <Organization />
       <CalculationUnit />
       <Category /> */}
      <Product />
      {/* <TypePlace /> */}
      <Product />
    </OftadehLayout>
  );
}

export default TableTest;
