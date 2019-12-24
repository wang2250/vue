//入口
import Vue from 'vue/dist/vue.esm';//vue
import VueRouter from 'vue-router';
import router from './router';

import '../css/main.css';

Vue.use(VueRouter);

let vm = new Vue({
    el:'#div1',
    data:{

    },
    router
})

