angular.module("cart").component("cart", {
  templateUrl: "cart/cart.html",
  controller: [
    "$http",
    "$routeParams",
    function cartController($http, $routeParams) {
      var self = this;

      $http
        .get("/angularApp/app/shoes/" + $routeParams.productId + ".json")
        .then(function (response) {
          self.cart = response.data;
        });
    },
  ],
});
