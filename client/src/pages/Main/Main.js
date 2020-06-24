import React from "react";
import { connect } from "react-redux";

import Api from "../../services/Api";
import Doctor from "../../components/Meeting/Doctor/Doctor";
import Patient from "../../components/Meeting/Patient/Patient";
import * as UserActions from "../../services/Store/Reducers/User";
<<<<<<< HEAD
import './Main.css';
=======
>>>>>>> a68b60ceb7c12a12ccdc0786fa22994cf08f9f44

class Main extends React.Component {
  state = {
    user: "",
    role: "",
    isMeetingJoined: false,
    isMeetingRequested: false,
    isMeetingApproved: false,
    submittedData: null,
  };

  retrieveMeetingRequest = async () => {
    const res = await Api().get("/meetingApproval/meetingRequestedRetreived");
    if (res.approved === "true") {
      this.setState({
        isMeetingRequested: true,
      });
    }
  };

  componentDidMount = async () => {
    const res = await Api().get("/user/details");
    this.setState({
      user: res,
<<<<<<< HEAD
      role: localStorage.getItem("role")
    })
    const flag = 'false';
=======
      role: localStorage.getItem("role"),
    });
    const flag = "false";
>>>>>>> a68b60ceb7c12a12ccdc0786fa22994cf08f9f44
    await Api().post("/meetingApproval/meetingRequested", { flag });
    await Api().post("/meetingApproval/meetingApproved", { flag });

    this.interval = setInterval(() => this.retrieveMeetingRequest(), 2000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onRequestVideoConsult = async () => {
    const flag = "true";
    await Api().post("/meetingApproval/meetingRequested", {
      flag,
    });
    this.props.onRequestAMeeting(true);
    this.setState({
      isMeetingRequested: true,
    });
  };

  onApproveMeeting = async () => {
    const res = await Api().post("/meeting/create");
    const flag = "true";
    this.setState({
      submittedData: res,
      isMeetingApproved: true,
    });
    await Api().post("/meetingApproval/meetingApproved", { flag });
  };

  onJoinMeeting = () => {
    this.setState({
      isMeetingJoined: true,
    });
  };

  render() {
    console.log("Main-Com", this.state);
    if (this.state.role === "doctor") {
      return (
        <>
          <Doctor
            data={this.state}
            onClickJoinMeeting={this.onJoinMeeting}
            onClickApproveMeeting={this.onApproveMeeting}
          />
        </>
      );
    }

    if (this.state.role === "patient") {
      return (
        <>
          <Patient
            data={this.state}
            onRequestVideo={this.onRequestVideoConsult}
          />
        </>
      );
    }
    return <div className="main_loader"> </div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

const mapDispatchToProps = {
  ...UserActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
