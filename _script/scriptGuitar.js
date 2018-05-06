var guitarApp = angular.module('guitarApplication', ['ngRoute']);

guitarApp.service('User',function(){
    return {};
});
guitarApp.config(function($routeProvider){
       $routeProvider.buyGuitar = function(){};
     $routeProvider
     .when('/',{
          templateUrl:'home.html'});
     });
     
   guitarApp.controller('imageController', function ($scope, $http, $location) {
       $scope.slides = [
        {
            image: "_image/product1.jpg",
            description: "Product1"
        },
        {
            image: "_image/product2.jpg",
            description: "Product2"
        },
        {
            image: "_image/product3.jpg",
            description: "Product3"
        }
	];
       $scope._Index = 0;
       
       //Current image is the same as required image
       $scope.isCurrentSlideIndex = function(index){
           return $scope._Index === index;
       };
       // show prev image
       $scope.prevSlide = function(){
         $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.slides.length - 1; 
           console.log('Here: '+$scope._Index);
       };
       
       //Show next image
       
       $scope.nextSlide = function(){
           $scope._Index = ($scope._Index < $scope.slides.length - 1) ? ++$scope._Index : 0;
       };
   });
