<template>
    <div>
        <ul>
            <li class="quote" v-for="(quote, index) in quotes" :key=index  @click="deleteQuote(index)"> {{ quote }} {{ index }} </li>
        </ul>

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

<style>
    .info {
        text-align: center;
        color: lightblue;
    }

    .quote {
        border: 30px 15px;
        border-color:lightskyblue
    }
</style>
