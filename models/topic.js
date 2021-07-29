import mongoose from 'mongoose'

const Schema = mongoose.Schema

export {
	Topic
}

const replySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
  text: String,
  topic: { type: Schema.Types.ObjectId, ref: "Topic"}
}, {
  timestamps: true,
})

const topicSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  replies: [replySchema]
},{
  timestamps: true,
})

const Topic = mongoose.model("Topic", topicSchema)
