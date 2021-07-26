import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Topic
}

const commetSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String
},{
  timestamps: true
})

const commetSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  replies: [replySchema]
},{
  timestamps: true,
})

const Topic = mongoose.model("Topic", topicSchema)