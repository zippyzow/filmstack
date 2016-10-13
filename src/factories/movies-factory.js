peeweeModule.factory('moviesFactory', function($http) {
  return {
    getMovies: function(year, genres, runtime) {
      console.log('getMovies');

      var queryParams = {};

      if (year) {
        queryParams.year = year.join(',');
      }
      if (genres) {
        queryParams.genres = genres.join(',');
      }
      if (runtime) {
        queryParams.runtime = runtime.join(',');
      }

      return $http.get('/query', {params: queryParams}).then(function(response) {
        return response.data;

        // strip the http from the poster urls for all movies.
        // return response.data.map(function(movie) {
        //   movie.poster = movie.poster.replace('http:', 'https:');
        //   return movie;
        // });
      });
    }
  }
});