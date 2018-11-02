<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <h1>Home</h1>

    <TodoList></TodoList>

  </div>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    TodoList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
