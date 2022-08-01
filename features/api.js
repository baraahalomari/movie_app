import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req)=>{
  if (localStorage.getItem('profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).access_token}`;
  }
  return req;
});

export const signup = (user) => API.post('/auth/signup', user);
export const login = (user) => API.post('/auth/login', user);
export const addMovie = (movie) => API.post('/movie', movie);
export const getAllMovies = () => API.get('/movie');
export const removeMovie = (id) => API.delete(`/movie/${id}`);
export const updateMovie = (movie) => API.put(`/movie/${movie.id}`, movie);