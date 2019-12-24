import VueRouter from 'vue-router';
import Header from './cpmponents/header';
import index from './cpmponents/index';
import news, {router as news_router} from './cpmponents/news'

export default new VueRouter({
    routes:[
      {
         path:'/',
         name:'home',
         components:{
             header:Header,
             default:index
         },
        
      },
      {
        path:'/news',
        name:'news',
        components:{
            header:Header,
            default:news
        },
        children:news_router,
     }
    ]
})
