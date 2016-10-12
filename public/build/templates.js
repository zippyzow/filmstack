angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<natural-lang-selector></natural-lang-selector>\n<pw-movie-results></pw-movie-results>");
$templateCache.put("movie_results/movie-results.html","<div class=\"no-results-message\" ng-show=\"movies.length === 0 && !isLoading\">\n  <div>No results. Try choosing fewer genres.</div>\n  <br><br>\n  <img src=\"images/popcorn-cat.png\">\n</div>\n<md-grid-list ng-show=\"movies.length > 0\" class=\"movie-results\" md-cols=\"3\"\n              md-row-height=\"270px\"\n              md-gutter=\"20px\">\n  <md-grid-tile ng-cloak ng-repeat=\"movie in movies | orderBy: \'title\'\">\n    <pw-movie-card class=\"movie-card\" movie=\"movie\"></pw-movie-card>\n  </md-grid-tile>\n</md-grid-list>\n");
$templateCache.put("natural_lang_selector/natural-lang-selector.html","<div class=\"selectors-container\">\n  <span>I want to watch </span>\n\n  <!--GENRES-->\n  <md-select placeholder=\"any movie\"\n             multiple=\"true\"\n             class=\"selector md-no-underline\"\n             md-container-class=\"selector-option\"\n             ng-model=\"lol1\"\n             md-on-open=\"loadUsers()\"\n             style=\"min-width: 50px\">\n    <md-optgroup label=\"Choose genres\">\n      <md-option ng-value=\"genre\" ng-repeat=\"genre in genres |\n              filter:searchTerm\">{{genre.label}}</md-option>\n    </md-optgroup>\n  </md-select>\n\n  <span> from </span>\n  <br>\n\n  <!--DECADE-->\n  <md-select \n             class=\"selector md-no-underline\"\n             md-container-class=\"selector-option\"\n             ng-model=\"selectedDecade\" \n             style=\"min-width: 50px\">\n    <md-option class=\"selector-option\" ng-value=\"decade\" ng-repeat=\"decade in decades\">{{decade.label}}</md-option>\n  </md-select>\n  \n  <span>that is </span>\n\n  <!--RUNTIME-->\n  <md-select placeholder=\"any runtime\"\n             class=\"selector md-no-underline\"\n             md-container-class=\"selector-option\"\n             ng-model=\"selectedRuntime\"\n             style=\"min-width: 50px;\">\n    <md-option class=\"selector-option\" ng-value=\"runtime\" ng-repeat=\"runtime in runtimes\">{{runtime.label}}</md-option>\n  </md-select>\n\n<md-dialog aria-label=\"List dialog\">\n  <md-dialog-content>\n    <md-list>\n      <md-list-item ng-repeat=\"item in items\">\n        <p>Number {{item}}</p>\n      </md-list-item>\n    </md-list>\n  </md-dialog-content>\n  <md-dialog-actions>\n    <md-button ng-click=\"closeDialog()\" class=\"md-primary\">Close Dialog</md-button>\n  </md-dialog-actions>\n</md-dialog>\n\n</div>");
$templateCache.put("movie_results/movie_card/movie-card.html","<md-card class=\"card\">\n  <md-card-title>\n    <md-card-title-text>\n      <span class=\"movie-title md-headline\">{{ movie.title }}</span>\n      <md-chips class=\"genre-chips\" readonly=\"true\" ng-model=\"movie.genre\"></md-chips>\n      <div>\n        <span class=\"md-caption\"><b>Year:</b> {{ movie.year }}</span>\n        <br>\n        <span class=\"md-caption\"><b>Runtime:</b> {{ movie.runtime }} mins</span>\n        <br>\n        <span class=\"md-caption\"><b>Director:</b> {{ movie.director }}</span>\n        <br>\n        <span class=\"md-caption\"><b>Cast:</b> {{ movie.cast }}</span>\n        <br>\n        <span class=\"md-caption\"><b>Plot:</b> {{ movie.plot | limitTo: 100 }}{{movie.plot.length > 100   ? \'...\' : \'\' }}</span>\n      </div>\n    </md-card-title-text>\n      <div class=\"poster-container card-media\">\n        <img class=\"poster\" ng-src=\"{{ getProxyUrl(movie.poster) }}\"/>\n      </div>\n  </md-card-title>\n</md-card>");}]);