import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import commentType from '../../types/comment';
import getProjection from '../../get-projection';
import CommentModel from '../../../models/comment';
import debug from 'debug'

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);
      var query= CommentModel
          .populate('postId')
          .findById(params.id)
          .select(projection);
      var results = query.exec(function(error, data) {
          console.log(JSON.stringify(data, null, "\t"))
      });
      console.warn("comment/single:", params.id);
      return results;
  }
};

//id: 5b14d44ea89bf30022eda8f5
//postId:"5b14ce578b3ef10023f657fb
