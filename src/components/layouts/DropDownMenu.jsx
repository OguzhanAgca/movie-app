import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "inherit",
    textDecoration: "none",
    padding: "6px 16px",
    width: "100%",
  },
  menuItem: {
    padding: 0,
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
      <MenuItem className={classes.menuItem}>
        <Link
          to="/add-movie"
          onClick={handleCloseMenu}
          className={classes.link}
        >
          Add Movie
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <Link to="/my-list" onClick={handleCloseMenu} className={classes.link}>
          My List
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default DropDownMenu;
