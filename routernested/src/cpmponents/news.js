export default {
template:`
   <div>
    新闻
    <div>
       <router-link to='/news/1'>x1</router-link>
       <router-link to='/news/2'>x2</router-link>
    </div>
    <router-view></router-view>
   </div>

   
`
}

export  let  router  = [
    {
      path:'1',
      component:{
        template:`<div>1111</div>`
      }
    },
    {
      path:'2',
      component:{
        template:`<div>2222</div>`
      }
    }
  ]