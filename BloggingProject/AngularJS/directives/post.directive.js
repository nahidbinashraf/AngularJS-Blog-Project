angular 
    .module('myapp')
    .directive('postDirective', function () {
        return {
            restrict: 'EA',
            templateUrl: 'AngularJS/directives/partial/post.directive.html',
            scope: {
                posts: "=",
               
            }
        }
    })
