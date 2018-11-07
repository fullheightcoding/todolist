<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <form @submit="checkForm" action="https://vuejs.org" method="POST">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" class="erroritem">{{ error }}</li>
        </ul>
      </p>

      <label for="name">Name:</label>
      <input v-model="name" placeholder="edit me" type="text">
      <br>

      <label for="email">Email:</label>
      <input v-model="email" placeholder="edit me" type="email">
      <br>

      <label for="message">Message:</label>
      <textarea v-model="message" placeholder="add multiple lines" type="text"></textarea>
      <br>

      <input type="submit" value="Submit">
    </form>


    <div>contact</div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: function() {
    return {
    errors: [],
    name: null,
    email: null,
    message: null
  }},
  props: {
    msg: String
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.phone && this.message) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }

      e.preventDefault();
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
.erroritem {
  display: block;
}
</style>
