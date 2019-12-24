import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm = new Vue({
    el:'#div1',
    data:{
        name:'',
        age:0,
        loaded:false
    },
   async  created(){//钩子函数  vue创建完触发 
       try{
        let {data} = await Axios.get('./data/user.json');
        this.name = data.name;
        this.age = data.age;
        this.loaded = true;
       }catch(e){
           alert('数据加载失败')
       }
    },
    template:`<div >
          
    <div v-if="loaded">
    <p>名字：{{name}}</p>
     <p>年龄：{{age}}</p>
     </div>
     <div v-else> 
       加载中
      </div>

    </div>`
})