<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animation</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">show alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">info</div>
                </transition>
                <transition name="slide" type="animation" appear> <!--when you have transion and animation both on an element you can use type to specify which one to use animation or transition !-->
                    <div class="alert alert-info" v-if="show">info</div>
                </transition>
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    >
                    <div class="alert alert-info" v-if="show">info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">info</div>
                    <div class="alert alert-warning" v-else="!show" key="warning">warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load" >Load / Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">  <!-- this tells vue.js do not look for css classes and immediately execute the javascript hooks this will save some time !-->
                    <div style="width: 300px; height: 100px; backgroundColor: lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle components</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" 
                        v-for="(number, index) in numbers"
                        @click="removeItem(index)"
                        style="cursor: pointer">{{ number }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from "./dangerAlert.vue";
    import SuccessAlert from "./successAlert.vue";

    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        
        components: {
            appDangerAlert: DangerAlert, //beware of the camel case, this tells vue.js where to seperate when using - on tags ex. appDangerAlert becomes app-danger-alert
            appSuccessAlert: SuccessAlert
        },

        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(()=> {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done(); //because you are using javascript to animate execute done function is necessary in case the code is asynchronous
                //you don't need to use done if you are using css animations since css animation already have timing included
                    }
                }, 20)
                
            },
            afterEnter(el) {
                console.log('afterEnter')
            },
            enterCancelled(el) {
                console.log("enterCancelled");
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                 let round = 1;
                const interval = setInterval(()=> {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done(); //because you are using javascript to animate execute done function is necessary in case the code is asynchronous
                //you don't need to use done if you are using css animations since css animation already have timing included
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
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
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
       animation: slide-out 1s ease-out forwards;
       transition: opacity 1s;
       opacity: 0;
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
