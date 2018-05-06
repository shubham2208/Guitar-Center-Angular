var guitarApp = angular.module('guitarApplication', ['ui.bootstrap','ui.router']);

guitarApp.service('User',function(){
    return {};
});
guitarApp.config(function($stateProvider,$urlRouterProvider){
      // $routeProvider.buyGuitar = function(){};
    $urlRouterProvider.otherwise('/home');
     $stateProvider
     .state('home',{
         url:'/home',
          templateUrl:'home.html',
        controller:'imageController'
     })
     .state('buy',{
         url:'/buy',
           templateUrl: 'confirmationPage.html'
     })
    .state('confirm',{
         url:'/confirm',
         templateUrl: 'confirm.html'
     });
     
    });

guitarApp.controller('imageController', function ($scope, $http, $location, User) {
    
    $http({
        method: 'GET',
        url: 'guitardata.json'})
    .then(function(response){
        
        $scope.guitars = response.data.allProducts;
    $scope.user = User;
    
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
       // var guitars = $scope.guitar;
//        console.log($scope.guitar.price);
        //slide image
   
        $scope.currentIndex=0;
        $scope.guitar = $scope.guitars[$scope.currentIndex];
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
        
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        
        $scope.guitar = $scope.guitars[$scope.currentIndex]; 
       console.log('indexprev'+$scope.currentIndex);
    
    
    };
    $scope.nextSlide = function () {
        
         $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1)?  ++$scope.currentIndex : 0 ;
        console.log('indexnext'+$scope.currentIndex);
         $scope.guitar = $scope.guitars[$scope.currentIndex];
        
    };
//        console.log('info'+$scope.guitar);
        
        $scope.custom = false;
     $scope.custom1 = false;
     $scope.custom2 = false;
    $scope.toggleCustom = function(){
        $scope.custom = !$scope.custom;
        $scope.custom1 = $scope.custom1;
        $scope.custom2 = $scope.custom2;
    };
    $scope.toggleCustom1 = function(){
        $scope.custom = $scope.custom;
        $scope.custom1 = !$scope.custom1;
        $scope.custom2 = $scope.custom2;
    };
     $scope.toggleCustom2 = function(){
        $scope.custom = $scope.custom;
        $scope.custom1 = $scope.custom1;
        $scope.custom2 = !$scope.custom2;
    };
    
    $scope.buyGuitar = function(){
        $location.path('/buy');
        $scope.user.slide = $scope.slides[$scope.currentIndex];
        $scope.user.detail = $scope.guitar;
    console.log($scope.user.slide);
    console.log($scope.user.detail);
    };

      });   

    
   
});
 

guitarApp.controller('orderDetail',function($scope, User, $location){
    $scope.user = User;
    $scope.orderedImage = $scope.user.slide;
    $scope.orderedImageDes = $scope.user.detail;
    
    
    //show review section
    
    $scope.custom = true;
    
    $scope.reviewOrder = function(){
           $scope.custom = false;
    };
//    $scope.total = function(){
//        return $scope.orderedImageDes;
//    }
    $scope.editInfo = function(){
        $scope.custom = true;
        console.log('hi');
    };
     $scope.buyGuitar = function(){
         $location.path('/confirm'); 
    };
    
});
   

guitarApp.controller('confirmOrder',function($scope, User, $location){
    $scope.user = User;
    $scope.orderedImage = $scope.user.slide;
    $scope.orderedImageDes = $scope.user.detail;
    
    
    $scope.home = function(){
        $location.path('/home');
    };
});



