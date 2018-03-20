import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  /*mode: 'history',*/
  routes: [
    {
      path: '/',
      meta:{title:'首页'},
      redirect: '/home',
    },
    {
      path: '/home',
      meta:{title:'首页',keepAlive:true},
      component: () => import('../components/Home.vue'),
    },
    {
      path: '/bus',
      meta:{title:'公司业务',keepAlive:true},
      component: () => import('../components/Bus.vue'),
    },
    {
      path: '/culture',
      meta:{title:'企业文化',keepAlive:true},
      component: () => import('../components/Culture.vue'),
    },
    {
      path: '/duty',
      meta:{title:'社会责任',keepAlive:true},
      component: () => import('../components/Duty.vue')
    },
    {
      path: '/about',
      meta:{title:'关于风速',keepAlive:true},
      component: () => import('../components/About.vue')
    },
    {
      path: '/join',
        meta:{title:'加入我们',keepAlive:false},
      component: () => import('../components/Join.vue')
    },
    {
      path:'*',
      meta:{title:'首页'},
      redirect:'/home'
    }
  ]
})
