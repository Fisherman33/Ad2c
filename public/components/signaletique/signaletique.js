'use strict';

angular.module('ad2c')

    .component('signaletique', {
        templateUrl: '/components/signaletique/signaletique.html',
        controller: Signaletique
    })

function Signaletique() {

    //carousel
    $('.carousel').carousel({
         padding: 100 ,
         shift: 50,
         dist: -90,
        indicators: true,

    });
    (function () {
        $(document).on('click', '.accordion .header', function (e) {
            var questionElement, questionIndex;
            questionElement = $(this).parent('.valve');
            questionIndex = $(questionElement).index();
            $(questionElement).toggleClass('open');
            if (!$(questionElement).hasClass('open')) {
                $(questionElement).find('.icon').text('+');
                return $('.accordion .valve.closed').removeClass('closed');
            } else {
                $(questionElement).find('.icon').text('-');
                $('.accordion .valve:lt(' + questionIndex + ')').addClass('closed').removeClass('open');
                return $('.accordion .valve.closed .icon').text('+');
            }
        });

    }).call(this);

}