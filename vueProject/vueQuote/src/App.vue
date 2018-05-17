<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <button @click="selectedComponent='appQuote'">Quote</button>
               <button @click="selectedComponent='appAuthor'">Content</button>
               <button @click="selectedComponent='appNew'">Title</button>
               <hr> 
               <p>{{ selectedComponent }}</p>
               <keep-alive>
                    <component :is="selectedComponent"></component>
               </keep-alive>
               <!-- <app-quote>
                   <h3 slot="title">{{ slotContent }}</h3>
                   <p slot="content">testing slot content</p>
               </app-quote> -->
            </div>
        </div>
    </div> 
</template>

<script>
    import Quote from "./components/Quote.vue"
    import Author from "./components/Author.vue"
    import New from "./components/New.vue"

    export default {
          data() {
              return {
                  slotContent: 'Slot content',
                  selectedComponent: 'appQuote'
              }
          },
          components: {
              appQuote: Quote,
              appAuthor: Author,
              appNew: New
          }
    }
</script>

<style>
     
</style>

