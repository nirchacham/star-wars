import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './src/routes/users/star-wars-users.js';
import moviesRoutes from './src/routes/movies/star-wars-routes.js';

const app = express();
app.use(cors())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json())
app.use('/star-wars/users',cors(),userRoutes);
app.use('/star-wars/movies',cors(),moviesRoutes);
app.get('/',async (req,res)=>res.send('Success!'))

export default app;