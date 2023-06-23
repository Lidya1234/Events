"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventModel_1 = __importDefault(require("../Models/eventModel"));
const validation_1 = __importDefault(require("../Utils/validation"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    try {
        console.log("getting data");
        eventModel_1.default.find().then(data => res.json(data)).catch(error => res.json(error));
    }
    catch (error) {
        res.json(error);
    }
});
router.post("/add", (req, res) => {
    const body = req.body;
    const result = (0, validation_1.default)(body);
    if (result.error) {
        res.status(442).json({
            status: 'error',
            message: `invalid data: ${result.error}`
        });
    }
    else {
        try {
            const event = new eventModel_1.default({
                title: body.title,
                date: body.date,
                location: body.location,
                description: body.description
            });
            event.save().then(() => res.status(200).json({ msg: "Event added successfully" })).catch((error) => res.json(error));
        }
        catch (error) {
            res.json(error);
        }
    }
});
router.delete("/delete", (req, res) => {
    try {
        eventModel_1.default.findByIdAndDelete(req.params.id).then(() => res.json({ "msg": "deleted" })).catch(error => res.json(error));
    }
    catch (error) {
        res.json(error);
    }
});
exports.default = router;
