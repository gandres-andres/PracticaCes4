angular.module('ListApp').controller('detailController', ['factory', function (factory) {
    var vm = this;
    vm.detail = factory.user;

}]);