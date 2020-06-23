// import React, { useEffect, useState, useRef } from "react";
// import { connect } from "react-redux";
// import {
//     Box,
//     Button,
//     Card,
//     CardContent,
//     CardMedia,
//     CardActions,
//     CardActionArea,
//     Grid,
//     Link,
//     Paper,
//     Typography,
// } from "@material-ui/core";
// import { Edit, LocationOn, Facebook } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";

// import Api from "../../../services/Api";
// import { isEmpty } from "../../../services/common";
// import Navbar from "../../../components/layouts/Navbar";
// import JoiningForm from "../../../components/Meeting/Forms/JoinMeeting";
// import CreateMeeting from "../../../components/Meeting/CreateMeeting";
// // import profileImg1 from "./images/austin-distel-7bMdiIqz_J4-unsplash.jpg";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: "7px 15px",
//         boxSizing: "border-box",
//     },
//     userLocation: {
//         background: "#f0f0f0",
//         padding: "7px 15px 5px",
//         boxSizing: "border-box",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },
//     userLocationName: {
//         display: "flex",
//         flexDirection: "row",
//     },
//     fieldTitle: {
//         padding: "12px 0",
//     },
//     cardRoot: {
//         display: "inline-flex",
//         borderRadius: "5px",
//     },
//     cardDetails: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     cardContent: {
//         flex: "1 0 auto",
//     },
//     cardCover: {
//         width: "75px",
//     },
// }));

// function Doctor(props) {
//     const classes = useStyles();
//     const [joinAMeeting, setJoinAMeeting] = useState(false)
//     const [meetingRequested, setMeetingRequested] = useState(false)
//     const [meetingApproved, setMeetingApproved] = useState(false)

//     function onClickApproveMeeting(e) {
//         e.preventDefault();
//         setMeetingApproved(true);
//     }

//     function onClickJoinMeeting() {
//         setJoinAMeeting(true);
//     }

//     // useEffect(() => {
//     //     console.log('red');
//     //     async function getMeetingRequest() {
//     //         const res = await Api().get("/meetingApproval/meetingRequestedRetreived");
//     //         console.log('check euqality', res.approved === 'true')
//     //         console.log('check euqality', res.approved)
//     //         if (res.approved === 'true') {
//     //             setMeetingRequested(true)
//     //             console.log('check euqality', res.approved === 'true')
//     //         }
//     //     }
//     //     if(props.user.meetingRequested){
//     //         getMeetingRequest();
//     //     }
//     // }, [props.user.meetingRequested])

//     console.log('DOctor', meetingRequested);
//     console.log('DOctor-2', props.user.meetingRequested);

//     if (joinAMeeting) {
//         return <CreateMeeting />
//     }
//     return (
//         <>
//             <Navbar pageTitle="Welcome Doc!!!" />

//             <Box className={classes.root}>
//                 <Grid container spacing={0}>
//                     <Grid item xs={12}>
//                         <Typography className={classes.fieldTitle} variant="h6">
//                             Hi Doc, please click below to Approve &amp; Join a Meeting
//                             <br/>
//                             { props.allData.meetingRequested ? 'One Meeting needs to be Approved' : 'There is no meeting to be approved!!!'}
//                         </Typography>

//                         <Button disabled={!props.allData.meetingRequested} onClick={onClickApproveMeeting}>
//                             Approve a Meeting
//                         </Button>
//                         { meetingApproved ? (
//                             <Button onClick={onClickJoinMeeting}>
//                                 Join a Meeting
//                             </Button>
//                         ) : ''}
//                     </Grid>
//                 </Grid>
//             </Box>
//         </>
//     );
// }

// const mapStateToProps = (state) => ({
//     user: state.UserReducer,
//   });
  
// export default connect(mapStateToProps, null)(Doctor);