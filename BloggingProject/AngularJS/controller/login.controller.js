angular
    .module('myapp')
    .controller('login', login)
function login($scope, $http, $location, $rootScope, $httpParamSerializerJQLike, apiFactory) {
    //login submit 

    //validating authoriaztion 
    if (sessionStorage.getItem('accessToken') != null) {
        $rootScope.UserVal = sessionStorage.getItem("userName");
        $location.path('/mypost');
      
    }
    else {
        $scope.loginSubmit = function () {
            var datas =
                {
                    username: $scope.UserLoginEmail,
                    password: $scope.UserLoginPassword,
                    "grant_type": "password"
                };
            //calling services to  api data
            //for login post 
            var loginPost = apiFactory.postlogin(datas);
            loginPost.then(function mySuccess(response) {

                sessionStorage.setItem("accessToken", response.data.access_token);
                sessionStorage.setItem("userId", response.data.userId);
                sessionStorage.setItem("userName", response.data.userName);

                $location.path('/mypost');

            }, function myError(response) {

                $scope.loginError = "Something Went Wrong. Use right email & password " + response.statusText;
            })

        }
    }

}