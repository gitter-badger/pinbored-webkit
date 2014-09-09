'use strict';

/**
 * @ngdoc function
 * @name pinboredWebkitApp.controller:ModalConfirmCtrl
 * @description
 * # ModalConfirmCtrl
 * Controller of the pinboredWebkitApp
 */
angular.module('pinboredWebkitApp')
  .controller('ModalConfirmCtrl', function ($scope, $modalInstance, message, Usersessionservice) {
    
    // check if user is logged in on Pinboard
    if (Usersessionservice.isAuthenticated() === false) {
      return;
    }

    // parse message for newlines etc. and store it
    $scope.message = message.replace('\n', '<br/>');

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

  });