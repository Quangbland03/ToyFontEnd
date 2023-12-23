<template>
  <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img
              class="w-full h-full object-cover"
              :src="productDetail.image"
              alt=""
            />
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {{ productDetail.name }}
          </h2>
          <div class="flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {{ productDetail.description }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >Price:
              </span>
              <span class="text-gray-600 dark:text-gray-300">{{
                productDetail.price
              }}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >Availability:
              </span>
              <span class="text-gray-600 dark:text-gray-300">In Stock</span>
            </div>
          </div>
          <div>
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Category:
            </span>
            <span class="text-gray-600 dark:text-gray-300">{{
              productDetail.category.name
            }}</span>
          </div>
          <div>
            <p class="font-bold text-gray-700 dark:text-gray-300 mt-4">
              Quantity:
            </p>
            <input
              class="mt-4 justify-center items-start border-none outline-none border-1 border-yellow-100"
              type="number"
              min="1"
              v-model="quantity"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button
                @click="addToCart()"
                class="w-full mt-4 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Add to Cart
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button
                class="w-full mt-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "Detail",

  data() {
    return {
      productDetail: null,
      quantity: 1,
      token: Cookies.get("token"),
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.fetchProduct(productId);
  },
  methods: {
   
    addToCart() {
      if(this.token == null){
        alert("You do not login in website.")
      }
      else{
        let cart = [];
      if (Cookies.get("cart")) {
        cart = JSON.parse(Cookies.get("cart"));
      }
      const addProduct = {
        quantity: this. quantity,
        product: this.productDetail,
      };
      cart.push(addProduct);
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
      alert("Sản phẩm đã được thêm vào giỏ hàng");
      this.$router.push({ name: 'cart' });
      }
      
    },

    fetchProduct(id) {
      axios
        .get(`https://toytoytoy.onrender.com/detail/${id}`,{
        headers: {
          Authorization: "Bearer " + this.token, 
        },
      })
        .then((response) => {
          this.productDetail = response.data;
          console.log(this.productDetail);
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu sản phẩm: " + error);
        });
    },
  },
};
</script>
