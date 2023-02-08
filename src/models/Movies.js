import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
    name:String,
    movies:Array
})

export default mongoose.model("Movies",moviesSchema);