import mongoose from 'mongoose';
//import BlogPost from './blog-post'

var commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'BlogPost'
  },
  text: {
    type: String,
    required: true
  }
});

commentSchema.virtual('post',{
    ref: 'BlogPost',
    localField: 'postId',
    foreignField: '_id',
    justOne: true
})
export default mongoose.model('Comment', commentSchema);
