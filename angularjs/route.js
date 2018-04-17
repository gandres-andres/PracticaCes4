angular.module('ListApp').config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "list.html"
    })
    .when("/detail", {
        templateUrl : "detail.html"
    });
});