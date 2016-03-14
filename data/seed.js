/**
 * Created by haileykeen on 3/10/16.
 *
 * must give node more memory when running this script
 * $ node --max-old-space-size=8192 seed.js
 */
var mongoose = require('mongoose');
var fs = require('fs');
var readline = require('readline');
var execSync = require('child_process').execSync;

var inputPath = "../../../omdbMovies.txt";

var numLines = parseInt(execSync('wc -l ' + inputPath).toString());
console.log(numLines);

mongoose.connect('mongodb://localhost/peewee');
mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error: '));
var moviesCollection = mongoose.connection.collection('movies');
moviesCollection.drop(function(err) {
  console.log('movies collection dropped');
});

//input interface
var rl = readline.createInterface({
  input: fs.createReadStream(inputPath, {encoding: 'ascii'}),
  output: process.stdout,
  terminal: false
});

//output interface
var fd = fs.openSync('omdb-data.json', 'w');

var numMoviesAdded = 0;
var counter = 0;
var headers;
//reading file line by line (event loop)
rl.on('line', function(line) {
  //writing movie json
  if (counter === 0) {
    headers = line.split('\t');
  } else {
    if (counter % 1000 === 0) {
      console.log('Status: ' + numMoviesAdded + ' out of ' + counter + ' added');
    }

    var movieObj = {};
    var values = line.split('\t');
    for (var i = 0; i < headers.length; i++) {
      movieObj[headers[i]] = values[i];
    }

    correctMovieData(movieObj);

    if (isValid(movieObj)) {
      moviesCollection.insert(movieObj);
      numMoviesAdded++;
    }
  }

  if (counter === numLines - 1) {
    console.log('Passed through ' + counter + ' movies');
    console.log('Added a total of ' + numMoviesAdded + ' movies');
    rl.close();
  }

  counter++;
});

var rejectedGenres = ['Adult', 'Game-Show', 'News', 'Reality-TV', 'Talk-Show'];
var mustHaveTheseFields = ['title', 'year', 'runtime', 'director', 'cast', 'plot', 'poster'];
function isValid(movieObj) {
  var genres = movieObj.genre;
  for (var i = 0; i < genres.length; i++) {
    if (rejectedGenres.indexOf(genres[i]) !== -1) {
      return false;
    }
  }
  for (var j = 0; j < mustHaveTheseFields.length; j++) {
    var value = movieObj[mustHaveTheseFields[j]];
    if (value === null || value === undefined || value === '') {
      return false;
    }
  }
  return true;
};

function correctMovieData(movie) {
  for (var key in movie) {
    movie[key.toLowerCase()] = movie[key];
    delete movie[key];
  }
  movie.year = parseInt(movie.year);
  movie.runtime = correctRuntime(movie.runtime);
  movie.genre = movie.genre ? movie.genre.split(', ') : [];
};

function correctRuntime(oldRuntime) {
  if (oldRuntime) {
    oldRuntime = oldRuntime.replace(',', '');
    var split = oldRuntime.split('h');
    if (split.length === 1) {
      return parseInt(oldRuntime);
    } else {
      var newRuntime = parseInt(split[0]) * 60;
      if (split[1] !== '') {
        newRuntime += parseInt(split[1]);
      }
      return newRuntime;
    }
  }
};



