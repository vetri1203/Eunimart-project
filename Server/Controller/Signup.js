import bcrypt from "bcrypt";
import SignupModel from "../Schema/SignupSchema.js";

export const signup = async(req,res) => {
    SignupModel.findOne ( {
        userMail : req.body.userMail
    },
    async(err,data)=> {
        if(err){
            console.log(err);
        }
        else {
            if(data) {
                res.send("Email is already taken");
            }
            else {
                const body = req.body;
                if(!(body.userFirstName 
                        && body.userMiddleName
                        && body.userLastName
                        && body.userMail
                        && body.userPassword))
                {
                    return res.status(400).send({error : "please fill all the details"});
                }

                const user =   new SignupModel(body);
                const salt = await bcrypt.genSalt(8);

                user.userPassword = await bcrypt.hash(user.userPassword,salt);
                user.save((err,data) => {
                    if(err) 
                    {
                        console.log(err);
                    }
                    else {
                        return res.status(200).send({message : "signup successfull  "});
                    }
                })  
            }
        }
    });
}