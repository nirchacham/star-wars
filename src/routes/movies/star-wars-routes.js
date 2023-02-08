import express from 'express';
import MoviesController from '../../controllers/movies.controller.js';
const router = express.Router();

router.get('/', MoviesController.fetchMovies);

router.get('/favoriteMovies/:emailId', MoviesController.fetchUserFavoriteMovies);

router.post('/addMovieToFavorite/:emailId', MoviesController.addFavoriteMovieToUser)

router.delete('/removeMovieFromFavorite/:emailId', MoviesController.removeFavoriteMovieFromUser)

export default router;