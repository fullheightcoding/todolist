import Vue from 'vue'
import App from './App.vue'

// Import and use VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Import the components that will be used in our routes
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

// Create an array of routes for components
const routes = [
  { path: '/home', component: Home, name: 'Home' },
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