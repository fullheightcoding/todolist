import Vue from 'vue'
import App from './App.vue'

// Import and use VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Import the bootstrap vue plugin which we have added to project using: npm i bootstrap-vue
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// Vue.use(BootstrapVue);

// Import the components that will be used in our routes
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

// Create an array of routes for components
const routes = [
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contact', component: Contact, name: 'Contact' }
]

// Use the array of routes in the constructor for our VueRouter
const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

new Vue({
  //Add for vuerouter
  router,
  render: h => h(App),
}).$mount('#app')