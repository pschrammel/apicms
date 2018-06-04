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
    resolve (root, params, ctx, options) {
        //console.log("comment/single:", Object.keys(ctx),Object.keys(options))
        console.log(options.fieldNodes)
        const projection = getProjection(options.fieldNodes[0]);
        console.log(projection)
        var query= CommentModel
            //.populate('postId')
            .findById(params.id)
            .select(projection);
        console.warn("comment/single:", params.id);
        return query.exec();
  }
};

//id: 5b14d44ea89bf30022eda8f5
//postId:"5b14ce578b3ef10023f657fb
