import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import ListUsers from '../components/Users/ListUsers.vue'
import CreateUsers from '../components/Users/CreateUsers.vue'
import UpdateUsers from '../components/Users/UpdateUsers.vue'
import Block from '../views/Block.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hello_world',
    name: 'Hello World',
    component: HelloWorld
  },
  {
    path: '/list_users',
    name: 'List Users',
    component: ListUsers
  },
  {
    path: '/create_users',
    name: 'Create Users',
    component: CreateUsers
  },
  {
    path: '/update_users',
    name: 'Update Users',
    component: UpdateUsers
  },
  {
    path: '/block',
    name: 'Block',
    component: Block
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
