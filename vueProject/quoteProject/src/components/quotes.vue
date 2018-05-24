<template>
    <div>
        <ul v-for="quote in quotes">
            <li class="quote"> {{ quote }} </li>
        </ul>

        <div class="info">info: Click on a quote to delete it</div>
    </div>
</template>

<script>
    export default {
        props: {
            quotes: Array
        }
    }
</script>

<style>
    .info {
        text-align: center;
        color: lightblue;
    }

    .quote {
        border: 30px 15px;
        border-color:lightskyblue
    }
</style>
