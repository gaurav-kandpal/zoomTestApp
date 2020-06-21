import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuOutlined, TimeToLeaveSharp } from "@material-ui/icons";

// import MainOffsetMenu from "../MainOffsetMenu";
// import VerticalMoreMenu from "../VerticalMoreMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bgDarkblue: {
    background: "#055B66",
  },
  menuIcon: {
    fill: "#FFF",
    fontSize: 32,
  },
  logoText: {
    textTransform: "uppercase",
    fontSize: "0.825rem",
  },
}));

const Navbar = (props) => {
  // define props via destructuring
  const { title } = props;

  const classes = useStyles();

  /**************************************
   * Functionality for main offset menu *
   **************************************/
  // Main offset menu toggle state
  const [offsetMenuPos, setOffsetMenuPos] = useState({ left: false });

  // Event handler for toggling main offset menu
  const toggleDrawer = (anchor, open) => (event) => {
    setOffsetMenuPos({ ...offsetMenuPos, [anchor]: open });
  };

  return (
    <Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.bgDarkblue}>
          <Toolbar>
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuOutlined className={classes.menuIcon} />
            </IconButton>

            <Typography variant="h6" className={classes.logoText}>
              {title}
            </Typography>

            <div className={classes.grow} />

            {/* <VerticalMoreMenu /> */}
          </Toolbar>
        </AppBar>

        {/* <Drawer open={offsetMenuPos.left} onClick={toggleDrawer("left", false)}>
          {MainOffsetMenu("left")}
        </Drawer> */}
      </Box>
    </Fragment>
  );
};

export default Navbar;
