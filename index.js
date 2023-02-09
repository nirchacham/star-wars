
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import app from './app.js';

dotenv.config()

mongoose.connect(process.env.MONGO_KEY)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})