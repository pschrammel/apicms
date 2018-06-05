require('babel-register');
require('base');
var repl = require('repl');

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo32.mongo32/graphql').then(function(){
    var Comment=require('./models/comment').default
    var Post=require('./models/blog-post').default
    var replServer = repl.start({prompt: "amicms > "});
    replServer.context.db = mongoose;
    replServer.context.Comment = Comment;
    replServer.context.Post = Post;

});
