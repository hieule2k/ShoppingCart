angular.module("cart").component("cart", {
  templateUrl: "cart/cart.html ",
  controller: [
    "$http",
    "$routeParams",
    "$scope",
    "hehe",

    function cartController($http, $routeParams, $scope, hehe) {
      var self = this;

      self.setImage = function (image) {
        self.mainImage = image;
      };

      // $scope.status = false;
      // $scope.clickOn = function () {
      //   var buttonSizes = document.querySelectorAll(".active");
      //   angular.forEach(buttonSizes, function (buttonSize) {
      //     if (buttonSize.classList.contains("active")) {
      //       buttonSize.classList.remove("active");
      //       // $scope.status = !$scope.status;
      //     }
      //   });

      //   this.status = !this.status;

      // };

      var sizes = [];

      $scope.carts = [];
      // $scope.total = 0;

      $scope.removeCart = function (i) {
        $scope.carts.splice(i, 1);
        // getTotals();
      };
      $http
        .get("./shoes/" + $routeParams.productId + ".json")
        .then(function (response) {
          self.cart = response.data;

          self.setImage(self.cart.images[0]);
          $scope.product = self.cart;
          $scope.order = hehe;
          $scope.addCart = function (product) {
            hehe.addProducts(product);
          };
          // $scope.products.push(JSON.parse(JSON.stringify(self.cart)));

          // $scope.addCart = addCart;
          // function addCart() {
          //   $scope.carts.push({
          //     p_name: $scope.products[0].information.name,
          //     p_price: $scope.products[0].information.currency,
          //     p_image: $scope.products[0].images[0],
          //     p_size: $scope.products[1],
          //   });

          //   console.log($scope.carts);
          // }
        });
    },
  ],
});
