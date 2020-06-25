import React from "react";
import { Box, Grid } from "@material-ui/core";

import Api from "../../services/Api";
import StartMeeting from "./StartMeeting";
import Navbar from "../layouts/Navbar";

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedData: null,
      showJoinButton: false,
      isJoined: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    await Api()
      .post("/meeting/create")
      .then((res) =>
        this.setState({
          submittedData: res,
          showJoinButton: true,
        })
      );
  }

  render() {
    if (this.state.showJoinButton) {
      return <StartMeeting />;
    }

    return (
      <div className="app-container">
        <Navbar />
        <Box>
          <Grid container spaceing={0} justify="center">
            <Grid item xs={8} md={12}>
              Loading...
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default CreateMeeting;
