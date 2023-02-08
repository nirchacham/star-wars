import StarWarsHandler from '../handlers/star-wars-handler.js';

export default class MoviesController {
    static async fetchMovies(req,res) {
        // const innerFunction = async (req,res)=>{
            try{
                const result = await StarWarsHandler.fetchMovies();
                res.send(result);
            } catch(err) {
                throw new Error(err);
            }
        // }
        // innerFunction(req,res)
    }

    static async fetchUserFavoriteMovies(req,res) {
        // const innerFunction = async (req,res)=>{
            try{
                const email = req.params.emailId
                const result = await StarWarsHandler.fetchUserFavoriteMovies(email);
                res.send(result);
            } catch(err) {
                throw new Error(err);
            }
        // }
        // innerFunction(req,res);
    }

    static async addFavoriteMovieToUser(req,res) {
        // const innerFunction = async (req,res)=>{
            try{
                const emailId = req.params.emailId;
                const movieTitle = req.query.movieTitle;
                const result = await StarWarsHandler.addFavoriteMovieToUser(emailId,movieTitle);
                res.send(result);
            } catch(err) {
                throw new Error(err);
            }
        // }
        // innerFunction(req,res);
    }

    static async removeFavoriteMovieFromUser(req,res) {
        // const innerFunction = async (req,res)=>{
            try{
                const emailId = req.params.emailId;
                const movieTitle = req.body.title;
                const result = await StarWarsHandler.removeFavoriteMovieFromUser(emailId,movieTitle);
                res.send(result);
            } catch(err) {
                throw new Error(err);
            }
        // }
        // innerFunction(req,res);
    }
}