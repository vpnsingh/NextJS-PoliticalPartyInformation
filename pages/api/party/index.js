import dbConnection from '../../../db/dbConnect';
import Party from '../../../models/party';

// creating/checking db connection
dbConnection()

// get all parties record and add new one
export default async(req, res) => {
    // get api method name from req
    const { method } = req
    // perform operation based on method GET and POST
    switch (method) {
        case "GET":
            try {
                const parties = await Party.find({})
                res.status(200).json({ success : true, party : parties})
            } catch (error) {
                res.status(400).json({ success : false})
            }
            break;
        case "POST":
            try {
                const party = await Party.create(req.body)
                res.status(200).json({ success : true, party })
            } catch (error) {
                res.status(400).json({ success : false})            
            }
            break;      
        default:
            res.status(400).json({ success : false})
            break;
    }
}