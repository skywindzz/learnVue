<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">show alert</button>
                <br></br>
                <transition name="fade">
                    <div class="alert alert-info" v-show="show">info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">info</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">info</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0; /* beware that this only last 1 frame so opacity will return to 1 after a second */
    }

    .fade-enter-active {
        transition: opacity 1s; 
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
       
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    .slide-leave {

    }

    .slide-leave-active {
       animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
