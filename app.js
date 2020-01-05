var webstore = new Vue({
  el: "#app",

  data: {
    sitename: "Vue.js Pet Depot",
    showProduct: true,
    order: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      method: "Home Address",
      business: "Business Address",
      home: "Home Address",
      gift: "send As A Gift",
      sendGift: "send As A Gift",
      dontSendGift: "Do Not Send As A Gift"
    },
    states: {
      AL: "Alabama",
      AR: "Arizona",
      CA: "California",
      NV: "Nevada"
    },
    product: {
      id: 1001,
      title: "Cat Food, 25lb bag",
      description:
        "A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
      price: 2000,
      image: "assets/images/product-fullsize.png",
      availableInventory: 5
    },
    cart: []
  },

  methods: {
    addToCart: function() {
      this.cart.push(this.product.id);
      console.log("add");
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert("Submitted");
    }
  },

  computed: {
    cartItemCount: function() {
      return this.cart.length || "";
    },
    canAddToCart: function() {
      return this.product.availableInventory > this.cartItemCount;
    }
  },

  filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return "";
      }

      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;

        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }

        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  }
});
