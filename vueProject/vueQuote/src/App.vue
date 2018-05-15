<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h3 slot="title">{{ slotContent }}</h3>
                   <p slot="content">testing slot content</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"
    export default {
          data() {
              return {
                  slotContent: 'Slot content'
              }
          },
          components: {
              appQuote: Quote
          }
    }
</script>

<style>
     
</style>

