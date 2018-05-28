<template>
    <div class="container">
        <quote-counter :counter="counter"></quote-counter>
        <add-quote :counter="counter" :quotes="quotes" @addCounter="addCounter" @insertQuote="quotes.push($event)" ></add-quote>
        <quote-frame :quotes="quotes" :counter="counter" @reduceCounter="reduceCounter"></quote-frame>
    </div>
</template>

<script>
    import counter from "./components/quoteCounter.vue"
    import add from "./components/addQuote.vue"
    import quotes from "./components/quotes.vue"
    
    export default {
        components: {
            quoteCounter: counter,
            addQuote: add,
            quoteFrame: quotes
        },

        data() {
            return {
                counter: 0,
                quotes: []
            }
        },

        methods: {
            exe() {
                console.log('here')
            },

            addCounter() {
                this.counter++;
                console.log("this exectued");
            },

            reduceCounter() {
                this.counter--;
            }
        }
    }
</script>

<style>
    
</style>
