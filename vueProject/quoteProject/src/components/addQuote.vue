<template>
    <div>
    <div class="quotesection">
        <input class="inputbox" type="text" v-model="quote">
    </div>
        <div class="addbutton">
        <button @click="addQuote">add quote</button>
    </div>
    </div>
    
</template>

<script>
    export default {
        props: {
            counter: Number
        },

        data() {
            return {
                quote:''
            }
        },
        methods: {
            addQuote() {
                if (this.counter < 10) {
                    this.$emit('newQuote', this.counter, this.quote);
                    this.insertQuote(this.quote); 
                } else {
                    alert('Too many quotes!! please delete some quotes before adding')
                }
            },

            insertQuote(quote) {
                console.log(quote)
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
