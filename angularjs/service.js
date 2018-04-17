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
}]);