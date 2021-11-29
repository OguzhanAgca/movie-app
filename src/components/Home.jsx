import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../actions/movieActions";
import {
  Container,
  ButtonGroup,
  Button,
  Grid,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "./Movie/Movie";
import TopScroll from "./layouts/TopScroll";

const useStyles = makeStyles((theme) => ({
  filterButtons: {
    marginTop: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center",
    },
  },
  header: {
    margin: "1.2rem 0 1.2rem 0",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
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
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const starterFunc = async () => {
    await dispatch(getMovies());
    await dispatch(getPopularMovies());
    await dispatch(getTopRatedMovies());
    await dispatch(getUpcomingMovies());
  };

  useEffect(() => {
    starterFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          className={classes.filterButtons}
        >
          <Grid item>
            <ButtonGroup size="small" color="inherit">
              <Button>
                <a className={classes.link} href="#popular">
                  Popular
                </a>
              </Button>
              <Button>
                <a className={classes.link} href="#toprated">
                  Top Rated
                </a>
              </Button>
              <Button>
                <a className={classes.link} href="#upcoming">
                  Upcoming
                </a>{" "}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid container direction="column">
          <Grid item>
            <Typography id="popular" variant="h5" className={classes.header}>
              Popular Movies
            </Typography>

            <Grid container spacing={2}>
              {movies.popularMovies === null ? (
                <div className={classes.loading}>
                  <LinearProgress color="primary" />
                </div>
              ) : movies.popularMovies?.length > 0 ? (
                movies.popularMovies.map((movie, index) => (
                  <Grid item key={index} xs={12} md={4} lg={4} sm={6}>
                    <Movie
                      movie={{
                        ...movie,
                        media_type: "movie",
                        liked: movies.movies.find((m) => m.id === movie.id)
                          ? true
                          : false,
                      }}
                    />
                  </Grid>
                ))
              ) : (
                <Grid container>
                  <Grid item>
                    <Typography variant="h3">No Movie</Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <Typography id="toprated" variant="h5" className={classes.header}>
              Top Rated Movies
            </Typography>

            <Grid container spacing={2}>
              {movies.topRatedMovies === null ? (
                <div className={classes.loading}>
                  <LinearProgress color="primary" />
                </div>
              ) : movies.topRatedMovies?.length > 0 ? (
                movies.topRatedMovies.map((movie, index) => (
                  <Grid item key={index} xs={12} md={4} lg={4} sm={6}>
                    <Movie
                      movie={{
                        ...movie,
                        media_type: "movie",
                        liked: movies.movies.find((m) => m.id === movie.id)
                          ? true
                          : false,
                      }}
                    />
                  </Grid>
                ))
              ) : (
                <Grid container>
                  <Grid item>
                    <Typography variant="h3">No Movie</Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Typography id="upcoming" variant="h5" className={classes.header}>
              Upcoming Movies
            </Typography>

            <Grid container spacing={2}>
              {movies.upcomingMovies === null ? (
                <div className={classes.loading}>
                  <LinearProgress color="primary" />
                </div>
              ) : movies.upcomingMovies?.length > 0 ? (
                movies.upcomingMovies.map((movie, index) => (
                  <Grid item key={index} xs={12} md={4} lg={4} sm={6}>
                    <Movie
                      movie={{
                        ...movie,
                        media_type: "movie",
                        liked: movies.movies.find((m) => m.id === movie.id)
                          ? true
                          : false,
                      }}
                    />
                  </Grid>
                ))
              ) : (
                <Grid container>
                  <Grid item>
                    <Typography variant="h3">No Movie</Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <TopScroll showBelow={250} />
    </>
  );
};

export default Home;
