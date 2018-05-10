<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>The name is {{ name }}</p>
        <button @click="nameChange">Edit name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit @sendNewName="name = $event"></app-user-edit>
            </div>
        </div> 
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Max '
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            nameChange() {
                this.name = "Anna"
            },
            nameChange2() {

            }

        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
