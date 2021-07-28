import mongoose from 'mongoose'

const Schema = mongoose.Schema

export {
	Topic
}

const topicSchema = new Schema({
  title: String,
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
},{
  timestamps: true,
})

const Topic = mongoose.model("Topic", topicSchema)
// jfytdvydutrsdutr