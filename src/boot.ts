declare var require: any;
import Vue from 'vue';
import VueRouter from 'vue-router';
var App = require('./app/app.vue').default;
var Page1 = require('./app/page1/page1.vue').default;
var Page2 = require('./app/page2/page2.vue').default;

Vue.use(VueRouter);
const routes = [
  {path: '/', component: App},
  {path: '/page1', component: Page1},
  {path: '/page2', component: Page2},
];

const router = new VueRouter({
  routes,
});
// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      router,
                      el: '#app',
                      components: {App,Page1,Page2},
                      render: h => h('app'),
                    });
