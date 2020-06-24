import React, { useEffect, useState, useRef } from "react";
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
import { Edit, LocationOn, Facebook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Api from "../../../services/Api";
import { isEmpty } from "../../../services/common";
import Navbar from "../../../components/layouts/Navbar";
import JoiningForm from "../../../components/Meeting/Forms/JoinMeeting";
import StartMeeting from "../../../components/Meeting/StartMeeting";
// import profileImg1 from "./images/austin-distel-7bMdiIqz_J4-unsplash.jpg";

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

function Doctor(props) {
  const classes = useStyles();

  if (props.data.isMeetingJoined) {
    return <StartMeeting />;
  }
  return (
    <>
      <Navbar pageTitle="Welcome Doc!!!" />

      <Box className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} justify="center">
            <Typography
              className={classes.fieldTitle}
              variant="h6"
              align="center"
            >
              Hi Doc, please click below to Approve &amp; Join a Meeting
              <br />
              {props.data.isMeetingRequested
                ? "One Meeting needs to be Approved"
                : "There is no meeting to be approved!!!"}
            </Typography>

            <Button
              disabled={!props.data.isMeetingRequested}
              onClick={props.onClickApproveMeeting}
              variant="contained"
            >
              Approve a Meeting
            </Button>
            {props.data.isMeetingApproved ? (
              <Button onClick={props.onClickJoinMeeting}>Join a Meeting</Button>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

export default connect(mapStateToProps, null)(Doctor);
