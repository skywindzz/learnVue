<template>
  <div>
    <p>the count is {{ count }}</p>
    <button @click="count +=1">add 1</button>

    <div>
      <p style="white-space: pre-line;"> {{message}} </p>
      <textarea v-model="message" placeholder="input something"></textarea>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      count: 0,
      message: ''
    }
  }
}

</script>
