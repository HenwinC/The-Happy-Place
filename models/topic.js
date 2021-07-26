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

const topicSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  commete: [commetSchema]
},{
  timestamps: true,
})

const Topic = mongoose.model("Topic", topicSchema)