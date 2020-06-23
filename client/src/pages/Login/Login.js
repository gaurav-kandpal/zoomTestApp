import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as AuthActions from "../../services/Store/Reducers/Auth";
import * as UserActions from "../../services/Store/Reducers/User";

import Api from "../../services/Api";

// import './Login.css';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
    },

    "& input[type=text]:focus": {
      outline: "0 !important",
    },

    "& .MuiFormControl-root": {
      width: "100%",
    },

    "& .MuiButton-contained": {
      boxShadow:
        "0px 6px 6px -3px rgba(240, 109, 200, 0.12), 0px 10px 14px 1px rgba(255, 86, 105, 0.24), 0px 4px 18px 3px rgba(255, 178, 21, 0.22)",
    },

    height: "100vh",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  accessForm: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  signInBtn: {
    background: "linear-gradient(45deg, #f96dc8 1%,#ff5669 50%,#ffb215 100%)",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  inputProfileSelect: {
    marginTop: theme.spacing(3),
  },
}));

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const [role, setRole] = useState('');
  const [patientName, setPatientName] = useState("");

  const classes = useStyles();

  function ValidateEmail() {
    setError("Required");
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }
  function onChangePatient(e) {
    setPatientName(e.target.value);
  }

  function loadUserData(data) {
    props.loadUserData(data);
  }

  async function onLoginAsDoctor(e) {
    e.preventDefault();
    // ValidateEmail();

    props.onLoginRequest(true);

    const response = await Api().post("user/app", { email });

    if (response.account_id) {
      loadUserData(response);
      props.onLoginSuccess(true);
      props.redirectReferrer(true);
      localStorage.setItem("user", response.email);
      localStorage.setItem("id", response.account_id);
      localStorage.setItem("role", "doctor");
      localStorage.removeItem("patient");
    } else {
      console.log("User Does not Exist!!!");
    }
  }

  async function onLoginAsPatient(e) {
    e.preventDefault();
    props.onLoginRequest(true);
    // const email = "vishant777@gmail.com";
    const email = "sanjeev.dhawan@rsystems.com";

    const response = await Api().post("user/app", { email });

    if (response.account_id) {
      loadUserData(response);
      props.onPatientLogin(patientName);
      props.onLoginSuccess(true);
      props.redirectReferrer(true);
      localStorage.setItem("user", response.email);
      localStorage.setItem("id", response.account_id);
      localStorage.setItem("role", "patient");
      localStorage.setItem("patient", patientName);
    } else {
      console.log("User Does not Exist!!!");
    }
  }

  if (props.authState.redirectToReferrer) {
    return <Redirect to="/app" />;
  }

  function onDropDownChange(e) {
    props.onRoleChange(e.target.value);
  }

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" color="textPrimary" align="center">
              Welcome to Patient Portal
            </Typography>

            <Paper className={classes.accessForm} elevation={10}>
              <FormControl>
                <InputLabel id="user_profile_select_label">
                  Login as:
                </InputLabel>

                <Select
                  labelId="user_profile_select_label"
                  id="role"
                  name="role"
                  onChange={onDropDownChange}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="patient">Patient</MenuItem>
                </Select>
              </FormControl>
              {props.userState.role === "doctor" ? (
                <form className={classes.inputProfileSelect}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={handleChange}
                    fullWidth
                  />

                  <Button
                    className={classes.signInBtn}
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={onLoginAsDoctor}
                  >
                    Continue
                  </Button>
                </form>
              ) : (
                ""
              )}

              {props.userState.role === "patient" ? (
                <form className={classes.inputProfileSelect}>
                  <TextField
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={patientName}
                    onChange={onChangePatient}
                    fullWidth
                  />

                  <Button
                    className={classes.signInBtn}
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={onLoginAsPatient}
                  >
                    Continue
                  </Button>
                </form>
              ) : (
                ""
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  authState: state.AuthReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = {
  ...AuthActions,
  ...UserActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
