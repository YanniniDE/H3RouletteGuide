<template>
  <div id="base-container">
    <navbar></navbar>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    'navbar': Navbar
    // 'sidebar': Sidebar
  }
}
</script>

<style lang="scss">
@import 'style/bootstrap-vars';
@import '~bootstrap/scss/bootstrap';

h2, h3, h4 {
  margin-top: 10px !important;
}
</style>
