<template>
<div id="index">
    <v-app id="index.inspire" dark>
      <div>
      <v-layout>
    <v-flex xs12 sm12>
               <v-img id=img
              :src="require('@/assets/spazzy2.jpeg')"
              max-height="100%"
              max-width="100%"
              ></v-img>
    </v-flex>
  </v-layout>
  </div>

  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex
              v-for="blog in blogList"
              :key="blog._id"
              xs12 sm6
            >
              <v-card @click="changeComponent('/blog/'.concat(blog._id))">
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
            <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4"
        >
          <img :src="require('@/assets/logo.png')" alt="avatar">
        </v-avatar>
            <span class="grey--text">{{blog.author}}</span><br>
            <span>{{blog.created}}</span><br>
            <span>{{blog.content|truncate}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="dark">Share</v-btn>
          <v-btn color="dark">Explore</v-btn>
        </v-card-actions>

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
    this.getBlogList()
  },
  data: () => ({
    drawer: null,
    blogList: []
  }),
  props: {
    source: String
  },
  methods: {
    getBlogList: function () {
      this.$http.get('http://localhost:3000/blog/').then((res) => {
        console.log(res.data.data)
        this.blogList = res.data.data
      })
    },
    changeComponent: function (page) {
      this.$router.push(page)
    }
  },
  filters: {
    truncate: function (value) {
      if (value.length > 100) {
        value = value.substring(0, 100) + '...'
      }
      return value
    }
  }
}
</script>
<style>
#img{
  padding: 0%;
}

</style>
