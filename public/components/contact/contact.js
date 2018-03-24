'use strict';

angular.module('ad2c')

.component('contact', {
    templateUrl: '/components/contact/contact.html',
    controller: Contact
})

function initMap() {
    var ad2c = {lat: 44.5521653, lng: -0.2660612,};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: ad2c
    });
    console.log("ok");
    var marker = new google.maps.Marker({
      position: ad2c,
      map: map
    });
  }
function Contact() {
    // Controller

}