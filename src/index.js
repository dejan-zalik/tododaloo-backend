import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import router from './router.js';
import mongoose from 'mongoose';
import errorHandler from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

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
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny')); //helps with debugging, e.g. gives additional info from requests
}
app.use(router);
app.use(errorHandler);

mongoose
  .connect(
    `mongodb+srv://dkilaz:${process.env.MONGO_PASSWORD}@cluster0.x3sd4gr.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log('starting on port 8080');
    app.listen(8080);
  });
