import Vue from 'vue';
import App from './App.vue';

export const dataCentral = new Vue({
  methods: {
    counterChange(counter) {
      this.$emit('quoteAdded', counter);
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
