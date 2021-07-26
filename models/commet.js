import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
Commets
}

const comments = new Schema({
  content: String,
  topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
  timestamps: true,
})

const Commets = mongoose.model("Commets", commetSchema)