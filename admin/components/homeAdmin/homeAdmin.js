'use strict';

angular.module('ad2c')

.component('homeAdmin', {
    templateUrl: './components/homeAdmin/homeAdmin.html',
    controller: HomeAdmin
})

angular.module('ad2c').directive('demoFileModel', function ($parse) {
    return {
        restrict: 'A', //the directive can be used as an attribute only

        /*
         link is a function that defines functionality of directive
         scope: scope associated with the element
         element: element on which this directive used
         attrs: key value pair of element attributes
         */
        link: function (scope, element, attrs) {
            var model = $parse(attrs.demoFileModel),
                modelSetter = model.assign; //define a setter for demoFileModel

            //Bind change event on the element
            element.bind('change', function () {
                //Call apply on scope, it checks for value changes and reflect them on UI
                scope.$apply(function () {
                    //set the model value
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});

function HomeAdmin($scope, $http, $window) {
    // Controller

    $scope.uploadFile = function () {
        var file = $scope.myFile;
        console.log("debug: ", file)
        var fileFormData = new FormData();
        fileFormData.append('file', file);

        console.log($window.sessionStorage.token)
           

        $http({
             url: 'http://localhost:3000/api.ad2c/news',
             method: "POST",
             headers: {
                 'Content-Type': undefined,
                 'Authorization': $window.sessionStorage.token
                },
            transformRequest: angular.identity,
            data: fileFormData,
            responseType: "arraybuffer"
            }).then(function (data, status, headers, config) {
                $('#modal-success').modal('open')
                setTimeout(function(){
                    $('#modal-success').modal('close')
                },2000)
            }).catch(function(error) {
                console.log(error)
                $('#modal-error').modal('open')
                setTimeout(function(){
                    $('#modal-error').modal('close')
                },2000)
            })
    };

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
}