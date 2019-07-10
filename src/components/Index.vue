<template>
<div>
    <v-container id=image>
               <v-img id=img 
              :src="require('@/assets/logo.png')"
              aspect-ratio="1"
              class="grey lighten-2"
              max-height="100%"
              max-width="200"
              ></v-img>
              <h1 class="display-2 font-weight-light" style="padding: .4em"> Spazzy757 </h1>
  </v-container> 
  
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
              :key="blog.id"
              xs12 sm6
            >
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
            <span class="grey--text">{{blog.author}}</span><br>
            <span>{{blog.created}}</span><br>
            <span>{{blog.content}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="light-blue darken-1">Share</v-btn>
          <v-btn flat color="light-blue darken-1">Explore</v-btn>
        </v-card-actions>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

</div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    blogList: [
      {
        id: '1',
        title: 'Blog 1',
        author: 'Brendan Kamp', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus. Tincidunt arcu non sodales neque sodales.',
        created: '1st July 19',
        image: 'https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
     {
        id: '2',
        title: 'Blog 2',
        author:'Brendan Kamp', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus. Tincidunt arcu non sodales neque sodales.',
        created: '1st July 19',
        image:'https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },{
        id: '3',
        title: 'Blog 3',
        author: 'Brendan Kamp', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus. Tincidunt arcu non sodales neque sodales.',
        created:'1st July 19',
        image: 'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
    ]
  }),
  props: {
    source: String
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
