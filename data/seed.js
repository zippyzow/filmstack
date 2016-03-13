/**
 * Created by haileykeen on 3/10/16.
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
      console.log('HEY WE MADE IT', counter);
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
function isValid(movieObj) {
  var genres = movieObj.genre;
  for (var i = 0; i < genres.length; i++) {
    if (rejectedGenres.indexOf(genres[i]) !== -1) {
      return false;
    }
  }
  return true;
}

function correctMovieData(movie) {
  for (var key in movie) {
    movie[key.toLowerCase()] = movie[key];
    delete movie[key];
  }
  movie.year = parseInt(movie.year);
  movie.runtime = parseInt(movie.runtime);
  movie.genre = movie.genre ? movie.genre.split(', ') : [];
}


// 4 h
// 1 h 5 min
// 1,875 min


