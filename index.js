import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from './passport.js'; 
import Router from '../Assignment/router/router.js';
import { client,connectDB } from './config/mongoDB.js';
const app = express();
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',Router);
// simple route
// app.get('/', (req, res) => {
//   console.log("Route /a was accessed");
//   res.send("<a href='auth/google'>Login with Google </a>");
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});