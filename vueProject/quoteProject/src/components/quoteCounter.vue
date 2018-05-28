<template>
    <div>
        <p class="quoteadded">Quotes Added</p>
        <div class="progress-bar" role="progress-bar" aria-valuenow="60" aria-valuemax="100"
        :style="{width: (counter / 10) * 100 + '%'}">
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
