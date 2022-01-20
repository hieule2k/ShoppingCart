angular.module("cart").component("cart", {
  templateUrl: "cart/cart.html",
  controller: [
    "$http",
    "$routeParams",
    function cartController($http, $routeParams) {
      var self = this;

      $http
        .get("./shoes/" + $routeParams.productId + ".json")
        .then(function (response) {
          self.cart = response.data;
        });
    },
  ],
});
