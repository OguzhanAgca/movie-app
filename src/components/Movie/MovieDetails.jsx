import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovie,
  emptyCurrentMovie,
  getMovieDetails,
  getMovies,
} from "../../actions/movieActions";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RemoveMovie from "./RemoveMovie";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    border: "1px solid #cacaca",
    boxSizing: "border-box",
    marginTop: theme.spacing(4),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  arrowBackIosIcon: {
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  totalContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContent: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    alignItems: "center",
  },
  textContent: {
    width: "50%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  posterImage: {
    width: "90%",
    margin: "0.7rem 0",
  },
  statisticField: {
    display: "flex",
    flexDirection: "column",
  },
  statistics: {
    display: "flex",
    flexDirection: "column",
  },
  releaseField: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginTop: "1rem",
  },
  overviewField: {
    margin: "0.7rem 0 1rem 0",
  },
  companieContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.7rem",
  },
  statisticHeaders: {
    fontWeight: "600",
  },
  favoriteIconBtn: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
    marginRight: theme.spacing(3),
  },
  subHeaders: {
    textDecoration: "underline",
  },
  favoriteBorderIcon: {
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const MovieDetails = ({ history, location, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movies.currentMovie);
  const likedMovies = useSelector((state) => state.movies.movies);
  const movieId = match.params.id;

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const turnBackBtn = () => {
    history.goBack();
    dispatch(emptyCurrentMovie());
  };

  const favoriteIconBtn = () => dispatch(addMovie(movieId));

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <div>
          <div className={classes.header}>
            <Typography
              onClick={() => history.goBack()}
              variant="h5"
              gutterBottom
            >
              <ArrowBackIosIcon
                color="primary"
                className={classes.arrowBackIosIcon}
              />{" "}
              {currentMovie?.title}
            </Typography>
          </div>
        </div>

        <Divider />

        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid container style={{ marginTop: "1rem" }}>
                <Grid item md={6}>
                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>Status:</span>{" "}
                    {currentMovie?.status}
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>
                      Release Date:
                    </span>{" "}
                    {currentMovie?.release_date}
                  </Typography>
                </Grid>
              </Grid>

              <img
                src={
                  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                  currentMovie?.poster_path
                }
                alt={"Movie: " + currentMovie?.title}
                className={classes.posterImage}
              />
            </Grid>

            <Divider orientation="vertical" flexItem />
            <Grid item className={classes.textContent} xs={12} md={5}>
              <div className={classes.statisticField}>
                <Typography variant="h6" className={classes.subHeaders}>
                  Statistics
                </Typography>
                <div className={classes.statistics}>
                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>
                      Vote Count:
                    </span>{" "}
                    {currentMovie?.vote_count}
                  </Typography>

                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>
                      Vote Average:
                    </span>{" "}
                    {currentMovie?.vote_average}
                  </Typography>

                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>Budget:</span>{" "}
                    {currentMovie?.budget}
                  </Typography>

                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>Revenue:</span>{" "}
                    {currentMovie?.revenue}
                  </Typography>

                  <Typography variant="overline">
                    <span className={classes.statisticHeaders}>Runtime:</span>{" "}
                    {currentMovie?.runtime} min
                  </Typography>
                </div>
              </div>
              <div className={classes.overviewField}>
                <Typography variant="h6" className={classes.subHeaders}>
                  Overview
                </Typography>
                <Typography variant="body1">
                  {currentMovie?.overview}
                </Typography>
              </div>
              <div>
                <div>
                  <Typography variant="h6" className={classes.subHeaders}>
                    Production Companies
                  </Typography>
                  <div className={classes.companieContainer}>
                    {currentMovie?.production_companies?.map(
                      (companie, index) => (
                        <Typography variant="overline" key={index}>
                          {companie?.name}
                        </Typography>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <Typography variant="h6" className={classes.subHeaders}>
                    Production Countries
                  </Typography>
                  <div className={classes.companieContainer}>
                    {currentMovie?.production_countries?.map(
                      (country, index) => (
                        <Typography variant="overline" key={index}>
                          {country?.name}
                        </Typography>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
          justifyContent="space-between"
          style={{ margin: "1rem 0 0 1rem" }}
        >
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<SubdirectoryArrowLeftIcon />}
              onClick={turnBackBtn}
            >
              Turn Back
            </Button>
          </Grid>
          <Grid item>
            {currentMovie &&
            likedMovies &&
            likedMovies?.find((m) => m.id === currentMovie.id) ? (
              <RemoveMovie history={history} movieId={movieId} />
            ) : (
              <span
                className={classes.favoriteIconBtn}
                onClick={favoriteIconBtn}
              >
                <FavoriteBorderIcon
                  className={classes.favoriteBorderIcon}
                  color="secondary"
                />
              </span>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MovieDetails;
