import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const DropDownMenu = ({ anchorEl, handleCloseMenu }) => {
  const classes = useStyles();

  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMenu}
      style={{ marginTop: "2rem" }}
    >
      <MenuItem>
        <Link
          to="/add-movie"
          onClick={handleCloseMenu}
          className={classes.link}
        >
          Add Film
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/my-list" onClick={handleCloseMenu} className={classes.link}>
          My List
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default DropDownMenu;
