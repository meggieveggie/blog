<template>
<!--Navbar-->

<nav class="navbar navbar-expand-lg navbar-dark primary-color">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#"><h1>{{ msg }}</h1></a>

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      
    </ul>
    <!-- Links -->

    <form class="form-inline">
      <div class="md-form my-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      </div>
    </form>

</nav>
<!--/.Navbar-->

</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  font-family: 'Roboto', sans-serif;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
