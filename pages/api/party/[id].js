import dbConnection from '../../../db/dbConnect';
import Party from '../../../models/party';

// creating/checking db connection
dbConnection()

// get single record, update and delete one
export default async(req, res) => {
    // get api method name and query id from req
    const { 
        query : {id},
        method
     } = req
    // perform operation based on method GET, PUT and DELETE
    switch (method) {
        case "GET":
            try {
                const party = await Party.findById(id)
                if(!party){
                    res.status(400).json({ success : false, error : 'No record present'})        
                }
                res.status(200).json({ success : true, party})
            } catch (error) {
                res.status(400).json({ success : false})
            }
            break;
        case "PUT":
            try {
                const party = await Party.findByIdAndUpdate(id, req.body, {
                    new : true,
                    runValidators : true
                })
                if(!party){
                    res.status(400).json({ success : false, error : 'No record present'})        
                }
                res.status(200).json({ success : true, party })
            } catch (error) {
                res.status(400).json({ success : false})            
            }
            break;
        case "DELETE":
            try {
                const party = await Party.deleteOne({_id: id})
                if(!party){
                    res.status(400).json({ success : false, error : 'No record present'})        
                }
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