declare var require: any;
import Vue from 'vue';
var App = require('./app/app.vue').default;
require('./app/home/home.vue');

// tslint:disable-next-line:no-unused-expression
const app = new Vue({
                      el: '#app',
                      components: {App},
                      render: h => h('app'),
                    });
