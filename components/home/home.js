'use strict';

angular.module('ad2c')

    .component('home', {
        templateUrl: '/components/home/home.html',
        controller: Home
    })

function Home($scope) {
    // Controller

    // $scope.getSwitchValue = function () {
    //     // alert(angular.element('#my-switch').prop('checked'));
    //     console.log(angular.element('#my-switch').prop('checked'));
    //     console.log(angular.element('#my-switch1').prop('checked'));
    //     console.log(angular.element('#amounted').val());
    // };

    $scope.getValue = function () {
        // alert(angular.element('#my-switch').prop('checked'));
  
        // console.log(angular.element('input').val());
        console.log(angular.element('#first_name').val());
        console.log(angular.element('#adress').val());
        console.log(angular.element('#last_name').val());
        console.log(angular.element('#contact_name').val());
        console.log(angular.element('#email').val());
        console.log(angular.element('#typeP').val());
        console.log(angular.element('#qualite').val());
        console.log(angular.element('#format').val());
        console.log(angular.element('#amount').val());
        console.log(angular.element('#pages').val());
        console.log(angular.element('#finition').val());
        console.log(angular.element('#remarque').val());

        console.log(angular.element('#contactCheck').prop('checked'));
        console.log(angular.element('#seri').prop('checked'));
        console.log(angular.element('#impri').prop('checked'));
        console.log(angular.element('#fileF').prop('checked'));
        console.log(angular.element('#RecVer').prop('checked'));
        console.log(angular.element('#panCheck').prop('checked'));
        console.log(angular.element('#enseignesCheck').prop('checked'));
        console.log(angular.element('#autocolCheck').prop('checked'));
        console.log(angular.element('#textilesCheck').prop('checked'));
        console.log(angular.element('#standsCheck').prop('checked'));
        console.log(angular.element('#objCheck').prop('checked'));
        console.log(angular.element('#bacheCheck').prop('checked'));
        console.log(angular.element('#decovCheck').prop('checked'));
        console.log(angular.element('#tamponsCheck').prop('checked'));
        console.log(angular.element('#graphCheck').prop('checked'));
        console.log(angular.element('#autrecheck').prop('checked'));
    };
    // console.log($scope.amounted);
    // console.log(angular.element('inputVal').val())
    // // } ;
    // console.log($scope.inputVal);

    // $scope.$watch('inputVal', function (val) {
    //     if (val) {
    //         console.log(val);
    //     }
    // });

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
        ready: function (modal, trigger) { 
            alert('Site en maintenance l envoi de devis est impossible');// Callback for Modal open. Modal and trigger parameters available.
        },
        complete: function () { } // Callback for Modal close
    }
    );
    // $(document).ready(function () {
    //     $('.collapsible').collapsible();
    // });


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





