Vue.component('communicate', {
    template: `<input placeholder="Enter your coupon code" @blur="sendingMessage">`,
    methods: {
        sendingMessage() {
            this.$emit('calling');
        }
    }
})


new Vue({
    el: "#root",
    data: {
        talked: false
    },

    methods: {
        letsTalk() {
            this.talked = true
        }
    }
})