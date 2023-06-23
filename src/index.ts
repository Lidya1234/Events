import express,  {Express } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import db from "./Database/db.js";
import eventRouter from "./Routes/events.js"
const app: Express = express();
app.use(bodyParser.json())
app.use(cors());
const port = process.env.PORT || 4000;
// app.get('/',  (req: Request, res:Response)=>{
//     res.send('Hello this is express+typescript')
// })
// app.listen(port,()=>{
// console.log(`listenning on port${port}`)
// })
db().then(()=>{
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`);
    })
}).catch((error)=>
    console.log("Connection error"))
app.use("/event", eventRouter);

