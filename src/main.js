import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store';
import '@/assets/style/main.scss';

import beginning from '@/components/beginning.vue'
import main from '@/components/main.vue'
import about from '@/components/about.vue'
import product from '@/components/product.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  // base: '/test/companytest/',
  routes: [
    {
      path: '/main',
      component: main
    },
    {
      path: '/main/*',
      redirect: '/main'
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/about/*',
      redirect: '/about'
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/product/*',
      redirect: '/product'
    },
    {
      path: '/',
      component: beginning
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
