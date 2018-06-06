<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                Directive
                {{ cheer }}
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>custom directive</h1>
                <p v-highlight:background="'red'">color this</p> <!-- notice on custom directive you don't need to pass arguments-->
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                cheer: "here we go"
            }
        }
    }
</script>

<style>

</style>
