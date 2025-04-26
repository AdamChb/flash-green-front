<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background: #F8FFF4; 
}
#app {
  min-height: 100vh;
}
</style>
