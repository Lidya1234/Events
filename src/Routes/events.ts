import express,  {Express, Request, Response } from 'express';
import eventModel from '../Models/eventModel'
import validate from "../Utils/validation";
const router = express.Router();

router.get("/", (req:Request, res: Response) => {
    try {
        console.log("getting data")
       eventModel.find().then(data => res.json(data)).catch(error => res.json(error))
    }
    catch (error) {
        res.json(error)
    }

})
router.post("/add", (req:Request, res: Response) => {
    const body = req.body
    const result = validate(body);
    if (result.error) {
        res.status(442).json({
            status: 'error',
            message: `invalid data: ${result.error}`
        })
    }
    else {
         try {
            const event = new eventModel({
                title: body.title,
                date: body.date,
               location: body.location,
                description: body.description
                
            });

            event.save().then(() => res.status(200).json({ msg: "Event added successfully" })).catch((error: any) => res.json(error))
        }
        catch (error) {
            res.json(error)
        }
    }
})
router.delete("/delete", (req: Request, res: Response) => {
    try {
        eventModel.findByIdAndDelete(req.params.id).then(() => res.json({ "msg": "deleted" })).catch(error => res.json(error))
    }
    catch (error) {
        res.json(error)
    }

})

export default router;
