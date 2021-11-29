import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movieActions";
import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "./Movie";
import { Link } from "react-router-dom";
import TopScroll from "../layouts/TopScroll";

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
  noMovieContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    marginTop: "1.2rem",
    padding: "0.5rem",
    height: "90vh",
    display: "flex",
    alignItems: "center",
  },
  noMovieField: {
    height: "60vh",
    textAlign: "center",
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
          {movies === null ? (
            <div className={classes.loading}>
              <LinearProgress color="primary" />
            </div>
          ) : movies?.length ? (
            movies.map((movie, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Movie movie={{ ...movie, liked: true }} />
              </Grid>
            ))
          ) : (
            <Container className={classes.noMovieContainer}>
              <Grid
                container
                justifyContent="space-around"
                alignContent="center"
                direction="column"
                className={classes.noMovieField}
              >
                <Grid item>
                  <Typography color="secondary" variant="h3">
                    You Don't Have Any Movies
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="overline">
                    Please <Link to="/add-movie">click here</Link> for add a
                    movie or <Link to="/">turn back</Link> home.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          )}
        </Grid>
      </Container>

      <TopScroll showBelow={250} />
    </>
  );
};

export default MovieList;
