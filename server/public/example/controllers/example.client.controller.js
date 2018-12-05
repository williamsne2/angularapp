angular.module('example').controller('ExampleController', 
['$scope', 'Authentication', 
function($scope, Authentication) {
    $scope.firstName = Authentication.user ? Authentication.user.firstName : 'Mean';
    $scope.lastName = Authentication.user ? Authentication.user.lastName : 'Application';
    }
]);