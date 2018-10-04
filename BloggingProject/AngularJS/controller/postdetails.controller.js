angular
    .module('myapp')
    .controller('postdetails', postdetails)
function postdetails($scope, $http, $routeParams, $window, $location, apiFactory) {
    var id = $routeParams.id;
    $scope.postfid = id;

   
    var getpostById = apiFactory.getPostdetails(id)
    getpostById.then(function (response) {
        $scope.postsdetails = response.data;
    }, function myError(response) {
        $scope.detailspostserror = response.statusText;
        })

    //for getting comments
    var getComments = apiFactory.getComments(id)
    getComments.then(function (response) {
        $scope.comments = response.data;
    }, function myError(response) {
        $scope.detailspostserror = response.statusText;
        })
    //for rating
    //$scope.rating = 1;
    
    $scope.getSelectedRating = function (rating) {
        $scope.rating = rating ;
    }
    $scope.postrating = function () {
        var postrankdata = {
            Rating: $scope.rating
            
        };
        var postrank = apiFactory.editpostforrating($scope.postfid, postrankdata)
        postrank.then(function (response) {

        }, function myError(response) {
            $scope.detailspostrank = response.statusText;
        })
    };

    //for post comments
    $scope.submitComments = function () {
        if (sessionStorage.getItem('accessToken') === null) {
            $location.path('/login')
        }
        else {
            var postCommentsData =
                {
                    CommentsName: sessionStorage.getItem('userName'),
                    CommentsDetails: $scope.inputcomments,
                    PostFId: $scope.postfid
                };
            var postComment = apiFactory.postComments(postCommentsData)
            postComment.then(function (response) {
                $window.location.reload();
            }, function myError(response) {
                $scope.detailspostserror = response.statusText;
            })
        }
    }
}