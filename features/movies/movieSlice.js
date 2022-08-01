import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    isLoading: false,
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    update: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return action.payload;
        }
        return movie;
      });
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    addNewMovie: (state, action) => {
      state.movies.push(action.payload);
    }
  },
});

const { getMovies, setLoading, update, deleteMovie ,addNewMovie} = movieSlice.actions;

export const addMovie = (movie) => async (dispatch) => {
  try {
    await api.addMovie(movie).then((res) => {
      dispatch(addNewMovie(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMovies = () => async (dispatch) => {
  try {
    await api.getAllMovies().then((res) => {
      dispatch(getMovies(res.data));
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeMovie = (id) => async (dispatch) => {
  try {
    await api.removeMovie(id).then((res) => {
      dispatch(deleteMovie(id));
    });
  } catch (error) {
    console.log(error);
  }
}

export const updateMovie = (movie) => async (dispatch) => {
  try {
    await api.updateMovie(movie).then((res) => {
      dispatch(update(res.data));
    });
  } catch (error) {
    console.log(error);
  }
}

export default movieSlice.reducer;  
