import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Topic
}

const topixSchema = new Schema({
  name: String,
  commets: [{type: Schema.Types.ObjectId, ref: "Commets"}],
},{
  timestamps: true,
});

const Topic = mongoose.model("Topic", gameSchema);