angular
    .module('myapp')
    .controller('posts', posts )
function posts($scope, $http, apiFactory) {
    //calling services to  api data
    //for getting post 
    var getallposts = apiFactory.getallpost()
    getallposts.then(function mySuccess(response) {
        $scope.allposts = response.data;
    }, function myError(response) {
        $scope.allpostserror = response.statusText;

    });
}
