import React from "react";
import { removeMovie } from "../../actions/movieActions";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  favoriteIcon: {
    marginRight: "1.5rem",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const RemoveMovie = ({ history, movieId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const removeMovieBtn = () => {
    dispatch(removeMovie(movieId));
    history.goBack();
  };

  return (
    <>
      <FavoriteIcon
        className={classes.favoriteIcon}
        onClick={removeMovieBtn}
        color="secondary"
      />
    </>
  );
};

export default RemoveMovie;
