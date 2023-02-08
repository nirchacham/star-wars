import axios from 'axios';
import Movies from '../models/Movies.js'

export default class StarWarsHandler {
    static async fetchMovies() {
                const response = await axios.get('https://swapi.dev/api/films/');
                const transformedMovies = response.data.results.map((movieData) => {
                    return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                    };
                });
                return transformedMovies;
    }

    static async addFavoriteMovieToUser(email,movieTitle){
        let movies = await Movies.findOne({name:email});
        let res;
        if(movies){
            // movies.movies = [...movies]
            console.log('found movies: ',movies)
            res = await Movies.updateOne({name:email,movies:[...movies.movies,movieTitle]})
        } else{
            res = await Movies.create({name:email,movies:[movieTitle]})
        }
        console.log(res)
    }

    static async removeFavoriteMovieFromUser(email,movieTitle){
        let movies = await Movies.findOne({name:email});
        let res, filteredMovies = [];
        if(movies){
            filteredMovies = movies.movies.filter(movie => movie != movieTitle)
            res = await Movies.updateOne({name:email,movies:filteredMovies})
        } 
        console.log(filteredMovies)
        return filteredMovies;
    }

    static async fetchUserFavoriteMovies(email) {
        const movies = await Movies.findOne({name:email})
        return movies ? movies.movies : null;
    }
}