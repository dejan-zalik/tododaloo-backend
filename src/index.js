import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import router from './router.js';
import mongoose from 'mongoose';
import errorHandler from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

//app.use() middleware (e.g. these are run before the below endpoints are called)
app.use(express.json()); //allows processing json requests
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
); //allows apis that have different domains to be called
app.use(cookieParser());
app.use(morgan('tiny')); //helps with debugging, e.g. gives additional info from requests
app.use(router);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
});
