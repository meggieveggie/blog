<template>
 <div>
    <v-app id="blogform.inspire" dark>
      <v-content>
    <v-container fluid fill-heigh>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
              <v-toolbar dark color="dark">
                <v-toolbar-title>Blog form</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
  <v-form
    ref="form"
    lazy-validation
  >

  <v-text-field
      label="Author"
      required
      v-model="blog.author"
      color="white"
    ></v-text-field>

   <v-text-field
      label="Title"
      required
      v-model="blog.title"
      color="white"
    ></v-text-field>

    <v-text-field
      label="Image"
      required
      v-model="blog.image"
      color="white"
    ></v-text-field>

    <v-textarea
      label="Content"
      required
      v-model="blog.content"
      outline
      color="white"
    ></v-textarea>

    <span v-if="error">{{error}}</span>

  </v-form>
  </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='updateOrCreate()' color="dark">Sumbit</v-btn>
              </v-card-actions>
              </v-card>
   </v-flex>
  </v-layout>
  </v-container>
  </v-content>
   </v-app>
  </div>

</template>
<script>

export default {
  mounted: function () {
    if (this.$route.params.id !== undefined) {
      this.$http.get('http://localhost:3000/blog/'.concat(this.$route.params.id)).then((res) => {
        if (res.status === 200) {
          this.blog = res.data.data
          this.create = false
        } else {
          this.error = 'There was an error getting your post'
        }
        console.log(res.data)
      })
        .catch((e) => {
          console.error(e)
        })
    }
  },
  data: () => ({
    create: true,
    blog: {
      author: '',
      title: '',
      image: '',
      content: ''
    },
    error: null
  }),
  methods: {
    updateOrCreate: function () {
      if (this.create) {
        this.createPost()
      } else {
        this.updatePost()
      }
    },
    createPost: function () {
      this.$http.post('http://localhost:3000/blog/', this.blog).then((response) => {
        if (response.status === 200) {
          this.$router.push({path: '/blog/'.concat(response.data.data._id)})
        } else {
          this.error = 'There was an error creating your post'
        }
        console.log(response.data)
      })
        .catch((e) => {
          console.error(e)
        })
    },
    updatePost: function () {
      this.$http.put('http://localhost:3000/blog/'.concat(this.$route.params.id), this.blog).then((response) => {
        if (response.status === 200) {
          this.$router.push({path: '/blog/'.concat(response.data.data._id)})
        } else {
          this.error = 'There was an error updating your post'
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
