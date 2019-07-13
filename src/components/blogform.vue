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
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      label="Title"
      required
      color="white"
    ></v-text-field>

    <v-text-field
      label="Image"
      required
      color="white"
    ></v-text-field>

    <v-textarea
      label="Content"
      required
      outline
      color="white"
    ></v-textarea>
  </v-form>
  </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="dark">Sumbit</v-btn>
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
  data: () => ({
  })
}
</script>
