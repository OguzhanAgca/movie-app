import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movieActions";
import { Container, Grid, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "./Movie";

const useStyles = makeStyles((theme) => ({
  loading: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  movieList: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    marginTop: "1.2rem",
    padding: "0.5rem",
  },
}));

const MovieList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Grid container spacing={2} className={classes.movieList}>
          {movies?.length ? (
            movies.map((movie, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Movie movie={movie} />
              </Grid>
            ))
          ) : (
            <div className={classes.loading}>
              <LinearProgress color="primary" />
            </div>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default MovieList;
