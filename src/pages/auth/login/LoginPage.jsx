import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0d131d",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  mBottom: {
    marginBottom: ".5rem",
  },
  button: {
    marginTop: ".85rem",
  },
  loginCard: {
    width: "275px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem",
  },
}));

const LoginPage = (props) => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <Typography variant="h5" component="h1">
          Đăng nhập
        </Typography>
        {/* <Typography className={classes.brand} variant="h5" component="h1">
          Login
        </Typography> */}
        <Typography className={classes.mBottom} variant="body1">
          Hãy đăng nhập tài khoản của bạn
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            size="small"
            label="Usename"
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
          {/* <Button
            onClick={() => history.push("/pages/auth/forgot-password")}
            color="primary"
          >
            Forgot password?
          </Button> */}
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Đăng nhập
            </Button>
            {/* <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/pages/auth/register")}
            >
              Register Now!
            </Button> */}
          </div>
        </form>
        <Typography variant="caption">&copy; Team K&P | QLTSHV</Typography>
      </div>
    </div>
  );
};

export default LoginPage;
