Vue.component('task-list', {
    template: `<div><slot></slot> <h1>{{ message }}</h1></div>`,
    data() {
        return {
            message: 'vue is good'
        }
    }
});
        
new Vue({
    el: "#root"
})
