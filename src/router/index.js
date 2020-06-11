import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FlightApp from '../views/FlightApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flights',
    name: 'Flight Search',
    component: FlightApp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
