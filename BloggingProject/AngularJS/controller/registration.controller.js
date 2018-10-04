angular
    .module('myapp')
    .controller('registration', registration)
function registration($scope, $http, $location, apiFactory) {
    //registration
    $scope.registrationSubmit = function () {
        var datas =
            {
                UserName: $scope.UserRegisterName,
                email: $scope.UserRegisterEmail,
                password: $scope.UserRegisterPassword,
                confirmPassword: $scope.UserRegisterConfirmPassword
            };
        //calling services to  api data
        //for register post 
        var registration = apiFactory.postregister(datas)
        registration.then(function mySuccess(response) {
            $location.path('/login');
            
        }, function myError(response) {
            $scope.registerError = "Something Went Wrong. Use right email & password " + response.statusText;
            $scope.UserRegisterName = "";
            $scope.UserRegisterEmail = "";
            $scope.UserRegisterPassword = "";
            $scope.UserRegisterConfirmPassword = "";
        })

    }
}