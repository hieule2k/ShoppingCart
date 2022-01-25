angular.module("cart").component("cart", {
  templateUrl: "cart/cart.html",
  controller: [
    "$http",
    "$routeParams",
    "$scope",
    function cartController($http, $routeParams, $scope) {
      var self = this;

      self.setImage = function (image) {
        self.mainImage = image;
      };

      $scope.clickOn = function () {
        $scope.alpha = true;
      };

      // scope.alpha = true;$

      $http
        .get("./shoes/" + $routeParams.productId + ".json")
        .then(function (response) {
          self.cart = response.data;
          self.setImage(self.cart.images[0]);
        });
    },
  ],
});
