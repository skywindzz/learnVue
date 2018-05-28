<template>
    <div>
        <div class="quotesection">
            <input class="inputbox" type="text" v-model="quote">
        </div>
            <div class="addbutton">
            <button @click="addQuote(this.quote)" class="btn btn-primary">add quote</button>
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
                if (this.quote === "") {
                    return alert('please enter a quote')
                }
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
        margin-top: 100px;
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
