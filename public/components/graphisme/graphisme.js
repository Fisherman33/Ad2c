'use strict';

angular.module('ad2c')

  .component('graphisme', {
    templateUrl: '/components/graphisme/graphisme.html',
    controller: Graphisme
  })

function Graphisme($scope) {
  // Controller

  $('.carousel').carousel({
        //  padding: 100 ,
        //  shift: 50,
        //  dist: -70,
  });

}

