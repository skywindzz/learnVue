<template>
    <div>
    <div class="frame">
        <span class="quote" v-for="(quote, index) in quotes" :key=index  @click="deleteQuote(index)"> {{ quote }}  </span>
    </div>
        <div class="info">info: Click on a quote to delete it</div>
    </div>
</template>

<script>
    export default {
        props: {
            quotes: Array,
            couter: Number
        },

        data() {
            return {
                quoteSelected: null,
            }
        },

        methods: {
            deleteQuote(index) {
                this.$emit('reduceCounter', this.counter)
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style scoped>
    .frame {
        display: flex;
        justify-content:space-around;
        width: 1000px;
        flex-wrap: wrap;

    }

    .info {
        display: block;
        text-align: center;
        color: lightblue;
    }

    .quote {
        border-style: solid;
        border-color:lightskyblue;
        margin: 30px 20px 30px 20px;
        padding: 30px 30px;
        font-size: 2em;
    }
    
    
</style>
