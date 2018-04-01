'use strict'

const config = [
    '$stateProvider',
    '$urlRouterProvider',
    Config
]

const run = [
    '$state',
    Run
]

angular.module('ad2c', [
   'ui.router',
   'ngResource',
    // Here list your dependencies
])
.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }])
.config(config)
    .run(run)

function Config($stateProvider, $urlRouterProvider) {
    
    const states = [{
        name: 'home',
        url: '/',
        component: 'home'
    },
    {
        name: 'graphisme',
        url: '/graphisme',
        component: 'graphisme'
    },
    {
        name: 'imprimerie',
        url: '/imprimerie',
        component: 'imprimerie'
    },
    {
        name: 'signaletique',
        url: '/signaletique',
        component: 'signaletique'
    },
    {
        name: 'textile',
        url: '/textile',
        component: 'textile'
    },
    {
        name: 'contact',
        url: '/contact',
        component: 'contact'
    }];

    states.forEach((state) => {
        $stateProvider.state(state)
    });

   $urlRouterProvider.otherwise('/');
}

function Run($state) {
    if (!navigator.onLine) {
        $state.go('offline')
    }
}
