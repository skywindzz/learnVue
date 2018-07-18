import Vue from 'vue';
import VueResrouce from 'vue-resource';
import App from './App.vue';

Vue.use(VueResrouce);

new Vue({
  el: '#app',
  render: h => h(App)
})
