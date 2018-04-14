Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return { show : true };
    },
    template: `
        <div class="container" v-show="show">
            <article class="message">
                <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="close" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <p>{{ body }}</p>
                </div>
            </article>
        </div>`,
    methods: {
        close() {
            this.show = false;
        }
    }
})

new Vue ({
    el: '#message'
})