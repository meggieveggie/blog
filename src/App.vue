<template>
  <div id="app">
    <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title class="font-weight-light" ><v-icon>home</v-icon>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-light" ><v-icon>far fa-keyboard</v-icon>Login</v-toolbar-title>
      <v-toolbar-title class="font-weight-light" ><v-icon @click="changeComponent('blogform')">fas fa-plus</v-icon>New</v-toolbar-title>
      <v-text-field
          style="max-width: 300px; margin: 50px; padding-top:5px"
          append-icon="fas fa-search"
          single-line
        />
    </v-toolbar>
    <v-content>
    <router-view/>
    </v-content>
    <v-footer app fixed>
    </v-footer>
      </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeComponent: function (page) {
      this.$router.push(page)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.v-icon{
  padding-right: .4rem;
}

</style>
