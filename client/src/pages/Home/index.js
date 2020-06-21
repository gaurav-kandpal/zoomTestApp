import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    background:
      "linear-gradient(45deg, rgba(5, 91, 102, 1) 30%, rgba(35, 143, 121, 1) 90%)",
    textTransform: "uppercase",
  },
  textWhite: {
    color: "#FFFFFF",
  },
  launchBtn: {
    background: "#FFFFFF",
    margin: "0 auto",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography
              className={classes.textWhite}
              align="left"
              component="p"
              variant="h6"
            >
              Patient
            </Typography>

            <Typography
              className={classes.textWhite}
              align="left"
              component="h3"
              variant="h3"
            >
              Portal
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="row" justify="center">
          <Link to="login">
            <IconButton aria-label="Go to app" className={classes.launchBtn}>
              <ArrowForwardIos />
            </IconButton>
          </Link>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
