<template>
  <div>
        <p>vue is {{ status }}</p>
        <hr>
        <button @click="changeStatus">change</button>
  </div>
</template>
<script>
    export default {
        data() {
            return { status: 'not running'}
        },
        methods: {
            changeStatus() {
                this.status = 'running'
            }
        }
    }
</script>

<style>

</style>