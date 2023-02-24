import twiteeModel from "../Schema/twitteSchema.js";


export const msg = async(req,res) => {
    const body = req.body;

    if((body.twiteeMsg))
    {
        return res.status(400).send({error : "Please fill any messages"});
    }


    const content = new twiteeModel(body);

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
