'use strict';

angular.module('ad2c')

    .component('imprimerie', {
        templateUrl: '/components/imprimerie/imprimerie.html',
        controller: Imprimerie
    })

function Imprimerie() {
     $('.carousel').carousel();
}
