//** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .meeting-app": {
      width: "auto !important",
      height: "50vh !important",
    },

    "& .meeting-client": {
      position: "static !important",
      height: "50vh !important",
    },

    "& .meeting-client-inner": {
      position: "static !important",
    },

    "& #active-my-canvas + div": {
      height: "50vh !important",
    },

    "& #sv-active-speaker-view": {
      height: "50vh !important",
    },

    "& #wc-footer.footer": {
      backgroundImage: "none !important",
      justifyContent: "center !important",
    },

    "& #dialog-join.diaout-layer": {
      display: "none !important",
    },

    position: "static !important",
    height: "50vh !important",
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();

  return <div id="zmmtg-root" className={classes.root}></div>;
};

export default VideoPlayer;
