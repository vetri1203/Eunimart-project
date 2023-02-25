import express  from "express";

import { signup } from "../Controller/Signup.js";
import { msg } from "../Controller/twit.js";
import { login } from "../Controller/Login.js";

const Route = express.Router();

Route.post('/signup',signup);
Route.post('message', msg);
Route.post('/login',login);
    
export default Route;