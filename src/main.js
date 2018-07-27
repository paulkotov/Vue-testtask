import Vue from 'vue'
import VueWebsocket from 'vue-websocket';
import router from './router'
import store from './store';
import { sync } from 'vuex-router-sync';

import App from './App.vue';

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.use(VueWebsocket, 'wss://echo.websocket.org');
