import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import AppNavBar from "./components/AppNavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieList from "./components/Movie/MovieList";
import AddMovie from "./components/Movie/AddMovie";
import MovieDetails from "./components/Movie/MovieDetails";
import ListDetails from "./components/List/ListDetails";

const App = () => {
  return (
    <>
      <AppNavBar />

      <Grid container justifyContent="center">
        <Grid item xs={12} md={9}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/add-movie" component={AddMovie} />
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/my-list" component={ListDetails} />
          </Switch>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default App;
