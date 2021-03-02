import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Company from './components/Company.vue'
import Blog from './components/Blog.vue'
import Contactus from './components/Contactus.vue'
import Notfound from './components/Notfound.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Company',
    name: 'company',
    component: Company
  },
  {
    path: '/Blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/Contactus',
    name: 'contactus',
    component: Contactus
  },
  {
    path: '*',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
