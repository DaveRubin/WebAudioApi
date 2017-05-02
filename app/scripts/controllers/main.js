'use strict';

/**
 * @ngdoc function
 * @name webAudioApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAudioApiApp
 */
angular.module('webAudioApiApp')
  .controller('MainCtrl', function ($scope,AudioContext) {
    $scope.waveTypes = [
      'square',
      'sine',
      'sawtooth',
      'triangle'
    ];
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = context.createOscillator();
    oscillator.start();
    var biquadFilter = context.createBiquadFilter();

    biquadFilter.connect(context.destination);

    $scope.playing = false;
    $scope.waveType =  $scope.waveTypes[0];
    $scope.frequency = 100;
    $scope.playMode = 100;
    $scope.filterFrequency = 1000;

    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 25;


    $scope.$watch('filterFrequency', function(newValue, oldValue) {
      console.log("filterFrequency - "+ newValue);
      biquadFilter.frequency.value = newValue;
    });

    $scope.$watch('waveType', function(newValue, oldValue) {
      console.log("changed wave to - "+ newValue);
      oscillator.type = newValue;
    });

    $scope.$watch('frequency', function(newValue, oldValue) {
      console.log("changed frequency to - "+ newValue);
      oscillator.frequency.value = newValue;
    });

    $scope.$watch('playing', function(newValue, oldValue) {
      console.log("changed play to - "+ newValue);
      if (newValue) {
        oscillator.connect(biquadFilter);
      }
      else if (oldValue) {
        oscillator.disconnect(biquadFilter);
      }
    });

    $scope.playButtonPressed = function(e) {
      $scope.playing = !$scope.playing;
    }
  });
