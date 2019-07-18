<template>
  <div id="app">
    <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title class="font-weight-light display-1">Spazzy757</v-toolbar-title>
      <v-toolbar-title class="font-weight-light" @click="changeComponent('/')" ><v-icon >home</v-icon>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-light" @click="changeComponent('/posts-manager')">Posts Manager</v-toolbar-title>
      <v-toolbar-title href="#" @click.prevent="login" v-if="!activeUser"><v-icon>far fa-keyboard</v-icon>Login</v-toolbar-title>
      <v-toolbar-title href="#" @click.prevent="logout" v-else>Logout</v-toolbar-title>
      <v-toolbar-title class="font-weight-light" @click="changeComponent('/blogform')"><v-icon >fas fa-plus</v-icon>New</v-toolbar-title>
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
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    changeComponent: function (page) {
      this.$router.push({ path: page })
    },
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
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
