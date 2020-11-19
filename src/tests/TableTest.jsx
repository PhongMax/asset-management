import React from "react";
import OftadehLayout from "../components/OftadehLayout/OftadehLayout";
import { Grid, makeStyles } from "@material-ui/core";
import OftadehBreadcrumbs from "../components/OftadehBreadcrumbs/OftadehBreadcrumbs";
import Employees from "../pages/CrudPages/Employees/Employees";
const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
  },
}));

function TableTest(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <Employees history={history} />
      <Grid container spacing={2}></Grid>
    </OftadehLayout>
  );
}

export default TableTest;
