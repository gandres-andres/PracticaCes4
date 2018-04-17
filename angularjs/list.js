<<<<<<< HEAD
angular.module('ListApp', ['ngRoute'])

angular.module('ListApp').controller('listController', ['service', 'factory', '$rootScope', function (listService, factory, $rootScope) {
    var vm = this;
    if ($rootScope.Ready == true) {
        vm.list = factory.users;
    } else {
        $rootScope.$on("Ready", function () {
            vm.list = factory.users;
        });
    }

    vm.getDetail = function (user) {
        factory.user = user;
    }
=======
angular.module('ListApp', ['ngRoute'])

angular.module('ListApp').controller('listController', ['service', 'factory', '$rootScope', function (listService, factory, $rootScope) {
    var vm = this;
    if ($rootScope.Ready == true) {
        vm.list = factory.users;
    } else {
        $rootScope.$on("Ready", function () {
            vm.list = factory.users;
        });
    }

    vm.getDetail = function (user) {
        factory.user = user;
    }
>>>>>>> fbab4352561fb5aa4b7945df4b8d0d0476bb44e9
}]);