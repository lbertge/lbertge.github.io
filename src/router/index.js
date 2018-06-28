import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'feed',
    component: Blog
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }, {
    path: '/about',
    name: 'about',
    props: {about: true},
    component: Blog
  }]
})
