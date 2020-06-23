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
import { Edit, LocationOn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Api from "../../services/Api";
import { isEmpty } from "../../services/common";
import Navbar from "../../components/layouts/Navbar";
import JoiningForm from "../../components/Meeting/Forms/JoinMeeting";
import CreateMeeting from "../../components/Meeting/CreateMeeting";
import Doctor from '../../components/Meeting/Doctor/Doctor';
import Patient from '../../components/Meeting/Patient/Patient';
import * as UserActions from "../../services/Store/Reducers/User";

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

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "7px 15px",
//     boxSizing: "border-box",
//   },
//   userLocation: {
//     background: "#f0f0f0",
//     padding: "7px 15px 5px",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   userLocationName: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   fieldTitle: {
//     padding: "12px 0",
//   },
//   cardRoot: {
//     display: "inline-flex",
//     borderRadius: "5px",
//   },
//   cardDetails: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardContent: {
//     flex: "1 0 auto",
//   },
//   cardCover: {
//     width: "75px",
//   },
// }));

// function Main(props) {
//   const [user, setUser] = useState({});
//   const [role, setRole] = useState("");
//   const [loadJoinForm, setLoadJoinForm] = useState(false);
//   const [scheduleAMeeting, setScheduleAMeeting] = useState(false);
//   const patientName = 'Welcome ' + localStorage.getItem('patient');
//   const [meetingRequested, setMeetingRequested] = useState(false);
//   const classes = useStyles();
//   const mounted = useRef();

//   useEffect(() => {
//     async function getUserInfo() {
//       const res = await Api().get("/user/details");
//       setUser(res);
//     }
//     getUserInfo();
//     setRole(localStorage.getItem("role"));

//   }, [props.user]);

//   useEffect(() => {
//     console.log('red');
//     async function getMeetingRequest() {
//       const res = await Api().get("/meetingApproval/meetingRequestedRetreived");
//       console.log('check euqality', res.approved === 'true')
//       if (res.approved === 'true') {
//         setMeetingRequested(true)
//         console.log('check euqality', res.approved === 'true')
//       }
//     }
//   })

// useEffect(() => {
//   if (!mounted.current) {
//     mounted.current = true;
//   } else {
//     async function getMeetingRequest() {
//       const res = await Api().get("/meetingApproval/meetingApprovalRetreived");
//       console.log('check euqality', res.approved === 'true')
//       if (res.approved === 'true') {
//         setMeetingRequested(true)
//         console.log('check euqality', res.approved === 'true')
//       }
//     }
//     if (loadJoinForm) {
//       console.log('hereeee');
//       getMeetingRequest();
//     }
//   }
// });

// if (role === 'doctor') {
//   return <Doctor meetReq={meetingRequested}/>
// }

// return <Patient/>



//     console.log('hereeee');
//     getMeetingRequest();

// }, [loadJoinForm]);

// async function createNewMeeting() {
//   setLoadJoinForm(false);
// }

// function onClickScheduleMeeting() {
//   setScheduleAMeeting(true);
// }

// async function onRequestVideoConsult() {
//   const flag = 'true';
//   const response = await Api().post("/meetingApproval/meetingApprovalSubmitted", { flag });
//   setLoadJoinForm(true);
//   // setMeetingRequested(response.flag)
// }

// console.log("main", props.user, scheduleAMeeting);
// if (loadJoinForm) {
//   return <JoiningForm joinEnabled={meetingRequested} />;
// }
// if (scheduleAMeeting) {
//   return <CreateMeeting />;
// }
// return (
//   <>
//     {role === "doctor" ? (
//       <>
//         <Navbar pageTitle="Welcome Doc!!!" />

//         <Box className={classes.root}>
//           <Grid container spacing={0}>
//             <Grid item xs={12}>
//               <Typography className={classes.fieldTitle} variant="h6">
//                 Hi Doc, please click below to Create a Meeting
//               </Typography>

//               <Button disabled onClick={onClickScheduleMeeting}>
//                 Schedule a Meeting
//               </Button>
//               {meetingRequested ? (
//                 <Button onClick={onClickScheduleMeeting}>
//                   Join a Meeting
//               </Button>
//               ) : ''}
//             </Grid>
//           </Grid>
//         </Box>
//       </>
//     ) : (
//         // <div>Hi {props.user.patient},</div>
//         <>
//           <Navbar pageTitle={patientName} />

//           <Box>
//             <Grid container spacing={0}>
//               <Grid item xs={12}>
//                 <Paper
//                   className={classes.userLocation}
//                   variant="elevation"
//                   elevation={1}
//                   square={true}
//                 >
//                   <span className={classes.userLocationName}>
//                     <LocationOn />
//                     <Typography variant="body1">
//                       Downer Grove, Illinois
//                   </Typography>
//                   </span>

//                   <Link>
//                     <Edit />
//                   </Link>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Box>

//           <Box className={classes.root}>
//             <Grid container spacing={0}>
//               <Grid item xs={12}>
//                 <Typography className={classes.fieldTitle} variant="h6">
//                   Select consultant from past visit
//               </Typography>

//                 <Grid container spacing={0}>
//                   <Grid item xs={12}>
//                     <Card className={classes.cardRoot} elevation={10}>
//                       <CardMedia
//                         component="img"
//                         className={classes.cardCover}
//                         image={profileImg1}
//                         title="Consultant"
//                       />

//                       <div className={classes.cardDetails}>
//                         <CardActionArea>
//                           <CardContent className={classes.cardContent}>
//                             <Typography variant="subtitle1" color="textPrimary">
//                               Dr. James Miller
//                           </Typography>

//                             <Typography variant="body1" color="textSecondary">
//                               Pediatrician
//                           </Typography>
//                           </CardContent>
//                         </CardActionArea>

//                         <CardActions>
//                           <Grid container spacing={0}>
//                             <Grid item xs={12}>
//                               <Button onClick={onRequestVideoConsult}>
//                                 Request Video Consultation
//                             </Button>

//                               <Button disabled>
//                                 Request In-Person Consultation
//                             </Button>
//                             </Grid>
//                           </Grid>
//                         </CardActions>
//                       </div>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Box>
//         </>
//       )}
//   </>
// );

class Main extends React.Component {
  state = {
    user: '',
    role: '',
    isMeetingJoined: false,
    isMeetingRequested: false,
    isMeetingApproved: false,
    submittedData: null
  }

  retrieveMeetingRequest = async () => {
    const res = await Api().get("/meetingApproval/meetingRequestedRetreived");
    if (res.approved === 'true') {
      this.setState({
        isMeetingRequested: true,
      })
    }
  }

  componentDidMount = async () => {
    const res = await Api().get("/user/details");
    this.setState({
      user: res,
      role: localStorage.getItem("role")
    })

    this.interval = setInterval(() => this.retrieveMeetingRequest(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRequestVideoConsult = async () => {
    const flag = 'true';
    const response = await Api().post("/meetingApproval/meetingRequested", { flag });
    this.props.onRequestAMeeting(true);
    this.setState({
      isMeetingRequested: true
    });
  }

  onApproveMeeting = async () => {
    const res = await Api().post('/meeting/create')
    const flag = 'true';
    this.setState({
        submittedData: res,
        isMeetingApproved: true
      });
    const response = await Api().post("/meetingApproval/meetingApprovalSubmitted", { flag });
  }

  onJoinMeeting = () => {
    this.setState({
      isMeetingJoined: true
    })
  }

  render() {
    console.log('Main-Com', this.state);
    if (this.state.role === 'doctor') {
      return <Doctor data={this.state} onClickJoinMeeting={this.onJoinMeeting} onClickApproveMeeting={this.onApproveMeeting} />
    }

    return <Patient data={this.state} onRequestVideo={this.onRequestVideoConsult} />
  }
}

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

const mapDispatchToProps = {
  ...UserActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
