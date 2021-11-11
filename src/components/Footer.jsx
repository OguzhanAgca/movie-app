import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "20px",
  },
  anchors: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.footer} container justifyContent="center">
      <Grid item xs={12} md={9}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#262626" }} variant="regular">
            <Grid container justifyContent="space-around" alignItems="center">
              <Typography variant="body2">
                &copy; {new Date().getFullYear()} CoderMocha
              </Typography>
              <Typography variant="h6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.anchors}
                  href="https://www.facebook.com/oguzhan.agca1"
                >
                  <FacebookIcon
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                    style={{ marginTop: "10px" }}
                  />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.anchors}
                  href="https://www.instagram.com/ogzhn.___/"
                >
                  <InstagramIcon className="instagram" />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.anchors}
                  href="https://twitter.com/CoderMocha"
                >
                  <TwitterIcon className="twitter" />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.anchors}
                  href="https://www.linkedin.com/in/o%C4%9Fuzhan-a%C4%9Fca-79275a207/"
                >
                  <LinkedInIcon className="linkedin" />
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={classes.anchors}
                  href="https://github.com/OguzhanAgca"
                >
                  <GitHubIcon className="github" />
                </a>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Footer;
