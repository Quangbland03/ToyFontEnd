<template>
  <div class="w-[80%] bg-slate-100">
    <div
      class="max-w-xl mx-auto my-10 p-5 rounded-md shadow-md bg-blue-300 mt-20"
    >
      <h2 class="text-2xl font-semibold mb-5">Add Category</h2>
      <form @submit.prevent="addCategory">
        <!-- Category Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-600 text-sm font-medium mb-2"
            >Category Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            v-model="categoryName"
            class="w-full px-4 py-[4px] border rounded-md focus:outline-none focus:border-blue-500"
          />
          <p
            v-if="error.name"
            class="text-white bg-red-600 text-sm py-[3px] px-4 rounded-md"
          >
            {{ error.name }}
          </p>
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label
            for="description"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Description</label
          >
          <input
            type="text"
            id="description"
            name="description"
            v-model="categoryDescription"
            class="w-full px-4 py-[4px] border rounded-md focus:outline-none focus:border-blue-500"
          />
          <p
            v-if="error.description"
            class="text-white bg-red-600 text-sm py-[3px] px-4 rounded-md"
          >
            {{ error.description }}
          </p>
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Add Category
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categoryName: "",
      categoryDescription: "",
      error: {},
    };
  },
  methods: {
    addCategory() {
      // Use axios to send data to the server
      axios
        .post("https://toytoytoy.onrender.com/categories/add", {
          name: this.categoryName,
          description: this.categoryDescription,
        })
        .then((response) => {
            alert("Category added successfully");
          this.$router.push({ name: "category" });
          console.log("Category added successfully:", response.data);
        })
        .catch((error) => {
          
          console.error(error);
          if( error.response.data){
            this.error = error.response.data;
          }
   
        });
    },
  },
};
</script>
