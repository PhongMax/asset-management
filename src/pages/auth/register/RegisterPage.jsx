import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#0d131d",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  mBottom: {
    marginBottom: ".5rem"
  },
  button: {
    marginTop: ".85rem"
  },
  loginCard: {
    width: "275px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem"
  }
}));

const RegisterPage = props => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <Typography variant="h5" component="h1">
          Register
        </Typography>
        {/* <Typography className={classes.brand} variant="h5" component="h1">
          Login
        </Typography> */}
        <Typography className={classes.mBottom} variant="body1">
          Create your account
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            size="small"
            label="Username"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            size="small"
            label="Email"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            size="small"
            label="Repeat password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/pages/auth/login")}
            >
              Sign in
            </Button>
          </div>
        </form>
        <Typography variant="caption">&copy; Oftadeh | React Admin</Typography>
      </div>
      {/* <Typography variant="h3" gutterBottom>
        Oops! <span className={classes.statusCode}>404</span>
      </Typography>
      <Typography variant="body1">
        The page you are looking for was not found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button> */}
    </div>
  );
};

export default RegisterPage;
