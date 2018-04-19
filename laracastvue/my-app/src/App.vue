<template>
  <div id="app">
    <message>Hello there</message>
    <message>Hey hey</message>
  </div>
</template>

<script>
import message from './components/message.vue';

export default {
  name: 'app',
  components: {
    message
  }
}
</script>

