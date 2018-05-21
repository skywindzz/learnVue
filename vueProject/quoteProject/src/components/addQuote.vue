<template>
    <div>
    <div class="quotesection">
        <input class="inputbox" type="text">
    </div>
    <div class="addbutton">
        <button @click="addQuote">add quote</button>
    </div>
    </div>
    
</template>

<script>
    export default {
        methods: {
            addQuote() {
                this.$emit('quoteAdded');
            }
        }
    }
</script>

<style>
    .quotesection {
        display: flex;
        justify-content: center;
    }

    .addbutton {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .inputbox {
        width: 600px;
        height: 100px;
    }
</style>
