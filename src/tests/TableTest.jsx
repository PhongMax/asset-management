import React from "react";
import OftadehLayout from "../components/OftadehLayout/OftadehLayout";
// import Campus from "../pages/CrudPages/Campus/Campus";
// import Organization from "../pages/CrudPages/Organization/Organization";
// import CalculationUnit from "../pages/CrudPages/CalculationUnit/CalculationUnit";
import Product from "../pages/CrudPages/Product/Product";
// import Category from "../pages/CrudPages/Category/Category";
// import Department from "../pages/CrudPages/Department/Department";
import TypePlace from "../pages/CrudPages/TypePlace/TypePlace";
import Liquidate from "../pages/CrudPages/Liquidate/Liquidate";
import Place from "../pages/CrudPages/Place/Place";

// import UserForm from "../pages/CrudPages/User/UserForm";
import User from "../pages/CrudPages/User/User";
import Inventory from "../pages/CrudPages/Inventory/Inventory";
// import Material from "../pages/CrudPages/Material/Material";

// import UserForm from "../pages/CrudPages/User/UserForm";
import User from "../pages/CrudPages/User/User";
import Material from "./../pages/CrudPages/Material/Material";
import AutoCompleteButton from "../pages/CrudPages/commons/AutoCompleteButton";

function TableTest(props) {
  return (
    <OftadehLayout>
      {/* <Campus />
      <Department />
       <Organization />
       <CalculationUnit />
       <Category /> */}
      {/* <Product /> */}
      {/* <UserForm /> */}
      {/* <User /> */}
      {/* <TypePlace /> */}
      {/* <Place /> */}
      {/* <Liquidate /> */}
      {/* <Inventory /> */}
      <AutoCompleteButton />
      <Material />
    </OftadehLayout>
  );
}

export default TableTest;
