angular.module('app.controllers', [])
  
.controller('welcomeCtrl', function($scope,$cordovaCamera,$cordovaDevice) {
     $scope.ready = false;
     
 document.addEventListener('deviceready', function () {
     $scope.ready = true;
     $scope.device = $cordovaDevice.getDevice();
     $scope.takeImage = function() {
     console.log(Camera)
        var options = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 250,
            targetHeight: 250,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
         
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.srcImage = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // error
        });
    }
 });

})
 