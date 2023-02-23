import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        userFirstName : {
            type: String,require:true
        },
        userMiddleName: {
            type: String,

            require:true
        },
        userLastName : {
            type:String,
            require: true
        },
        gender: {
            type : String
        },
        age : {
            type : String
        },
        userMail : {
            type :String,
            require:true
        },
        UserPassword : {
            type : String,
            require:true
        }
    }
)

 const SignupModel = new mongoose.model('signupData',userSchema);

 export default SignupModel;