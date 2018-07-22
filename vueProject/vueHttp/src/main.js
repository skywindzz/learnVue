import Vue from 'vue';
import VueResrouce from 'vue-resource';
import App from './App.vue';
import { request } from 'https';

Vue.use(VueResrouce);

Vue.http.options.root = 'https://vue-http-d5f94.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
