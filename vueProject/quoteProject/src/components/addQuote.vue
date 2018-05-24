<template>
    <div>
    <div class="quotesection">
        <input class="inputbox" type="text" v-model="quote">
    </div>
        <div class="addbutton">
        <button @click="addQuote(this.quote)">add quote</button>
    </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            counter: Number,
            quotes: Array
        },

        data() {
            return {
                quote:''
            }
        },

        methods: {

            addQuote() {
                if (this.counter < 10) {
                    this.$emit('addCounter', this.counter);
                    this.$emit('insertQuote', this.quote);
                } else {
                    return alert('Too many quotes!! please delete some quotes before adding')
                }
                return this.quote=""
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
