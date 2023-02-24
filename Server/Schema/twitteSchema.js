import mongoose from "mongoose";



const twiteeSchema = new mongoose.Schema (

    {
        twiteeTag : {
            type: String,
            
        },
        twiteeMsg : {
            type : String,
            require : true
        }
    }
)

const twiteeModel = new mongoose.model('twitees',twiteeSchema);

export default twiteeModel;