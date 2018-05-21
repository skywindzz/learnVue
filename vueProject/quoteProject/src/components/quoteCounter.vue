<template>
    <div>
        <span class="quoteadded">Quotes Added</span>
        <div>
            {{ counter }} / 10
        </div>
    </div>
</template>

<script>
    export default {
       props: {
           counter: Number
       }
    }
</script>

<style>
    .quoteadded {
        font-size: 20px;
    }
</style>
