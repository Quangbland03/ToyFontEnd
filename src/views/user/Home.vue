<template>

  <nav class="p-4">
    <div class="container mx-auto">
      <!-- Navigation links -->
      <ul class="flex space-x-4">
        <li>
          <a href="#" class="text-blue-500 font-bold hover:text-blue-700"
            >Home</a
          >
        </li>
        <li>
          <a href="#" class="text-blue-500 font-bold hover:text-blue-700"
            >Robot</a
          >
        </li>
        <li>
          <a href="#" class="text-blue-500 font-bold hover:text-blue-700"
            >Hoạt hình</a
          >
        </li>
        <li>
          <a href="#" class="text-blue-500 font-bold hover:text-blue-700"
            >Cần cẩu</a
          >
        </li>
        <li>
          <a href="#" class="text-blue-500 font-bold hover:text-blue-700"
            >Máy bay</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <h1 class="text-center text-yellow-600 font-medium text-3xl my-5">
    Hãy chọn sản phẩm mà bạn yêu thích
  </h1>
  <!-- end small nav bar -->
  <div class="grid grid-cols-4 gap-5 mx-16 mt-10">
    <div v-for="product in products" :key="product.id">
      <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a :href="product.link">
          <img
            class="rounded-t-lg"
            :src="product.image"
            
          />
        </a>
        <div class="p-5">
          <a :href="product.link">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.name }}
            </h5>
          </a>
          <span class="font-bold">
            Price: <span class="text-yellow-500">{{ product.price }}</span>
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ product.description }}
          </p>
          <router-link
          :to="'/detail/' + product._id"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show detail
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            </router-link>
            
        </div>
      </div>
    </div>
  </div>

  <!-- pagination -->
  <div class="pagination-container">
    <nav class="flex items-center justify-center" aria-label="Pagination">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link text-gray-500 hover:text-gray-700"
            @click="fetchPage(currentPage - 1)"
            tabindex="-1"
            >Previous</a
          >
        </li>

        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <a
            class="page-link bg-blue-500 hover:bg-blue-700 text-white"
            @click="fetchPage(page)"
            >{{ page }}</a
          >
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a
            class="page-link text-gray-500 hover:text-gray-700"
            @click="fetchPage(currentPage + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  methods: {
    fetchPage(page) {
      axios
        .get(`https://toytoytoy.onrender.com/productss?page=${page}`)
        .then((response) => {
          console.log(response);
          this.products = response.data.data;
          this.currentPage = response.data.pagination.current_page;
          this.totalPages = response.data.pagination.last_page;
        })
        .catch((error) => {
          console.error("Lỗi khi tải dữ liệu sản phẩm: " + error);
        });
    },
  },
  created() {
    this.fetchPage(this.currentPage);
  },
};
</script>
<style>
.disabled {
  display: none;
}
.active {
  background: blue;
}
.pagination-container {
  margin-top: 20px;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.page-link:hover {
  background-color: #f1f1f1;
}

.disabled .page-link {
  cursor: not-allowed;
}

.active .page-link {
  background: blue;
  color: white;
}
</style>
