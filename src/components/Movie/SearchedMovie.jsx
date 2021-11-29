import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie, getMovies } from "../../actions/movieActions";
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: "140px",
    width: "140px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      boxShadow: "0px 0px 10px 5px #000000",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
  },
  checkIcon: {
    marginLeft: theme.spacing(2),
  },
}));

const SearchedMovie = ({ movie }) => {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const likedMovies = useSelector((state) => state.movies.movies);
  const { poster_path, id, title, release_date } = movie;

  const onSubmit = (data) => {
    dispatch(addMovie(data.movieId));
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Paper>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            title={title}
            image={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
              poster_path
            }
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} variant="overline">
              {title}
            </Typography>
            <Typography variant="body2">
              Release Date: {release_date}
            </Typography>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <TextField type="hidden" {...register("movieId")} value={id} />

              {likedMovies.find((m) => m.id === id) ? (
                <CheckIcon color="primary" className={classes.checkIcon} />
              ) : (
                <Button
                  variant="text"
                  color="primary"
                  size="small"
                  type="submit"
                >
                  Add
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

export default SearchedMovie;
