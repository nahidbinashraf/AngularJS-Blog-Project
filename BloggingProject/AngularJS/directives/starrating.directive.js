angular
    .module('myapp')
    .directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                ratingValueAll: '=',
                
                onRatingSelected: '&',
            },
            link: function (scope, elem, attrs) {
                scope.$watch('ratingValue', function (newValue, oldValue) {
                    debugger;
                    if (newValue || newValue == null) {
                        updateStars();
                    }
                });

                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < 5; i++) {
                        if (scope.ratingValue == 0) {
                            scope.stars.push({
                                filled: i < 5
                            });
                        }
                        else {
                            scope.stars.push({
                                filled: i < scope.ratingValue
                            });
                        }

                    }
                };
                scope.toggle = function (index) {

                    scope.ratingValue =  index + 1;
                    scope.onRatingSelected({
                        rating: index + 1,

                    });
                };
            }
        }
    })