const app = Vue.createApp({
  data() {
    return {
      enteredProduct: "",
      enteredNumberOfProduct: "",
      products: [],
      total: "",
    };
  },
  computed: {
    sumTotal() {
      if (this.products.length === 0) {
        return (this.total = 0);
      } else {
        return (this.total = this.products
          .map((col) => col[1])
          .reduce((a, b) => a + b));
      }
    },
    validateTotal() {
      return {
        "h3 alert alert-danger": this.total === 0,
        "h3 alert alert-success": this.total > 0,
      };
    },
  },
  methods: {
    addProduct() {
      if (this.enteredProduct !== "" && this.enteredNumberOfProduct !== "") {
        this.products.push([this.enteredProduct, this.enteredNumberOfProduct]);
        this.enteredProduct = "";
        this.enteredNumberOfProduct = "";
      }
    },
    removeProduct(idx) {
      this.products.splice(idx, 1);
    },
    removeAll() {
      this.products = [];
    },
  },
});

app.mount("#ejercicio1");
