import mongoose from "mongoose"
const eventsModel = new mongoose.Schema(
    {
        title: {type: String, unique:true, required: true },
        date: {type: String},
        location: {type: String},
        description: {type: String},
    }
)
export default mongoose.models.events || mongoose.model('event', eventsModel);