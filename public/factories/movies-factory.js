peeweeModule.factory('moviesFactory', function($http) {
  return {
    getMovies: function(year, genres, runtime) {

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
      });
    }
  }
});