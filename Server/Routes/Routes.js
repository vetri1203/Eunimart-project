import express  from "express";

import { signup } from "../Controller/Signup.js";
import { msg } from "../Controller/twitee.js";
import { login } from "../Controller/Login.js";

const Route = express.Router();

Route.post('/signup',signup);
Route.get('message', msg);
Route.post('/login',login);
    
export default Route;