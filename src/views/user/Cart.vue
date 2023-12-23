<template>
  <div>
    <body class="bg-gray-100">
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">
                {{ cartItems.length }} Items
              </h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3
                class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
              >
                Quantity
              </h3>
              <h3
                class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
              >
                Price
              </h3>
              <h3
                class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center"
              >
                Total
              </h3>
            </div>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div class="flex w-2/5">
                <!-- product -->
                <div class="w-20">
                  <img :src="item.product.image" class="h-24" alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{{ item.product.name }}</span>
                  <span class="text-red-500 text-xs">{{
                    item.product.category.name
                  }}</span>
                  <a
                    href="#"
                    @click.prevent="removeItem(item)"
                    class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >Remove</a
                  >
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <input
                  class="mx-2 border text-center w-16"
                  type="number"
                  v-model="item.quantity"
                  min="1"
                />
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">
                {{ item.product.price }}</span
              >
              <span class="text-center w-1/5 font-semibold text-sm">
                {{ item.product.price * item.quantity }}$</span
              >
            </div>

            <a
              href="#"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                />
              </svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary" class="w-1/4 px-8 py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items 3</span>
            </div>
            <div class="border-t mt-8">
              <div
                class="flex font-semibold justify-between py-6 text-sm uppercase"
              >
                <span>Total cost</span>
                <span>{{ totalPrice }}$</span>
              </div>
            </div>
            <button
              @click="placeOrder"
              class="px-4 py-2 bg-red-400 rounded text-white font-bold"
            >
              PlaceOrder
            </button>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  data() {
    return {
      cartItems: [],
      quantity: 0,
    };
  },
  created() {
    this.loadCart();
  },
  methods: {
    async placeOrder() {
      try {
        let cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];
        let totalPrice = 0;
        let orderDate = new Date().toISOString();
        for (let item of cart) {
          totalPrice += item.price;
          const response = await axios.post(
            "https://toytoytoy.onrender.com/orders/createOrder",
            { Item: item, OrderDate: orderDate, TotalPrice: totalPrice }
          );
          console.log("Order item added:", response.data);
        }
        Cookies.remove("cart");
        alert("Order placed successfully");
      } catch (error) {
        console.error("Failed to place the order:", error);
        alert("Failed to place the order");
      }
    },
    loadCart() {
      this.cartItems = Cookies.get("cart")
        ? JSON.parse(Cookies.get("cart"))
        : [];
      console.log("Cart items:", this.cartItems);
    },
    removeItem(itemToRemove) {
      this.cartItems = this.cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      Cookies.set("cart", JSON.stringify(this.cartItems));
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + item.product.price * (item.quantity || 1);
      }, 0);
    },
  },
};
</script>
