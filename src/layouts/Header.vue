<template>
  <div class="header">
    <div class="flex items-center my-2 justify-end mr-4 text-sm font-bold">
      <router-link
        class="bg-red-500 p-2 mx-4 text-white px-4 hover:bg-red-700"
  
        to="/admin"
        >Amin</router-link
      >
      <router-link
        class="flex items-center rounded-2xl p-2 justify-center"
        to="cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-red-500 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <p class="text-slate-400 pr-[12px]">Cart</p>
      </router-link>
      <p class="mr-2" v-if="this.token">Hi: {{user.username}}</p>
     <router-link  @click="logout"  class="bg-red-500 p-2 mx-4 text-white px-4 rounded-2xl hover:bg-red-700" v-if="this.token"  to="/login">Logout</router-link>
     
      <router-link
        class="bg-[#9a772c] p-2 mx-4 text-white px-4 rounded-2xl hover:bg-blue-700"
        v-if="this.token == null"
        to="/register"
        >Register</router-link
      >
      <router-link
        class="bg-red-500 p-2 mx-4 text-white px-4 hover:bg-red-700"
        v-if="this.token == null"
        to="/login"
        >Login</router-link
      >
    </div>
    <header
      class="h-[103px] bg-[#efa707] mt-4 flex items-center justify-around"
    >
      <div>
        <a
          href="
        "
          ><img
            src="https://theme.hstatic.net/200000326645/1000824936/14/logo.png?v=260"
            alt="logo"
        /></a>
      </div>
      <div>
        <router-link
          class="px-4 py-10 bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Trang Chủ</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/gioithieu"
          >Giới thiệu</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/STL"
          >STL File & 3d</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Jewlry 3d models</router-link
        >

        <router-link
          class="px-4 py-10 hover:bg-[#9a772c] text-white text-[14px] font-bold italic uppercase border-1 border-[#a0c1e0] transition ease-in-out duration-200"
          to="/"
          >Hướng dẫn kỹ thuật</router-link
        >
      </div>
    </header>
    <div class="flex items-center justify-center">
      <input
        type="text"
        class="rounded-md w-[95%] border-none outline-none text-sm h-[30px] border-transparent"
        placeholder="Nhập từ khóa tìm kiếm..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 text-red-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  </div>
  <!-- slide -->
  <div>
    <img
      src="https://theme.hstatic.net/200000326645/1000824936/14/slideshow_1.jpg?v=260"
      alt=""
    />
  </div>

</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      token: Cookies.get("token"),
      user:{}
    };
  },
  methods: {
    logout: () => {
      axios
        .get("https://toytoytoy.onrender.com/auth/logout")
        .then((response) => {
          Cookies.remove("token");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    axios
      .get("https://toytoytoy.onrender.com/auth/getUser", {
        headers: {
          Authorization: "Bearer " + this.token, 
        },
      })
      .then((response) => {
        // Xử lý phản hồi từ server (response.data sẽ chứa thông tin người dùng)
        this.user = response.data;
        console.log(response);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
      });
  },
};
</script>
