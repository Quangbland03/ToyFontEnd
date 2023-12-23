<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-32 h-12 mr-2"
            src="https://theme.hstatic.net/200000326645/1000824936/14/logo.png?v=260"
            alt="logo"
          />
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Login to your account
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="loginUser">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <p v-if="error.email" class="text-white  bg-red-600 text-sm py-[3px] px-4 rounded-md" >{{ error.email}}</p>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  v-model="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p v-if="error.password" class="text-white  bg-red-600 text-sm py-[3px] px-4 rounded-md" >{{ error.password}}</p>
              </div>
              <button
                class="w-full py-2 flex justify-center items-center text-white font-medium rounded-xl bg-yellow-600 hover:bg-yellow-700"
              >
                Login
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?
                <router-link
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/register"
                  >Register here</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      email: "",
      password: "",
      error:{}
    };
  },
  methods: {
    loginUser() {
      // Create a user data object
      const userData = {
        email: this.email,
        password: this.password,
      };

      // Send a POST request to login the user
      axios
        .post("https://toytoytoy.onrender.com/auth/login", userData)
        .then((response) => {
            console.log(response);
            Cookies.set('token', response.data.token, { expires: 1 });
            this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
            console.log(error);
        });
    },
  },
};
</script>
