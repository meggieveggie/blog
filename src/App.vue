<template>
  <div id="app">
    <img alt="Spazzy logo" src="./assets/logo.png">
    <Index msg="Spazzy757"/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
