angular
    .module('myapp')
    .controller('addpost', addpost)
function addpost($scope, $http, $location, apiFactory) {
    //validating authoriaztion 
    if (sessionStorage.getItem('accessToken') === null) {
        $location.path('/login')
    }

    else {
        //calling services to api data
        //for submitting post 
        $scope.submitPost = function () {
            var datas =
                {
                    PostTitle: $scope.inputPostTitle,
                    Postdetails: $scope.inputPostDetails,
                    UserFId: sessionStorage.getItem('userId')
                };
            //for post data
            var postdata = apiFactory.postAdd(datas);
            postdata.then(function (response) {
                $location.path('/mypost');
            })
            function myError(response) {
                alert(response.statusText);

            }
        }

    }
}