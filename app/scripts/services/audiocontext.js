'use strict';

/**
 * @ngdoc service
 * @name webAudioApiApp.AudioContext
 * @description
 * # AudioContext
 * Service in the webAudioApiApp.
 */
angular.module('webAudioApiApp')
  .service('AudioContext', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var context = new (window.AudioContext || window.webkitAudioContext)();
    this.testFunc = function() {
      console.log("A");
    }
  });
