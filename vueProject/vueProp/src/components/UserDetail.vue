<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>My name is {{ myName }}
        <p>My name is {{ reverseName() }}</p>
        <button @click="resetName"></button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: String 
        },
        methods: {
            reverseName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'Anthony',
                this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
