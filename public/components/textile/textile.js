'use strict';

angular.module('ad2c')

    .component('textile', {
        templateUrl: '/components/textile/textile.html',
        controller: Textile
    })

function Textile() {
    // Controller
     $('.carousel').carousel();
}

