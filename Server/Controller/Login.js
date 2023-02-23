import SignupModel from "../Schema/SignupSchema.js";
// import bcr
import bcrypt, { compare } from "bcrypt";

export const login = async(req,res)=> {
    const body =req.body;
    const detail = await SignupModel.findOne({userMail:body.userMail})
            //validation
    if(detail)
    {
        const valid = bcrypt (compare(
            body.userPassword,
            detail.userPassword
        ));

        if(valid)
        {
            res.status(200).send({message : "valid password"});
        }
        else {
            res.status(400).send({error : "Invalid password"});
        }
    }
    else{
        res.status(400).send({error : "user does not exsist"})
    }

};