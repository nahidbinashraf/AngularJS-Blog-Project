angular
    .module('myapp', ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "Templates/posts.html",
                controller: 'posts'
            })
            .when("/addpost", {
                templateUrl: "Templates/addpost.html",
                controller: 'addpost'
            })
            .when("/mypost", {
                templateUrl: "Templates/mypost.html",
                controller: 'mypost'
            })
            .when("/postdetails/:id", {
                templateUrl: "Templates/postdetails.html",
                controller: 'postdetails'
            })
            .when("/authorpost/:author", {
                templateUrl: "Templates/authorpost.html",
                controller: 'authorpost'
            })
            .when("/login", {
                templateUrl: "Templates/login.html",
                controller: 'login'
            })
            .when("/registration", {
                templateUrl: "Templates/registration.html",
                controller: 'registration'
            })
    
            .otherwise({
                redirectTo: "/",
                controller: 'posts'
            });

    })
