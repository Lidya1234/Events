"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_js_1 = __importDefault(require("./Database/db.js"));
const events_js_1 = __importDefault(require("./Routes/events.js"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 4000;
// app.get('/',  (req: Request, res:Response)=>{
//     res.send('Hello this is express+typescript')
// })
// app.listen(port,()=>{
// console.log(`listenning on port${port}`)
// })
(0, db_js_1.default)().then(() => {
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
}).catch((error) => console.log("Connection error"));
app.use("/event", events_js_1.default);
