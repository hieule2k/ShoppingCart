angular.module("product").component("product", {
  templateUrl: "product/product.html",
  controller: [
    "#http",
    function productController($http) {
      var self = this;
      $http.get("/app/product.json").then(function (response) {});
    },
  ],
});
