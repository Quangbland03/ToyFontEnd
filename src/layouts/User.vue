<template>
  
<Header></Header>
  <router-view />
<Footer></Footer>

</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

