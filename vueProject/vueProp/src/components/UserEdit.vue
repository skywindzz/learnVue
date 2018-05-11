<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>My age is {{ myAge }}</p>
        <button @click="editAge">edit age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        props:['myAge'],
        methods: {
            editAge() {
                this.myAge = 30,
                //this.$emit('ageWasEdited', this.myAge)
                //eventBus.$emit('ageWasEdited', this.myAge);
                //using central eventbus's method
                eventBus.changeAge(this.myAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
