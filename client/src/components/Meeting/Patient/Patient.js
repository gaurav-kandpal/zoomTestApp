import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import * as UserActions from "../../../services/Store/Reducers/User";
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
import JoiningFormPatient from "../../../components/Meeting/Forms/JoinMeeting";
import CreateMeeting from "../../../components/Meeting/CreateMeeting";
import profileImg1 from "./images/austin-distel-7bMdiIqz_J4-unsplash.jpg";

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

function Patient(props) {
    const classes = useStyles();
    const patientName = 'Welcome ' + localStorage.getItem('patient');
    const [scheduleAMeeting, setScheduleAMeeting] = useState(false)
    const [meetingRequested, setMeetingRequested] = useState(false)
    const [loadJoinForm, setLoadJoinForm] = useState(false)

    // async function onRequestVideoConsult() {
    //     const flag = 'true';
    //     const response = await Api().post("/meetingApproval/meetingRequested", { flag });
    //     props.onRequestAMeeting(true);
    //     setLoadJoinForm(true);
    // }

    if (props.data.isMeetingRequested) {
        return <JoiningFormPatient isApproved={props.data.isMeetingApproved}/>
    }
    console.log('props-patient', props)
    return (
        <>
            <Navbar pageTitle={patientName} />

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
                                                    <Button onClick={props.onRequestVideo}>
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
    );
}

const mapStateToProps = (state) => ({
    user: state.UserReducer,
});

const mapDispatchToProps = {
    ...UserActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Patient);