import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";

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
    width: "100%",
  },
}));

const Navbar = (props) => {
  const { pageTitle } = props;

  const classes = useStyles();

  /**************************************
   * Functionality for main offset menu *
   **************************************/
  // Main offset menu toggle state
  // const [ offsetMenuPos, setOffsetMenuPos ] = useState({ left: false });

  // Event handler for toggling main offset menu
  // const toggleDrawer = (anchor, open) => (event) => {
  //     setOffsetMenuPos({ ...offsetMenuPos, [anchor]: open });
  // };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.bgDarkblue}>
          <Toolbar>
            {/* <IconButton onClick={toggleDrawer("left", true)}>
              <MenuOutlined className={classes.menuIcon} />
            </IconButton> */}

            <Typography
              variant="h6"
              align="center"
              className={classes.logoText}
            >
              {pageTitle}
            </Typography>

            <div className={classes.grow} />

            {/* <VerticalMoreMenu /> */}
          </Toolbar>
        </AppBar>

        {/* <Drawer
                    open={ offsetMenuPos.left }
                    onClick={ toggleDrawer('left', false) }
                >
                    { MainOffsetMenu('left') }
                </Drawer> */}
      </Box>
    </>
  );
};

export default Navbar;
