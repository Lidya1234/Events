"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const eventsModel = new mongoose_1.default.Schema({
    title: { type: String, unique: true, required: true },
    date: { type: String },
    location: { type: String },
    description: { type: String },
});
exports.default = mongoose_1.default.models.events || mongoose_1.default.model('event', eventsModel);
