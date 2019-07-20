<template>
   <div id="blog">
    <v-app id="blog.inspire" dark>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10>
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout>
            <v-flex>
              <v-card>
                <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="display-2" v-text="blog.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>

              <v-layout row wrap justify-center align-center>
                 <v-avatar>
          <img :src="require('@/assets/logo.png')" alt="avatar">
        </v-avatar>
            <span class="grey--text">{{blog.author}}</span><br>
          </v-layout>
            <span>{{blog.created | moment("dddd, MMMM Do YYYY")}}</span><br>
                <v-img
                  :src="blog.image"
                  height="25em"
                >
                </v-img>
               <v-card-actions>
                 <div v-if="activeUser">
          <v-btn color="success" @click="changeComponent('/blogform/'.concat(blog._id))">Edit</v-btn>
          <v-btn color="error" @click='destroyPost()'>Delete</v-btn>
                 </div>
        </v-card-actions>
        <div>
            <vue-markdown :source="blog.content"></vue-markdown>
          </div>
          <span v-if="error">{{error}}</span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
    </v-app>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'

export default {
  mounted: function () {
    this.getBlog()
  },
  data: () => ({
    activeUser: null,
    drawer: null,
    blog: [],
    error: null
  }),

  components: {
    VueMarkdown
  },

  props: {
    source: String
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    getBlog: function () {
      this.$http.get('http://localhost:3000/blog/'.concat(this.$route.params.id)).then((res) => {
        console.log(res.data.data)
        this.blog = res.data.data
      })
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    destroyPost: function () {
      this.$http.delete('http://localhost:3000/blog/'.concat(this.$route.params.id))
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({path: '/'})
          } else {
            this.error = 'There was an error deleting your blog'
          }
          console.log(response.data)
        })
        .catch((e) => {
          console.error(e)
        })
    },
    changeComponent: function (page) {
      this.$router.push({ path: page })
    }
  }
}
</script>
<style>
#img{
    top: 8rem;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

</style>
