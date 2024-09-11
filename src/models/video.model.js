

import mongoose, { Schema } from "mongoose";



const videoSchema = new Schema({
    videoFile: {
        type: String,// url
        required: true,
        trim: true

    },

    thumbnail: {
        type: String,// url
        required: true,
        trim: true
    },

    title: {
        type: String,
        required: true,
        trim: true

    },

    description: {
        type: String,
        required: true,
        trim: true

    },
    duration: {
        type: Number,
        required: true,
        trim: true

    },

    views: {
        type: Number,
        default: 0
    },
    isPlublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
   

}, { timestamps: true });


export default Video = mongoose.model.Video || mongoose.model("Video", videoSchema)