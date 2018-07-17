import Vue from 'vue';
import VueResrouce from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
