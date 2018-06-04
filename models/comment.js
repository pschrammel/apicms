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

export default mongoose.model('Comment', commentSchema);
