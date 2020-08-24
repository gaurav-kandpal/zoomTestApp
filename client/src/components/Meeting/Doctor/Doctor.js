import React, { useState, forwardRef } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slide,
  Toolbar,
  Typography
} from "@material-ui/core";
import { DirectionsWalk, Videocam, ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { teal, grey, yellow, red, green } from "@material-ui/core/colors";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

// import Navbar from "../../../components/layouts/Navbar";
import StartMeeting from "../../../components/Meeting/StartMeeting";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiCardContent-root": {
      paddingBottom: 0
    },

    "& .MuiCardActions-root": {
      justifyContent: "flex-end",

      "& .MuiButton-root": {
        color: teal[600]
      }
    }
  },

  grow: {
    flexGrow: 1
  },

  fontBold: {
    fontWeight: "bold"
  },

  fontColorLight: {
    color: "#FFFFFF"
  },

  fontColorDark: {
    color: grey[800]
  },

  profileHeader: {
    background: grey[900],
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    flexDirection: "column",
    alignItem: "center",
    textAlign: "center",

    "& figure": {
      width: 80,
      height: 80,
      borderRadius: "50%",
      overflow: "hidden",

      "& img": {
        width: "100%",
        maxWidth: "120px"
      }
    }
  },

  pageSubtitle: {
    padding: theme.spacing(2),
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${grey[400]}`
  },

  editAppointmentContentRoot: {
    height: "calc(100vh - 56px)",
    padding: `56px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
    position: "relative",

    "& .MuiFormControl-root": {
      width: "100%"
    },

    "& input[type=text]:focus": {
      outline: "2px solid transparent !important"
    },

    "& .MuiInput-underline:after": {
      borderBottom: `2px solid ${teal[400]}`
    },

    "& .MuiFormLabel-root.Mui-focused": {
      color: teal[400]
    }
  },

  editAppointmentFooter: {
    position: "absolute",
    width: "calc(100vw - 32px)",
    bottom: theme.spacing(1)
  },

  editAppointmentSaveButton: {
    backgroundColor: grey[800],
    color: theme.palette.getContrastText(grey[800])
  },

  profileHeaderContent: {
    alignItems: "center",
    flexDirection: "column",
    display: "flex"
  },

  profileBody: {
    backgroundColor: grey[200],
    height: "calc(100vh - 196px)",
    display: "block",
    overflow: "scroll",
    paddingBottom: theme.spacing(20)
  },

  cardAppointmentRoot: {
    margin: theme.spacing(1)
  },

  cardAppointmentHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: theme.spacing(2),

    "& .MuiAvatar-root": {
      backgroundColor: teal[400],
      marginRight: theme.spacing(1)
    }
  },

  cardAppointmentBodyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 12px",
    backgroundColor: "#F0F0F0",
    border: "1px solid #DDD"
  },

  appbarRoot: {
    backgroundColor: teal[400]
  },

  statusChipApproved: {
    backgroundColor: green[200],
    color: green[900],
    border: `1px solid ${green[400]}`
  },

  statusChipAccepted: {
    backgroundColor: yellow[200],
    color: yellow[900],
    border: `1px solid ${yellow[500]}`
  },

  statusChipRejected: {
    backgroundColor: red[200],
    color: red[900],
    border: `1px solid ${red[400]}`
  }
}));

