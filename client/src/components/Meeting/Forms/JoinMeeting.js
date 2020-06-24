import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { Edit, LocationOn, AssignmentInd, Videocam } from "@material-ui/icons";
import { teal, yellow, lightGreen } from "@material-ui/core/colors";

// import StartMeeting from '../StartMeeting';
import ApproveMeeting from "../ApproveMeeting";
import StartMeeting from "../StartMeeting";
import Navbar from "../../layouts/Navbar";
import Api from "../../../services/Api";

// import "./JoinMeeting.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButton-contained": {
      boxShadow:
        "0px 6px 6px -3px rgba(240, 109, 200, 0.12), 0px 10px 14px 1px rgba(255, 86, 105, 0.24), 0px 4px 18px 3px rgba(255, 178, 21, 0.22)",
    },

    background: "#FFFFFF",
    display: "flex",
    height: "100vh",
    padding: "30px 15px",
    boxSizing: "border-box",
  },
  breadcrumbStyles: {
    padding: "7px 15px",
  },
  userLOcation: {
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
  teal: {
    color: teal[500],
    backgroundColor: teal[100],
    border: `1px solid ${yellow[200]}`,
  },
  yellow: {
    color: yellow[800],
    border: `1px solid ${yellow[200]}`,
  },
  lightGreen: {
    color: lightGreen[800],
    backgroundColor: lightGreen["A100"],
    border: `1px solid ${lightGreen[200]}`,
  },
  dividerStyle: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  statusStyle: {
    textAlign: "left",
  },
  chipStyle: {
    boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.125)",
  },
  cardRoot: {
    marginBottom: theme.spacing(5),
  },
  upcomingDetailsContainer: {
    display: "flex",
  },
  upcomingDetailsText: {
    display: "flex",
    flexGrow: "1",
    boxSizing: "border-box",
    paddingLeft: theme.spacing(1),
  },
  joinBtn: {
    background: "linear-gradient(45deg, #f96dc8 1%,#ff5669 50%,#ffb215 100%)",
    float: "right",
    cursor: "pointer",
  },
}));

const JoinMeetingForm = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       startMeeting: false,
  //     };
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  const [startMeeting, setStartMeeting] = useState(false);
  const [isJoinEnabled, setIsJoinEnabled] = useState(false);
  console.log("Check here", props.joinEnabled);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    setStartMeeting({ startMeeting: true });
  };

  useEffect(() => {
    async function getMeetingApproval() {
      const res = await Api().get("/meetingApproval/meetingApprovalRetreived");
      if (res.approved === "true") {
        setIsJoinEnabled(true);
      }
    }
    getMeetingApproval();
    const interval = setInterval(() => getMeetingApproval(), 5000);
    return () => {
      clearInterval(interval);
    };
  });

  console.log("props-patient", props);
  if (!startMeeting) {
    return (
      <>
        <Navbar pageTitle="Upcoming Appointments" />

        <Box>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper
                className={classes.userLOcation}
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
              <Card className={classes.cardRoot} elevation={10}>
                <CardContent>
                  <div className={classes.upcomingDetailsContainer}>
                    <Avatar className={classes.teal}>
                      <Videocam />
                    </Avatar>

                    <Box className={classes.upcomingDetailsText}>
                      <Grid container spacing={0}>
                        <Grid item xs={8}>
                          <Typography color="textPrimary" variant="h5">
                            Follow-up Visit
                          </Typography>
                          <Typography color="textSecondary" variant="subtitle1">
                            Dr. James Miller, MD
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography
                            align="right"
                            color="textSecondary"
                            variant="body2"
                          >
                            06/20/2020
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>

                  <Divider
                    className={classes.dividerStyle}
                    variant="fullWidth"
                  />

                  <Box>
                    <Grid container spacing={0}>
                      <Grid item xs={6} className={classes.statusStyle}>
                        {!isJoinEnabled ? (
                          <Chip
                          variant="outlined"
                          className={clsx(
                            classes.teal,
                            classes.chipStyle
                          )}
                          label="Waiting For Approval"
                        />
                        ) : (
                          <Chip
                          variant="outlined"
                          className={clsx(
                            classes.lightGreen,
                            classes.chipStyle
                          )}
                          label="Confirmed"
                        />
                        )}
                      </Grid>
                      <Grid item xs={6} alignitems="right">
                        <Button
                          className={classes.joinBtn}
                          variant="contained"
                          onClick={handleClick}
                          disabled={!isJoinEnabled}
                        >
                          Join
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
  return <StartMeeting />;
};
export default JoinMeetingForm;
