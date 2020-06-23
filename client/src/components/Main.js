import React from "react";
import "./Main.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div className="main-content"></div>;
  }
}
