import express from "express";
import bodyParser from 'body-parser';
import route from "./Routes/Routes.js";
// import { Port,MongooseUrl } from "./const.js";
import { Port } from "./const.js";
import { MongooseUrl } from "./const.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",route);

mongoose
.connect(MongooseUrl)
        .then( () => console.log("DB connected"))  
        .catch((err) => console.log("error is :", err.message));


app.listen(Port, () => console.log(`server listen in ${Port}`));



