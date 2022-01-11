angular.module("myApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/product", {
        template: "<product></product>",
      })
      .when("/cart", {
        template: "<cart></cart>",
      })
      .otherwise("/product");
  },
]);
