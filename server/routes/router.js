/**
 * Created by haileykeen on 2/6/16.
 */
var express = require('express');
var router = express.Router();
var http = require('http');

var Movie = require('../models/movie');

function convertYear(year) {
  if (year) {
    if (year.indexOf(',') === -1) {
      return parseInt(year);
    } else {
      return year.split(',').map(Number);
    }
  }
}

function convertRuntime(duration) {
  if (duration) {
    return duration.split(',').map(Number);
  }
}

function convertGenres(genres) {
  if (genres) {
    return genres.split(',');
  }
}

router.get('/query', function(req, res) {
  var year = convertYear(req.query.year);
  var duration = convertRuntime(req.query.runtime);
  var genres = convertGenres(req.query.genres);
  var start = (new Date()).getTime();
  Movie.list(year, duration, genres, function(err, movies) {
    if (err) {
      throw err;
    } else {
      console.log('query took ' + ((new Date()).getTime() - start) + 'ms');
      res.send(movies);
    }
  });
});

router.get('/imageproxy/:url', function(req, res) {
  // res.send(req.params.url);
  http.get(decodeURI(req.params.url), function(httpRes) {
    httpRes.pipe(res);
  })
});

module.exports = router;