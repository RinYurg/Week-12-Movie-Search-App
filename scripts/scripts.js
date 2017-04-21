var app = angular.module('movieApp', []);
app.controller('movieCtrl', function($scope, $http){
	$scope.showMovies = function() {
	$http.get("http://www.omdbapi.com/?s="  + $("#search").val() ) 
	.then(function(response) {
		$scope.openField = response.data.Search;
		// console.log($scope.space);
	});
};

});





// $.getJSON("http://www.omdbapi.com/?s=moana", function(data) {
// 	console.log(data);

// 	for(var i = 0; i< data.Search.length; i++ ){
// 			$("body").append("<h1>" + data.Search[i].Title + "</h1>" + "<br><img src=" + data.Search[i].Poster +" />");
		
// 	}

// });
