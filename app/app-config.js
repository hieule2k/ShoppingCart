angular.module("myApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/product", {
        template: "<product></product>",
      })
      .when("/cart/:productId", {
        template: "<cart></cart>",
      })
      .when("/shoppingBag", {
        template: "<bag></bag>",
      })
      .otherwise("/product");
  },
]);
