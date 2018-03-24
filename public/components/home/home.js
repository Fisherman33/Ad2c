'use strict';

angular.module('ad2c')

    .component('home', {
        templateUrl: '/components/home/home.html',
        controller: Home
    })

function Home($scope) {
    // Controller

    // $('.carousel').carousel({
    //     fullWidth: true,
    //     padding: 0,
    //     shift: 0,
    //     dist: 0,
    //     indicators: true,
    //     noWrap: true,
    // });
    //  $('.slider').slider({
    //      height: 420,
    //      interval: 3000,
    //      transition: 700,
    //  });
   $('.carousel.carousel-slider').carousel({
       fullWidth: true,
       indicators: true,
   });
     $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      },
      complete: function() {  } // Callback for Modal close
    }
  );
      
    // Création du boutton scroll
    jQuery(window).scroll(function () {
        var duration = 500;
        if (jQuery(this).scrollTop() > 0) {
            // Si un défillement de 100 pixels ou plus.
            // Ajoute le bouton
            jQuery('.demo').fadeIn(duration);
        } else {
            // Sinon enlève le bouton

        }
    });
    //Click qui provoque le retour en haut animé scroll
    jQuery('.demo').click(function (event) {
        var duration = 1000;
        // vitesse de retour en haut de page
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 600 }, duration);
        return false;
    });


}





