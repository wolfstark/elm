import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/scss/_index.scss';
import App from './App';

/* eslint-disable no-new */
/* eslint-disable no-console */
Vue.use(VueRouter);
Vue.use(VueResource);
console.log(App);

const routes = [{
  path: '/goods',
  component: goods,
}, {
  path: '/ratings',
  component: ratings,
}, {
  path: '/seller',
  component: seller,
}];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
  router,
});

router.replace('/goods');
