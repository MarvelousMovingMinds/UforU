const connection = require('./dbConnection');
const _ = require('underscore');

const asyncMap = function(tasks, cb) {
  let results = [];
  let remaining = tasks.length;
  tasks.forEach((task, i) => {
    task((err, result) => {
      results[i] = result;
      remaining -= 1;
      if (remaining === 0) {
        cb(results);
      }
    });
  });
};

const querySchoolTable = function(column, value, cb) {
  if (column === 'tuition') {
    value = value.replace(/\$/g, '');
    value = value.replace(/,/g, '');
    let max = value;
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' < ?', [value], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  } else if (column === 'size') {
    let min = value[0];
    let max = value[1];
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' BETWEEN ? AND ?', [min, max], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  } else if (column === 'majors') {
    for (let i = 0; i < value.length; i++) {
      connection.query('SELECT * FROM Universities WHERE id IN (SELECT university_id FROM majors_universities WHERE major_id IN (SELECT id FROM Majors WHERE major = ?))', [value[i]], function(err, results, fields) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  } else if (column === 'average_gpa') {
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' < ?', [value], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  } else {
    connection.query('SELECT * FROM Universities WHERE ' + connection.escapeId(column) + ' = ?', [value], function(err, results, fields) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
  }
};

var mySearchFunction = function(prefs, cb) {
  let queries = [];
  for (let key in prefs) {
    queries.push(function(cb) {
      querySchoolTable(key, prefs[key], function(err, data) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    });
  }
  asyncMap(queries, function(arrOfData) {
    var inputTuition = prefs.tuition || null;

    if (prefs.size !== undefined) {
      var schoolMin = prefs.size[0];
      var schoolMax = prefs.size[1];
    } else {
      var schoolMin = null;
      var schoolMax = null;
    }

    arrOfData = JSON.parse(JSON.stringify(arrOfData));
    arrOfData = _.flatten(arrOfData);

    if (inputTuition && (schoolMax && schoolMin)) {

      inputTuition = inputTuition.replace(/\$/g, '');
      inputTuition = inputTuition.replace(/,/g, '');

      var results = _.filter(arrOfData, function(school) {
        return school.tuition <= inputTuition && (schoolMin <= school.size && school.size <= schoolMax);
      });

      results = _.uniq(results, 'id');

      results = _.sortBy(results, 'average_gpa');
      cb(null, results.reverse());

    } else if (inputTuition && !(schoolMax && schoolMin)) {
      inputTuition = inputTuition.replace(/\$/g, '');
      inputTuition = inputTuition.replace(/,/g, '');

      var results = _.filter(arrOfData, function (school) {
        return school.tuition <= inputTuition;
      });

      results = _.uniq(results, 'id');
      results = _.sortBy(results, 'average_gpa');
      cb(null, results.reverse());

    } else if (!inputTuition && (schoolMax && schoolMin)) {

      var results = _.filter(arrOfData, function(school) {
        return (schoolMin <= school.size) && (school.size <= schoolMax);
      });

      results = _.uniq(results, 'id');
      results = _.sortBy(results, 'average_gpa');
      cb(null, results.reverse());

    } else {

      var results = arrOfData;

      results = _.uniq(results, 'id');
      results = _.sortBy(results, 'average_gpa');
      cb(null, results.reverse());

    }
  });

};

module.exports.asyncMap = asyncMap;
module.exports.querySchoolTable = querySchoolTable;
module.exports.mySearchFunction = mySearchFunction;
