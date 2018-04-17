angular.module('ListApp').filter('binaryfilter', [function () {
    return function (dato){
        return dato.toString(2);
    };
}]);