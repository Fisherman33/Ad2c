'use strict';

angular.module('ad2c')

    .component('home', {
        templateUrl: '/components/home/home.html',
        controller: Home
    })

function Home($scope, $http) {

    $scope.getValue = function () {
        var form = {
            company: $scope.company,
            phone: $scope.phone,
            email: $scope.email,
            contactname: $scope.contact_name,
            address: $scope.address,
            askForContact: $scope.contactbox,
            serigraphie: $scope.serig,
            seriData: {
                pan: $scope.panCheck,
                enseinges: $scope.enseingesCheck,
                autocol: $scope.autocolCheck,
                textile: $scope.textilesCheck,
                stands: $scope.standsCheck,
                obj: $scope.objCheck,
                bache: $scope.bacheCheck,
                decovCheck: $scope.decovCheck,
                tampons: $scope.tamponsCheck,
                graph: $scope.graphCheck,
                other: $scope.autrecheck
            },
            imprimerie: $scope.imprime,
            imprimerieData: {
                productType: $scope.productType,
                quality: $scope.quality,
                format: $scope.format,
                amount: $scope.amount,
                recto: $scope.recto,
                pagesNumber: $scope.pagesNumber,
                fileF: $scope.fileF,
                finition: $scope.finition,
                remarques: $scope.remarques
            }
        }
    
        $http({
            url: 'http://localhost:3000/api.ad2c/quotations',
            method: "POST",
            data: JSON.stringify(form),
            headers: {'Content-Type': 'application/json'}
        }).then(function (data, status, headers, config) {
            console.log(data)
            $('#modal1').modal('close')
            $('#modal-success').modal('open')
            setTimeout(function(){
                $('#modal-success').modal('close')
            },2000)
        }).catch(function(error) {
            console.log('ERROR!!!! ', error)
            $('#modal1').modal('close')
            $('#modal-error').modal('open')
            setTimeout(function(){
                $('#modal-error').modal('close')
            },2000)
        })

    };
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 100, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) {},
        complete: function () { } // Callback for Modal close
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





