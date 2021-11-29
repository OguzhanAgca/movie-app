import React from "react";
import { useDispatch } from "react-redux";
import { Paper, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import noImage from "../../images/noImage.png";
import { removeMovieFromList } from "../../actions/listActions";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      boxShadow: "0px 0px 23px 5px #000000",
    },
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  moviePoster: {
    width: "100%",
  },
  voteAverage: {
    fontWeight: "600",
  },
}));

const ListOfMovies = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { poster_path, title, vote_average, id } = movie;

  const removeMovieBtn = () => {
    dispatch(removeMovieFromList(id));
  };

  return (
    <>
      <Paper>
        <Card className={classes.card}>
          <img
            className={classes.moviePoster}
            src={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                poster_path || noImage
            }
            alt={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.voteAverage}
              variant="body1"
              title="Vote Average"
              color="primary"
            >
              {vote_average}
            </Typography>

            <span onClick={removeMovieBtn}>
              <DeleteIcon className={classes.deleteIcon} color="secondary" />
            </span>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default ListOfMovies;
