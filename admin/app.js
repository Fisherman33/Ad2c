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
        name: 'login',
        url: '/',
        component: 'login'
    },
    {
        name: 'homeAdmin',
        url: '/homeAdmin',
        component: 'homeAdmin'
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
