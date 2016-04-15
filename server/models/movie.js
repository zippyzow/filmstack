/**
 * Created by haileykeen on 2/1/16.
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/peewee');
console.log(process.env);
mongoose.connect("mongodb://admin:admin@ds023108.mlab.com:23108/filmstack");
mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error: '));

var movieSchema = new mongoose.Schema({});

/**
 * Main query for a list of movies.
 * @param {number|Array<number>} year If year is a number it represents a single year. Otherwise, it must be an array of
 * two numbers. The first number is the starting year and the last number is the ending year (both inclusive).
 * @param {Array<number>} runtime Must be an array of two numbers. The first number is the start and the last
 * number is the end (both inclusive).
 * @param {Array<string>} genres Will match any genre in this array.
 * @param cb
 */
movieSchema.statics.list = function(year, runtime, genres, cb) {
  var query = this.find({}).limit(200);

  if (year) {
    if (typeof year === 'number') {
      query = query.where('year').equals(year);
    } else if (Array.isArray(year) && year.length === 2) {
      query = query.where('year').gte(year[0]).lte(year[1]);
    } else {
      throw new Error('Invalid year parameter: ' + year);
    }
  }

  if (runtime) {
    if (Array.isArray(runtime) && runtime.length === 2) {
      query = query.where('runtime').gte(runtime[0]).lte(runtime[1]);
    } else {
      throw new Error('Invalid runtime parameter: ' + runtime);
    }
  }

  if (genres) {
    if (Array.isArray(genres)) {
      query = query.where('genre').all(genres);
    } else {
      throw new Error('Invalid genres parameter: ' + genres);
    }
  }
  query.exec(cb);
};

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;