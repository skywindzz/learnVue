window.Event = new Vue();


Vue.component('communicate', {
    template: `<input placeholder="Enter your coupon code" @blur="sendingMessage">`,
    methods: {
        sendingMessage() {
            Event.$emit('calling');
        }
    }
})


new Vue({
    el: "#root",
    data: {
        talked: false
    },

    created() {
        Event.$on('calling', ()=> {
            return this.talked = true
        })
    }
})