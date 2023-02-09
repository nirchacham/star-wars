
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import app from './app.js';

dotenv.config()
const MONGO_KEY = 'mongodb+srv://moviesapp:Aa123456@moviesapp.kggxgyp.mongodb.net/test'
mongoose.connect(MONGO_KEY)

app.listen(3001, () => {
    console.log(`Listening on port ${3001}`);
})