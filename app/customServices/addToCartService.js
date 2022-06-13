myApp.service("hehe", [
  function () {
    var obj = {
      orderProducts: [],
      totalProducts: 0,
      totalAmount: 0,
    };

    obj.addProducts = function (newSneaker) {
      for (i = 0; i < obj.orderProducts.length; i++) {
        if (obj.orderProducts[i].information.id == newSneaker.information.id) {
          obj.orderProducts[i].information.orderQuantity += 1;
          obj.totalProducts += 1;
          obj.totalAmount += obj.orderProducts[i].information.currency;
          return;
        }
      }

      if (newSneaker) {
        obj.orderProducts.push(newSneaker);
        obj.totalAmount += parseFloat(
          obj.orderProducts[i].information.currency
        );
        obj.totalProducts += 1;
      }
    };
    obj.remove = function (index) {
      if (index > -1) {
        if (obj.orderProducts[index].information.orderQuantity >= 1) {
          obj.totalAmount -=
            obj.orderProducts[index].information.currency *
            obj.orderProducts[index].information.orderQuantity;
          obj.totalProducts -=
            obj.orderProducts[index].information.orderQuantity;
          obj.orderProducts.splice(index, 1);
        }
      }
    };
    obj.inc = function (index) {
      obj.totalProducts += 1;
      obj.orderProducts[index].information.orderQuantity += 1;
      obj.totalAmount += obj.orderProducts[index].information.currency;
    };
    obj.dec = function (index) {
      if (obj.orderProducts[index].information.orderQuantity > 1) {
        obj.totalProducts -= 1;
        obj.orderProducts[index].information.orderQuantity -= 1;
        obj.totalAmount -= obj.orderProducts[index].information.currency;
      } else {
        obj.totalAmount -=
          obj.orderProducts[index].information.currency *
          obj.orderProducts[index].information.orderQuantity;
        obj.totalProducts -= obj.orderProducts[index].information.orderQuantity;
        obj.orderProducts.splice(index, 1);
      }
    };
    return obj;
  },
]);
