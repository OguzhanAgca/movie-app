import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../actions/movieActions";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
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
}));

const MovieDetails = ({ history, location, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieId = match.params.id;

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentMovie = useSelector((state) => state.movies.currentMovie);

  return (
    <>
      <Paper className={classes.paper} elevation={0}>
        <div>
          <div className={classes.header}>
            <Typography variant="h5" gutterBottom>
              <Link to="/movies" className={classes.link}>
                <ArrowBackIosIcon
                  color="primary"
                  className={classes.arrowBackIosIcon}
                />
              </Link>{" "}
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
                <Typography variant="h6">Statistics</Typography>
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
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body1">
                  {currentMovie?.overview}
                </Typography>
              </div>
              <div>
                <div>
                  <Typography variant="h6">Production Companies</Typography>
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
                  <Typography variant="h6">Production Countries</Typography>
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
            >
              <Link to="/movies" className={classes.link}>
                Turn Back
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <RemoveMovie history={history} movieId={movieId} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MovieDetails;
