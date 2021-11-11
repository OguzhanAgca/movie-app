import React from "react";
import { Container, CardMedia, Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import first from "../images/first.jpeg";
import react from "../images/react.png";
import tmdb from "../images/tmdb.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <Container>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        <Slider {...settings}>
          <div>
            <CardMedia
              style={{ height: "350px" }}
              image={first}
              title="Slider Image"
            />
          </div>
          <div>
            <CardMedia
              style={{ height: "350px" }}
              image={react}
              title="Slider Image"
            />
          </div>
          <div>
            <CardMedia
              style={{ height: "350px" }}
              image={tmdb}
              title="Slider Image"
            />
          </div>
        </Slider>
      </div>
      <Grid
        container
        justifyContent="space-around"
        style={{ marginTop: "2rem" }}
      >
        <Grid item xs={12} md={5}>
          <Typography variant="h6">Explanation</Typography>
          <Typography variant="body2">
            This project is my movie api project. I used the api from TMDB. With
            this application, I can add and delete movies to my movie list that
            I have created in TMDB.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6">Feelings and Thoughts</Typography>
          <Typography variant="body2">
            While developing my project, I sometimes had fun and sometimes got
            angry :) As I develop myself, I want to continue to develop this
            project.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
