import React from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";
import { Videocam } from "@material-ui/icons";
import { teal } from "@material-ui/core/colors";
import { ZoomMtg } from "@zoomus/websdk";

import Api from "../../services/Api";
// import './StartMeeting.css';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

class StartMeeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: "",
      meeting_number: undefined,
      meeting_pwd: undefined,
    };
  }

  async start() {
    const signature = this.state.sign;
    const meetConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      meetingNumber: this.state.meeting_number,
      leaveUrl: "http://localhost:3000/app",
      userName: "Vishant",
      passWord: this.state.meeting_pwd, // if required
      role: 0, // 1 for host; 0 for attendee or webinar
      signature,
    };

    console.log("Meeting-COnfig", meetConfig);
    ZoomMtg.init({
      leaveUrl: meetConfig.leaveUrl,
      success() {
        console.log("Meeting-Number", meetConfig);
        ZoomMtg.join({
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          signature: signature,
          apiKey: meetConfig.apiKey,
          passWord: meetConfig.passWord,
          success: function () {
            console.log("joining meeting success");
          },
          error: function (res) {
            console.log("Error Joining", res);
          },
        });
      },
      error: function (res) {
        console.log("Error Init", res);
      },
    });
  }

  async generateSign() {
    // const { meeting_number } = this.props.formData;
    const response = await Api().post("meeting/genSign");
    return response;
  }

  async handleClick() {
    const sign = await this.generateSign();
    this.setState(
      {
        sign: sign.sign,
        meeting_number: sign.meetingId,
        meeting_pwd: sign.meetingPwd,
      },
      () => console.log("check the state", this.state)
    );
    this.start();
  }

  async componentDidMount() {
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.7.8/lib", "/av");
    ZoomMtg.prepareJssdk();
    ZoomMtg.preLoadWasm();

    setTimeout(() => this.handleClick(), 1000);

    const x = document.getElementById("zmmtg-root");
    x.style.display = "block";
  }

  render() {
    return (
      <>
        <Box>
          <Paper style={{ backgroundColor: "#F0F0F0", width: "100%" }}>
            <Grid container spaceing={0} justify="center">
              <Grid item xs={12} md={12}>
                <VideoPlayer />
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                style={{
                  backgroundColor: "#FFFFFF",
                  boxSizing: "border-box",
                  padding: "15px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Avatar
                    style={{
                      color: teal[500],
                      backgroundColor: teal[100],
                      border: `1px solid ${teal[200]}`,
                    }}
                  >
                    <Videocam />
                  </Avatar>

                  <Box
                    style={{
                      display: "flex",
                      flexGrow: 1,
                      boxSizing: "border-box",
                      paddingLeft: "15px",
                    }}
                  >
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
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </>
    );
  }
}

export default StartMeeting;
