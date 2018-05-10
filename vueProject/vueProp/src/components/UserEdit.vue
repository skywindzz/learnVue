<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <div>
            <input type='text'>
            <button @submit="sendNewName">submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
