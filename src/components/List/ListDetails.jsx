import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListDetails } from "../../actions/listActions";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import noImage from "../../images/noImage.png";

const useStyles = makeStyles((theme) => ({
  listOwner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: "1rem",
  },
  listHeader: {
    height: "200px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    marginTop: "2rem",
  },
  explanation: {
    fontWeight: "600",
  },
  poster_image: {
    width: "20%",
    marginRight: "1rem",
  },
  listStatistics: {
    height: "100px",
    backgroundColor: "#001b9673",
    borderRadius: "10px",
    marginTop: "1.5rem",
  },
  statisticText: {
    fontSize: "1.2rem",
  },
  statisticItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  moviePoster: {
    width: "150px",
  },
  listItems: {
    margin: "1.5rem 0 0.8rem 0",
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    borderRadius: "10px",
  },
  voteAverage: {
    fontWeight: "600",
  },
  card: {
    "&:hover": {
      boxShadow: "0px 0px 23px 5px #000000",
    },
  },
}));

const ListDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { created_by, description, items, item_count, name, poster_path } =
    useSelector((state) => state.list.list);

  useEffect(() => {
    dispatch(getListDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const voteAverage = () => {
    var total = 0;
    for (let i = 0; i < item_count; i++) {
      total += items[i].vote_average;
    }
    const vote = (total / item_count).toFixed(2);
    return isNaN(vote) ? 0 : vote;
  };

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          className={classes.listHeader}
        >
          <Grid item md={6} xs={12} className={classes.listOwner}>
            <Grid item>
              <Typography color="primary" variant="h5">
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <span className={classes.explanation}>Created By: </span>
              <Typography variant="inherit">{created_by}</Typography>
            </Grid>
            <Grid item>
              <span className={classes.explanation}>Description: </span>
              <Typography variant="inherit">{description}</Typography>
            </Grid>
          </Grid>
          {poster_path ? (
            <img
              src={
                "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                poster_path
              }
              alt="Poster"
              className={classes.poster_image}
            />
          ) : (
            <img
              className={classes.poster_image}
              src={noImage}
              alt="NoListImage"
            />
          )}
        </Grid>
      </Container>

      <Container>
        <Grid
          container
          justifyContent="space-around"
          className={classes.listStatistics}
        >
          <Grid item className={classes.statisticItem}>
            <Typography
              color="inherit"
              className={classes.statisticText}
              variant="overline"
            >
              Movie Count
            </Typography>
            <Typography color="inherit" variant="h4">
              {item_count}
            </Typography>
          </Grid>
          <Grid item className={classes.statisticItem}>
            <Typography
              color="inherit"
              className={classes.statisticText}
              variant="overline"
            >
              Vote Average
            </Typography>
            <Typography color="inherit" variant="h4">
              {voteAverage()}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={1} className={classes.listItems}>
          {item_count > 0 ? (
            items.map((item, index) => (
              <Grid item key={index}>
                <Paper>
                  <Card className={classes.card}>
                    <img
                      className={classes.moviePoster}
                      src={
                        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                          item.poster_path || noImage
                      }
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography
                        className={classes.voteAverage}
                        variant="body1"
                        title="Vote Average"
                        color="secondary"
                      >
                        {item.vote_average}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))
          ) : (
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="h5">You don't have any movies</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ListDetails;
