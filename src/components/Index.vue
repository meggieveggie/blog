<template>
<div id="index">
    <v-app id="index.inspire">
      <v-layout>
    <v-flex xs12 sm12>
      <v-card
      height="600px"
      flat
      >
               <v-img id=img
              :src="require('@/assets/spazzy2.jpeg')"
              position="90% 10%"
              height="100%"
              ></v-img>
        </v-card>
    </v-flex>
  </v-layout>
  <v-layout justify-center>
    <v-flex xs12 sm10>
      <v-card 
      hover>
        <v-container
          fluid
          grid-list-xl >
          <v-layout column>
            <v-flex
              v-for="blog in blogList"
              :key="blog._id"
              xs12 sm6
              justify-center @click="changeComponent('/blog/'.concat(blog._id))">
               <v-hover>
                 <v-card 
                 slot-scope="{ hover }"
                 :class="`elevation-${hover ? 12 : 2}`">
            <v-layout row id="blog">
            <v-flex xs12 md4 >
             <v-container id="img">
                <v-img
                  :src="blog.image">
                </v-img>
             </v-container>
             </v-flex>
                  <v-container id="text">
                  <div>
                        <span class="headline white--text" v-text="blog.title"></span>
                  </div>
            <v-avatar>
          <img :src="require('@/assets/logo.png')" alt="avatar">
        </v-avatar>
            <span class="grey--text">{{blog.author}}</span><br>
            <span>{{blog.created}}</span><br>
            <span>{{blog.content|truncate}}</span>
        <v-layout justify-end>
        <v-card-actions>
          <v-btn color="dark">Continue Reading</v-btn>
        </v-card-actions>
        </v-layout>
                  </v-container>
            </v-layout>
            </v-card>
            </v-hover>
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
      if (value.length > 700) {
        value = value.substring(0, 700) + '...'
      }
      return value
    }
  }
}
</script>
<style>

#text {
  text-align: start;
  padding: 0px 15px;
}

#img {
  padding: 0px 15px;
}

#blog {
  padding: 15px 0px;
  margin: 15px 0px;
}

</style>
