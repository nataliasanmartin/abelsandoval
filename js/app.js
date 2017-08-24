// Define the `phonecatApp` module
var app = angular.module('app', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('AppController', function AppController($scope) {
  
  //Alerts
  $scope.showSuccessAlert = false;
  $scope.showWarningAlert = false;
  $scope.showErrorAlert = false;

  $scope.showSuccessAlertClick = function(){
    $scope.showSuccessAlert = true;
    $scope.showWarningAlert = false;
    $scope.showErrorAlert = false;      
  }

  $scope.showWarningAlertClick = function(){
    $scope.showSuccessAlert = false;
    $scope.showWarningAlert = true;
    $scope.showErrorAlert = false;      
  }

  $scope.showErrorAlertClick = function(){
    $scope.showSuccessAlert = false;
    $scope.showWarningAlert = false;
    $scope.showErrorAlert = true;      
  }

  $scope.hideAlertClick = function(){
    $scope.showSuccessAlert = false;
    $scope.showWarningAlert = false;
    $scope.showErrorAlert = false;      
  }

  //Fin Alerts

  //Badge
  $scope.badgeCounter = 0;
  $scope.clickBadge = function(){
    $scope.badgeCounter = $scope.badgeCounter + 1;
  }

  //Fin Badge 

  //Bebe
  $scope.showBebe = false;
  $scope.showBebeClick = function(){
    $scope.showBebe = !$scope.showBebe;
  }
  //Fin Bebe
});