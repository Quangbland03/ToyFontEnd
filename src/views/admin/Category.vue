<template>
  <div class="w-[80%]">
    <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
        <h1 class="text-3xl">Manage Categories</h1>
      </div>
      <router-link
        to="/admin/category/add"
        class="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Add Category</router-link
      >
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left py-3">Name</th>
              <th class="text-left py-3">Description</th>
              <th class="text-left py-3">Action</th>
              <th></th>
            </tr>
            <tr
              :id="'cate_' + category._id"
              class="border-b hover:bg-orange-100 bg-gray-100"
              v-for="category in categories"
              :key="category.id"
            >
              <td class="py-3">
                <input
                  v-model="category.name"
                  type="text"
                  class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
                />
              </td>
              <td class="py-3">
                <input
                  v-model="category.description"
                  type="text"
                  class="bg-transparent border-b-2 border-gray-300 py-2 outline-none"
                />
              </td>
              <td class="py-[8px] mt-2 gap-6 flex justify-start items-center">
                <router-link
                  class="mr-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  :to="'/admin/category/edit/' + category._id"
                  >Edit</router-link
                >
                <button
                  type="button"
                  @click="confirmDelete(category._id)"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
    };
  },

  mounted() {
    axios
      .get("https://toytoytoy.onrender.com/categories")
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    confirmDelete(id) {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this category?"
      );
      if (isConfirmed) {
        this.deleteCategory(id);
      }
    },
    deleteCategory(id) {
      axios
        .get(`https://toytoytoy.onrender.com/categories/delete/${id}`)
        .then((response) => {
          const deletedProductRow = document.getElementById(`cate_${id}`);
          if (deletedProductRow) {
            deletedProductRow.remove();
          }
          console.log("category deleted successfully:", response);
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    },
  },
};
</script>
