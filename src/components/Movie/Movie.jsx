import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import { addMovie, removeMovie } from "../../actions/movieActions";
import noImage from "../../images/noImage.png";
import "../../style/ScrollBar.css";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      boxShadow: "0px 0px 23px 5px #000000",
    },
  },
  cardImage: {
    height: "440px",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  chip: {
    marginTop: "1rem",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  voteAverage: {
    fontWeight: "600",
    marginRight: "1rem",
    cursor: "context-menu",
  },
  favoriteIcon: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const Movie = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    poster_path,
    id,
    media_type,
    title,
    overview,
    release_date,
    vote_average,
    liked,
  } = movie;

  const addFavoriteBtn = () => dispatch(addMovie(id));
  const removeFavoriteBtn = () => dispatch(removeMovie(id));

  return (
    <Paper>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardImage}
          image={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
              poster_path || noImage
          }
          title="image"
        />
        <CardContent
          style={{
            height: "267px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="overline" component="p" gutterBottom>
              Release Date: {release_date}
            </Typography>
          </div>
          <Typography
            className="scroll"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {overview?.substring(0, 200) + "..."}
          </Typography>
          <Chip
            label={` # ${media_type} `}
            variant="outlined"
            className={classes.chip}
          />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" color="primary" size="small">
            <Link to={`movie/${id}`} className={classes.link}>
              More..
            </Link>
          </Button>
          {!liked ? (
            <FavoriteBorderIcon
              onClick={addFavoriteBtn}
              className={classes.favoriteIcon}
              color="secondary"
            />
          ) : (
            <FavoriteIcon
              onClick={removeFavoriteBtn}
              className={classes.favoriteIcon}
              color="secondary"
            />
          )}
          <Typography
            className={classes.voteAverage}
            variant="body1"
            title="Vote Average"
            color="secondary"
          >
            {vote_average}
          </Typography>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Movie;
