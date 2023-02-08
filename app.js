import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/users/star-wars-users.js';
import moviesRoutes from './src/routes/movies/star-wars-routes.js';

const app = express();
app.use(cors())
app.use(express.json())
app.use('/star-wars/users',userRoutes);
app.use('/star-wars/movies',moviesRoutes);
app.get('/',async (req,res)=>res.send('Success!'))

export default app;