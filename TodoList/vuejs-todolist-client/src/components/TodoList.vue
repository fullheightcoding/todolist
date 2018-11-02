<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <div>todolist</div>

    <div>
      
      <ul class="list-group" v-cloak>
        <li v-for="(todoListItem, index) in todoList" v-bind:key="todoList.id" class="list-group-item todolistitem">
          {{ index }} {{ todoListItem.text }}
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String,
  },
  data: function() {
    return {
      todoList: [
        // Populate with dummy data for now
        // TODO: Add a call to a Web API that returns a list of todolistitems
        { id: 1, text: 'Test' },
        { id: 2, text: 'Test2'},
        { id: 2, text: 'Test3'},
        { id: 2, text: 'Test4'},
        { id: 2, text: 'Test5'},
        { id: 2, text: 'Test6'},                                
      ],
    }
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
.todolistitem {
  display: block;
}
</style>