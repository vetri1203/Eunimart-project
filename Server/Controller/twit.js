import twitModel from "../Schema/twitSchema.js";
// import {v4: uuidv4}    from "uuid";


export const msg = async(req,res) => {
    const body = req.body;

    if((body.twitMsg))
    {
        return res.status(400).send({error : "Please fill any messages"});
    }


    const content = new twitModel(body);

    content.save((err,data) => {
        if(err) 
        {
            console.log(err);
            return res.status(400).send({message : "There are some problem while uploading please "});
        }
        else {
            return res.send(200).send({message : "posted sucessfully"});
        }
    })
   
}
