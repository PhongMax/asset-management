import React, { useState } from "react";
import authService from "../../../services/authService";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

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
    width: "350px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem",
  },
}));

const LoginPage = (props) => {
  const [AuthObj, setAuthObj] = useState({ username: "", password: "" });

  const classes = useStyles();
  const { history } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    const data = { ...AuthObj };
    data[input.name] = input.value;

    setAuthObj(data);
  };

  const doSubmit = async () => {
    try {
      await authService.login(AuthObj);

      // const { state } = this.props.location;
      // window.location = state ? state.from.pathname : "/";

      console.log(props, "props là gì");
    history.push("/");
      console.log("login thành công");
    } catch (ex) {
      console.log(ex, " lỗi loging là gì");
      toast.error("Đăng nhập thất bại ");
    }
  };

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

        <form onSubmit={handleSubmit}>
          {/* <form> */}
          <TextField
            size="small"
            label="Tên tài khoản"
            name="username"
            variant="outlined"
            margin="dense"
            fullWidth
            value={AuthObj.username}
            onChange={handleChange}
          />
          <TextField
            size="small"
            label="Mật khẩu"
            name="password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
            value={AuthObj.password}
            onChange={handleChange}
          />
          {/* <Button
            onClick={() => history.push("/pages/auth/forgot-password")}
            color="primary"
          >
            Forgot password?
          </Button> */}
          <div className={classes.mBottom}>
            <Button
                type="submit" text="Submit"
       
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              // onClick={() => history.push("/")}
              // onClick={handleSubmit}
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