function Doctor(props) {
  const classes = useStyles();

  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [radioValue, setRadioValue] = useState("approved");

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleRadioChange = event => {
    setRadioValue(event.target.value);
  };

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  if (props.data.isMeetingJoined) {
    return <StartMeeting />;
  }
  return (
    <>
      {/* <Navbar pageTitle="Welcome Doc!!!" /> */}

      <Box className={classes.root}>
        {/* <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className={classes.fieldTitle}
              variant="h6"
              align="center"
            >
              Please click Approve &amp; Join a Meeting
              <br />
              { props.data.isMeetingRequested
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
              <Button 
                onClick={props.onClickJoinMeeting}
                >
                Join a Meeting
              </Button>
            ) : (
              ""
            )}
          </Grid>
        </Grid> */}

        <Grid container spacing={0} className={classes.profileHeader}>
          <Grid item xs={12} className={classes.profileHeaderContent}>
            <figure>
              <img
                alt=""
                src="https://randomuser.me/api/portraits/thumb/men/44.jpg"
              />
            </figure>

            <Typography
              variant="h5"
              className={clsx(classes.fontBold, classes.fontColorLight)}
            >
              Dr. John Doe
            </Typography>
            <Typography variant="body1" className={classes.fontColorLight}>
              Physician, MD
            </Typography>
            <Typography variant="body2" className={classes.fontColorLight}>
              Verona Hospital, Los Angeles, CA
            </Typography>
          </Grid>
        </Grid>

        <AppBar position="static" className={classes.appbarRoot}>
          <Toolbar>
            <Typography variant="body1" className={classes.fontBold}>
              Appointments
            </Typography>
            <div className={classes.grow} />
            <Button className={classes.fontColorLight} size="small">
              All
            </Button>
            <Button className={classes.fontColorLight} size="small">
              Upcoming
            </Button>
            <Button className={classes.fontColorLight} size="small">
              Past
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={0} className={classes.profileBody}>
          <Typography
            variant="body1"
            className={clsx(classes.fontBold, classes.pageSubtitle)}
          >
            All Appointments
          </Typography>

          <Grid item xs={12}>
            <Card className={classes.cardAppointmentRoot}>
              <CardContent>
                <div className={classes.cardAppointmentHeader}>
                  <Avatar>
                    <Videocam />
                  </Avatar>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.fontBold}
                  >
                    Video Consultation
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Patient
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Mr. Murari Kumar
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    31/08/2020
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    05:00 PM
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Status
                  </Typography>
                  <Box>
                    <Chip
                      label="Approved"
                      className={classes.statusChipApproved}
                      size="small"
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpenEditDialog}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardAppointmentRoot}>
              <CardContent>
                <div className={classes.cardAppointmentHeader}>
                  <Avatar>
                    <DirectionsWalk />
                  </Avatar>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.fontBold}
                  >
                    In-person Consultation
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Patient
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Tiffany M. Rogers
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    31/08/2020
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    05:00 PM
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Status
                  </Typography>
                  <Box>
                    <Chip
                      className={classes.statusChipAccepted}
                      label="Accepted"
                      size="small"
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpenEditDialog}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardAppointmentRoot}>
              <CardContent>
                <div className={classes.cardAppointmentHeader}>
                  <Avatar>
                    <DirectionsWalk />
                  </Avatar>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.fontBold}
                  >
                    In-person Consultation
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Patient
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Jeffrey K. Knopp
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    31/08/2020
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    05:00 PM
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Status
                  </Typography>
                  <Box>
                    <Chip
                      className={classes.statusChipRejected}
                      label="Rejected"
                      size="small"
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpenEditDialog}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardAppointmentRoot}>
              <CardContent>
                <div className={classes.cardAppointmentHeader}>
                  <Avatar>
                    <DirectionsWalk />
                  </Avatar>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.fontBold}
                  >
                    In-person Consultation
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Patient
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Kaylee Kennedy
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    31/08/2020
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    05:00 PM
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Status
                  </Typography>
                  <Box>
                    <Chip
                      className={classes.statusChipApproved}
                      label="Approved"
                      size="small"
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpenEditDialog}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardAppointmentRoot}>
              <CardContent>
                <div className={classes.cardAppointmentHeader}>
                  <Avatar>
                    <DirectionsWalk />
                  </Avatar>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.fontBold}
                  >
                    In-person Consultation
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Patient
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Armando Morgan
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Date
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    31/08/2020
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    05:00 PM
                  </Typography>
                </div>
                <div className={classes.cardAppointmentBodyRow}>
                  <Typography
                    className={classes.fontBold}
                    variant="body2"
                    color="textPrimary"
                  >
                    Status
                  </Typography>
                  <Box>
                    <Chip
                      className={classes.statusChipApproved}
                      label="Approved"
                      size="small"
                    />
                  </Box>
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleClickOpenEditDialog}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Dialog
          fullScreen
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appbarRoot}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseEditDialog}
                aria-label="close"
              >
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Edit Appointment
              </Typography>
            </Toolbar>
          </AppBar>

          <Box className={classes.editAppointmentContentRoot}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Status</FormLabel>
                  <RadioGroup
                    aria-label="status"
                    name="status1"
                    value={radioValue}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="approved"
                      control={<Radio />}
                      label="Approved"
                    />
                    <FormControlLabel
                      value="accepted"
                      control={<Radio />}
                      label="Accepted"
                    />
                    <FormControlLabel
                      value="rejected"
                      control={<Radio />}
                      label="Rejected"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={0}
              className={classes.editAppointmentFooter}
            >
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleCloseEditDialog}
                  className={classes.editAppointmentSaveButton}
                >
                  Save
                </Button>
                <Button fullWidth onClick={handleCloseEditDialog}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}

const mapStateToProps = state => ({
  user: state.UserReducer
});

export default connect(mapStateToProps, null)(Doctor);
