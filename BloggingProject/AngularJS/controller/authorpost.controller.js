angular
    .module('myapp')
    .controller('authorpost', authorpost)
function authorpost($scope, $http, $routeParams, apiFactory) {
    var author = $routeParams.author;
    //calling services to  api data
    //for getting author post
    var getauthorpostg = apiFactory.getauthorpost(author);
    getauthorpostg.then(function mySuccess(response) {
        $scope.authorposts = response.data;
    }, function myError(response) {
        $scope.authorpostserror = response.statusText;
        });

    $scope.getAverageValue = function (type) {
        var avg = 0;
        var count = 0;
        angular.forEach($scope.authorposts, function (el) {
            count++;
            avg = (avg + el[type]) / count;
            
        });
        return avg;
    };
}