<<<<<<< HEAD
angular.module('ListApp').service('service', ['$http', '$q', 'factory', '$rootScope', function ($http, $q, factory, $rootScope) {
    function emitReady() {
        $rootScope.$emit("Ready");
        $rootScope.Ready = true;
    }
    $http.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
        emitReady(factory.users = res.data);
    }, function (err) {
        console.log(err);
    });
=======
angular.module('ListApp').service('service', ['$http', '$q', 'factory', '$rootScope', function ($http, $q, factory, $rootScope) {
    function emitReady() {
        $rootScope.$emit("Ready");
        $rootScope.Ready = true;
    }
    $http.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
        emitReady(factory.users = res.data);
    }, function (err) {
        console.log(err);
    });
>>>>>>> fbab4352561fb5aa4b7945df4b8d0d0476bb44e9
}]);