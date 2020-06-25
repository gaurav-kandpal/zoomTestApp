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

    "& #sv-active-speaker-view .active-main": {
      height: "50vh !important",
      width: "auto !important",
    },

    "& #sv-active-speaker-view .active-main span.hidden-cancel-spotlight": {
      display: "none !important",
    },

    "& #wc-footer.footer": {
      // backgroundImage: "none !important",
      justifyContent: "center !important",
    },

    "& #wc-footer > #wc-footer-left + div button:nth-child(2)": {
      display: "none !important",
    },

    "& #wc-footer > #wc-footer-left + div .more-button": {
      display: "none !important",
    },

    "& #dialog-join.diaout-layer": {
      display: "none !important",
    },

    "& canvas#sv-active-video": {
      height: "50vh !important",
      width: "100% !important",
    },

    "& canvas#active-my-canvas": {
      height: "50vh !important",
      width: "100px !important",
      position: "absolute !important",
      top: "0 !important",
      left: "0 !important",
    },

    "& #wc-loading": {
      width: "100% !important",
      height: "100% !important",
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
