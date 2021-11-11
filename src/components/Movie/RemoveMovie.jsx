import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../actions/movieActions";
import alertify from "alertifyjs";

const RemoveMovie = ({ history, movieId }) => {
  const dispatch = useDispatch();

  const removeMovieBtn = () => {
    dispatch(removeMovie(movieId));
    alertify.notify("Movie deleted successfully.", "success", 5);
    history.push("/movies");
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        style={{ marginRight: "1.5rem" }}
        onClick={removeMovieBtn}
      >
        Delete
      </Button>
    </>
  );
};

export default RemoveMovie;
