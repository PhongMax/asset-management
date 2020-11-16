import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

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

const RegisterPage = (props) => {
  const classes = useStyles();
  const { history } = props;

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <Typography variant="h5" component="h1">
          Đăng ký
        </Typography>
        {/* <Typography className={classes.brand} variant="h5" component="h1">
          Login
        </Typography> */}
        <Typography className={classes.mBottom} variant="body1">
          Nhanh chóng và dễ dàng
        </Typography>

        <Divider />
        <form noValidate autoComplete="off">
          <TextField
            size="small"
            label="Họ tên"
            variant="outlined"
            margin="dense"
            fullWidth
          />

          <TextField
            size="small"
            label="Số điện thoại"
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
          <Divider />

          <TextField
            size="small"
            label="Tên đăng nhập"
            variant="outlined"
            margin="dense"
            fullWidth
          />

          <TextField
            size="small"
            label="Mật khẩu"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            size="small"
            label="Nhập lại mật khẩu"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <Divider />
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Đăng ký
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Trang chủ
            </Button>
          </div>
        </form>
        <Typography variant="caption">&copy; Team K&P | QLTSHV</Typography>
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
