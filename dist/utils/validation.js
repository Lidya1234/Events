"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validate = (body) => {
    let result = joi_1.default.object({
        title: joi_1.default.string().min(3).max(20).required(),
        date: joi_1.default.string().required(),
        location: joi_1.default.string().required(),
        description: joi_1.default.string().required()
    }).validate(body);
    // const invalid = result.error ? true :false
    // return invalid;
    return result;
};
exports.default = validate;
