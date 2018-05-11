<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>My name is {{ myName }}
        <p>My name is {{ reverseName() }}</p>
        <p>My age is {{ myAge }}</p>
        <button @click="resetName">reset</button>
        <button @click="resetFn()">reset</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';
    export default {
        props: {
            myName: String,
            resetFn: Function,
            myAge: Number
        },

        created() {
             eventBus.$on('ageWasEdited',(age)=> {
                this.myAge = age
            })
        },

        methods: {
            reverseName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'Anthony',
                //this.$emit('nameWasReset', this.myName);
                eventBus.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
