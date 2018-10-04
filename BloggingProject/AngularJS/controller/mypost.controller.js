angular
    .module('myapp')
    .controller('mypost', mypost)
function mypost($scope, $http, $location, $window, apiFactory) {

    //validating authoriaztion 
    if (sessionStorage.getItem('accessToken') === null) {
        $location.path('/login')
        
    }
    else {
        var username = sessionStorage.getItem("userName");
        //calling services to api data
        //for getting post by id
        var getMypost = apiFactory.getmypost(username)
            .then(function mySuccess(response) {
                $scope.myposts = response.data;
            }, function myError(response) {
                $scope.mypostserror = response.statusText;
            });

        //for deleting post
        $scope.deleteMyPost = function (id) {
            var deleteMypost = apiFactory.deleteMypost(id)
                .then(function mySuccess(response) {
                    alert("Succesfully delete");
                    $window.location.reload();
                }, function myError(response) {
                    $scope.mypostserror = response.statusText;
                });
        }

    }

    //for logut
    $scope.logoff = function () {
        sessionStorage.removeItem('accessToken');
        $location.path('/login');
    }

}
