var models = require('../models/models.js');

module.exports = {
  colleges: {
    get: function(req, res) {
      models.colleges.get(function(err, data) {
        if (err) {
          res.status(500).send(err);
        } else {
          data = JSON.stringify(data);
          data = JSON.parse(data);
          res.status(200).send(data);
        }
      });
    },
    getSuggestions: function(req, res) {
      var body = req.body;
      for (let key in body) {
        if (!body.key || !body.key.length) {
          delete body.key;
        }
      }

      models.colleges.getSuggestions(body, function(err, data) {
        if (err) {
          res.status(500).send(err);
        } else {
          data = JSON.stringify(data);
          data = JSON.parse(data);
          res.status(200).send(data);
        }
      });
    }
  },
  comments: {
    get: function(req, res) {
      models.comments.getAllByCollegeId(req.query.universityId, function(err, data) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    }
  },
  college: {
    get: function(req, res) {
      models.college.get(req.query.universityId, function(err, data) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    }
  }
};
