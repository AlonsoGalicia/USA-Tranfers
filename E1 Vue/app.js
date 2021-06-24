const app = Vue.createApp({
  data() {
    return {
      enteredProduct: "",
      enteredNumberOfProduct: "",
      products: [],
      total: 0,
    };
  },
  methods: {
    addProduct() {
      if (this.enteredProduct !== "" && this.enteredNumberOfProduct !== "") {
        this.products.push([this.enteredProduct, this.enteredNumberOfProduct]);
        this.total = this.total + this.enteredNumberOfProduct;
        this.enteredProduct = "";
        this.enteredNumberOfProduct = "";
      }
    },
    removeProduct(idx) {
      this.total = this.total - this.products[idx][1];
      this.products.splice(idx, 1);
    },
    removeAll() {
      this.products = [];
      this.total = 0;
    },
  },
});

app.mount("#ejercicio1");
