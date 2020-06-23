import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { Edit, LocationOn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Api from "../../services/Api";
// import { isEmpty } from "../../services/common";
import Navbar from "../../components/layouts/Navbar";
import JoiningForm from "../../components/Meeting/Forms/JoinMeeting";
import CreateMeeting from "../../components/Meeting/CreateMeeting";
import profileImg1 from "./images/austin-distel-7bMdiIqz_J4-unsplash.jpg";

// import { Button, Card } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Main.css";

// Custom Hook to get previous props and state
// function usePrevious(value) {
//     const ref = useRef();

//     useEffect(() => {
//         ref.current = value;
//     }, [value]);

//     return ref.current;
// }

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "7px 15px",
    boxSizing: "border-box",
  },
  userLocation: {
    background: "#f0f0f0",
    padding: "7px 15px 5px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userLocationName: {
    display: "flex",
    flexDirection: "row",
  },
  fieldTitle: {
    padding: "12px 0",
  },
  cardRoot: {
    display: "inline-flex",
    borderRadius: "5px",
  },
  cardDetails: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flex: "1 0 auto",
  },
  cardCover: {
    width: "75px",
  },
}));

function Main(props) {
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const [loadJoinForm, setLoadJoinForm] = useState(false);
  const [scheduleAMeeting, setScheduleAMeeting] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    async function getUserInfo() {
      const res = await Api().get("/user/details");
      setUser(res);
    }
    getUserInfo();
    setRole(localStorage.getItem("role"));
  }, [props.user]);

  // async function createNewMeeting() {
  //   setLoadJoinForm(false);
  // }

  function onClickScheduleMeeting() {
    setScheduleAMeeting(true);
  }

  function onRequestVideoConsult() {
    setLoadJoinForm(true);
  }

  console.log("main", props.user, scheduleAMeeting);
  if (loadJoinForm) {
    return <JoiningForm />;
  }
  if (scheduleAMeeting) {
    return <CreateMeeting />;
  }

  return (
    <>
      {role === "doctor" ? (
        <>
          <Navbar pageTitle="Approve Appointment" />

          <Box className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography className={classes.fieldTitle} variant="h6">
                  Hi Doc, please click below to Create a Meeting
                </Typography>

                <Button onClick={onClickScheduleMeeting}>
                  Schedule a Meeting
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        // <div>Hi {props.user.patient},</div>
        <>
          <Navbar pageTitle="Request Appointment" />

          <Box>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper
                  className={classes.userLocation}
                  variant="elevation"
                  elevation={1}
                  square={true}
                >
                  <span className={classes.userLocationName}>
                    <LocationOn />
                    <Typography variant="body1">
                      Downer Grove, Illinois
                    </Typography>
                  </span>

                  <Link>
                    <Edit />
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography className={classes.fieldTitle} variant="h6">
                  Select consultant from past visit
                </Typography>

                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Card className={classes.cardRoot} elevation={10}>
                      <CardMedia
                        component="img"
                        className={classes.cardCover}
                        image={profileImg1}
                        title="Consultant"
                      />

                      <div className={classes.cardDetails}>
                        <CardActionArea>
                          <CardContent className={classes.cardContent}>
                            <Typography variant="subtitle1" color="textPrimary">
                              Dr. James Miller
                            </Typography>

                            <Typography variant="body1" color="textSecondary">
                              Pediatrician
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                        <CardActions>
                          <Grid container spacing={0}>
                            <Grid item xs={12}>
                              <Button onClick={onRequestVideoConsult}>
                                Request Video Consultation
                              </Button>

                              <Button disabled>
                                Request In-Person Consultation
                              </Button>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

export default connect(mapStateToProps, null)(Main);
