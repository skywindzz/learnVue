<template>
    <div class="container">
        <quote-counter :counter="counter"></quote-counter>
        <add-quote :counter="counter" @newQuote="addCounter" ></add-quote>
        <quote-frame></quote-frame>
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
                counter: 0
            }
        },

        methods: {
            exe() {
                console.log('here')
            },

            addCounter() {
                this.counter++;
                console.log("this exectued");
            }
        }
    }
</script>

<style>
    
</style>
