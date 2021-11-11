import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../actions/movieActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import SearchedMovie from "./SearchedMovie";

const searchMovieSchema = yup.object({
  search: yup.string().required("Search field is required."),
});

const AddMovie = () => {
  const dispatch = useDispatch();
  const searchedMovies = useSelector((state) => state.movies.searchedMovies);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchMovieSchema),
  });

  const onSubmit = (data) => {
    dispatch(searchMovie(data));
  };

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{ marginTop: "1.2rem" }}
        >
          <Grid item xs={8} md={10}>
            <form
              id="search-movie"
              method="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                variant="outlined"
                label="Search Movie"
                fullWidth
                size="small"
                {...register("search")}
                error={errors?.search && true}
                helperText={errors.search?.message}
              />
            </form>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              form="search-movie"
            >
              Search
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{ marginTop: "1.2rem", minHeight: "65vh" }}
        >
          {searchedMovies?.length
            ? searchedMovies.map((movie, index) => (
                <Grid item key={index} xs={12} md={6}>
                  <SearchedMovie movie={movie} />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
};

export default AddMovie;
