<template>
  <div id="app">
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->

    <!-- Bootstrap nav -->
   <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- <a class="navbar-brand" href="#">TodoList</a> -->
          <router-link to="/home" class="navbar-brand">TodoList</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <!-- use router-link component for navigation. -->
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
    <!-- route outlet -->
    <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Contact,
    Home,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak] {
    display: none;
}
.starter-template {
  padding: 40px 15px;
  text-align: center;
}
</style>
