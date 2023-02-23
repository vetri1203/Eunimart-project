import express  from "express";

import { signup } from "../Controller/Signup.js";
import Home from "../Controller/Home.js";
import { login } from "../Controller/Login.js";

const Route = express.Router();

Route.post('/signup',signup);
Route.get('/home',Home);
Route.post('/login',login);
    
export default Route;