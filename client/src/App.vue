<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>


<style lang="scss">
#app{
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  @import './assets/styles.scss';
</style>

