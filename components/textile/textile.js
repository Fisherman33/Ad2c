'use strict';

angular.module('ad2c')

    .component('textile', {
        templateUrl: '/components/textile/textile.html',
        controller: Textile
    })

function Textile() {
    // Controller
    $('.carousel').carousel();
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) {
            alert('Site en maintenance l envoi de devis est impossible');// Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function () {
        } // Callback for Modal close
    }
    );
}

