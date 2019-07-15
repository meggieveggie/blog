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
          <v-layout row wrap>
            <v-flex>
              <v-card>
                <v-img
                  :src="blog.image"
                  height="25em"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="blog.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-title>
          <div>
               <v-card-actions>
          <v-btn color="dark" @click='crPost()'>Edit</v-btn>
          <v-btn color="dark" @click='destroyPost()'>Delete</v-btn>
        </v-card-actions>
            <span class="grey--text">{{blog.author}}</span><br>
            <span>{{blog.created}}</span><br>
            <span>{{blog.content}}</span>
          </div>
          <span v-if="error">{{error}}</span>
        </v-card-title>
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
export default {
  mounted: function () {
    this.getBlog()
  },
  data: () => ({
    drawer: null,
    blog: [],
    error: null
  }),
  props: {
    source: String
  },
  methods: {
    getBlog: function () {
      this.$http.get('http://localhost:3000/blog/'.concat(this.$route.params.id)).then((res) => {
        console.log(res.data.data)
        this.blog = res.data.data
      })
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
