const app = require('../app');
const models = require('../models/models');

module.exports = {
  comments: {
    addComment: function(post, room, client) {
      models.comments.addComment(post.user, post.comment, post.universityId, function(err, comment) {
        if (err) {
          client.emit('dbError', err);
        } else {
          app.io.to(room).emit('commentAdded', comment);
        }
      });
    }
  }
};
