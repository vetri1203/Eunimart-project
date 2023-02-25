import mongoose from "mongoose";
import { nanoid } from "nanoid";


const twitSchema = new mongoose.Schema (

    {
        twitTag : {
            type: String,
            
        },
        twitMsg : {
            type : String,
            require : true
        },
        twitId : {
            type : String,
            default : () => nanoid(5)
        }
    }
)

const twitModel = new mongoose.model('twits',twitSchema);

export default twitModel;