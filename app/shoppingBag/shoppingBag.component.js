angular.module("bag").component("bag", {
  templateUrl: "shoppingBag/shoppingBag.html",
  controller: [
    "$http",
    "$routeParams",
    "$scope",
    "hehe",

    function bagController($http, $routeParams, $scope, hehe) {
      $scope.carts = hehe.orderProducts;

      if ($scope.carts.length != 0) {
        for (let i = 0; i < $scope.carts.length; i++) {
          $scope.selectedSize = $scope.carts[i].sizes[0];
        }
      }
      // var index=$scope.carts.findIndex(object=>{
      //   return object.id ==
      // })
      $scope.remove = function (index) {
        hehe.remove(index);
      };
      $scope.inc = function (index) {
        hehe.inc(index);
      };
      $scope.dec = function (index) {
        hehe.dec(index);
      };
      $scope.order = hehe;
    },
  ],
});
