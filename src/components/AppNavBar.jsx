import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DropDownMenu from "./layouts/DropDownMenu";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  toolbar: {
    backgroundColor: "#6441a5",
  },
  logo: {
    color: "inherit",
    textDecoration: "none",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
}));

const AppNavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => setAnchorEl(e.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={9}>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h5">
                    <Link to="/" className={classes.logo}>
                      C.Mocha
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Link to="/movies" className={classes.link}>
                      My Movies
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <>
                    <Button
                      variant="text"
                      size="small"
                      onClick={handleOpenMenu}
                    >
                      <AccountCircleIcon />
                    </Button>
                    <DropDownMenu
                      anchorEl={anchorEl}
                      handleCloseMenu={handleCloseMenu}
                    />
                  </>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
};

export default AppNavBar;
