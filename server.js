// import express from 'express';
// import cors from 'cors';

import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import app from './app.js';
// import userRoutes from './src/routes/users/star-wars-users.js';
// import moviesRoutes from './src/routes/movies/star-wars-routes.js';

dotenv.config()

mongoose.connect(process.env.MONGO_KEY)
// const app = express();
// app.use(cors())
// app.use(express.json())
// app.use(userRoutes);
// app.use(moviesRoutes);

// const client = redis.createClient({
//     host: 'redis-server',
//     port: 6379
// });


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})